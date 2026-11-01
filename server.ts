import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { db } from "./src/server/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// --- DEVOPS HEALTH & METRICS ENDPOINTS ---
app.get("/api/health", (_req: Request, res: Response) => {
  const dbStatus = db.getStatus();
  res.json({
    status: "healthy",
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
    database: dbStatus,
    system: {
      nodeVersion: process.version,
      platform: process.platform,
      memoryUsageMB: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
    },
  });
});

// --- CONTACT FORM API ---
app.post("/api/contact", async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({ error: "Name, email, and message are required." });
      return;
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).json({ error: "Invalid email address format." });
      return;
    }

    const saved = await db.createContact({ name, email, subject, message });
    console.log(`[Contact API] New message received from ${name} <${email}>`);

    res.status(201).json({
      success: true,
      message: "Message received successfully.",
      data: saved,
    });
  } catch (error: unknown) {
    console.error("Contact API error:", error);
    res.status(500).json({ error: "Failed to submit contact message." });
  }
});

app.get("/api/contact/messages", async (_req: Request, res: Response): Promise<void> => {
  try {
    const messages = await db.getContacts();
    res.json({ success: true, count: messages.length, messages });
  } catch (error: unknown) {
    console.error("Get contacts error:", error);
    res.status(500).json({ error: "Failed to retrieve messages." });
  }
});

// --- GUESTBOOK / ENDORSEMENTS API ---
app.get("/api/guestbook", async (_req: Request, res: Response): Promise<void> => {
  try {
    const entries = await db.getGuestbook();
    res.json({ success: true, count: entries.length, entries });
  } catch (error: unknown) {
    console.error("Get guestbook error:", error);
    res.status(500).json({ error: "Failed to retrieve guestbook entries." });
  }
});

app.post("/api/guestbook", async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, role, company, message, avatar_color } = req.body;

    if (!name || !message) {
      res.status(400).json({ error: "Name and message are required." });
      return;
    }

    const entry = await db.addGuestbookEntry({
      name,
      role: role || "Visitor",
      company: company || "Community",
      message,
      avatar_color,
    });

    res.status(201).json({ success: true, entry });
  } catch (error: unknown) {
    console.error("Add guestbook error:", error);
    res.status(500).json({ error: "Failed to submit guestbook entry." });
  }
});

// --- PROJECT STATS (VIEWS & LIKES) ---
app.get("/api/projects/stats", async (_req: Request, res: Response): Promise<void> => {
  try {
    const stats = await db.getProjectStats();
    res.json({ success: true, stats });
  } catch (error: unknown) {
    console.error("Get project stats error:", error);
    res.status(500).json({ error: "Failed to fetch project stats." });
  }
});

// --- GITHUB LIVE REPOSITORIES API (WITH CACHING) ---
interface CachedRepoData {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

let githubReposCache: { data: CachedRepoData[]; timestamp: number } | null = null;
const GITHUB_CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes cache to prevent GitHub API rate limits

app.get("/api/github/repos", async (req: Request, res: Response): Promise<void> => {
  const username = (req.query.username as string) || process.env.GITHUB_USERNAME || "Aust9ny";
  const force = req.query.force === "true";
  const now = Date.now();

  // Return cached data if fresh
  if (!force && githubReposCache && now - githubReposCache.timestamp < GITHUB_CACHE_TTL_MS) {
    res.json({
      success: true,
      cached: true,
      username,
      updatedAt: new Date(githubReposCache.timestamp).toISOString(),
      repos: githubReposCache.data,
    });
    return;
  }

  try {
    const headers: Record<string, string> = {
      "User-Agent": "Gap-Seek-Portfolio",
      Accept: "application/vnd.github.v3+json",
    };
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=100`,
      { headers }
    );

    if (!response.ok) {
      // If rate-limited or error, fallback to cache if available
      if (githubReposCache) {
        res.json({
          success: true,
          cached: true,
          warning: `GitHub API returned ${response.status}. Serving stale cache.`,
          username,
          repos: githubReposCache.data,
        });
        return;
      }
      res.status(response.status).json({
        error: `GitHub API error: ${response.statusText}`,
      });
      return;
    }

    const rawRepos = (await response.json()) as Array<Record<string, unknown>>;
    const formattedRepos: CachedRepoData[] = rawRepos.map((r) => ({
      id: Number(r.id),
      name: String(r.name || ""),
      full_name: String(r.full_name || ""),
      description: r.description ? String(r.description) : null,
      html_url: String(r.html_url || ""),
      homepage: r.homepage ? String(r.homepage) : null,
      stargazers_count: Number(r.stargazers_count || 0),
      forks_count: Number(r.forks_count || 0),
      language: r.language ? String(r.language) : null,
      topics: Array.isArray(r.topics) ? (r.topics as string[]) : [],
      updated_at: String(r.updated_at || ""),
      fork: Boolean(r.fork),
    }));

    githubReposCache = { data: formattedRepos, timestamp: now };

    res.json({
      success: true,
      cached: false,
      username,
      updatedAt: new Date(now).toISOString(),
      repos: formattedRepos,
    });
  } catch (error: unknown) {
    console.error("Failed to fetch GitHub repos:", error);
    if (githubReposCache) {
      res.json({
        success: true,
        cached: true,
        warning: "Network error contacting GitHub. Serving cache.",
        repos: githubReposCache.data,
      });
      return;
    }
    res.status(500).json({ error: "Could not fetch repositories from GitHub." });
  }
});

app.post("/api/projects/:id/like", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const stat = await db.incrementProjectLike(id);
    res.json({ success: true, stat });
  } catch (error: unknown) {
    console.error("Project like error:", error);
    res.status(500).json({ error: "Failed to like project." });
  }
});

app.post("/api/projects/:id/view", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const stat = await db.incrementProjectView(id);
    res.json({ success: true, stat });
  } catch (error: unknown) {
    console.error("Project view error:", error);
    res.status(500).json({ error: "Failed to record project view." });
  }
});

// --- SERVER SETUP & VITE ATTACHMENT ---
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Portfolio API & App running on http://0.0.0.0:${PORT}`);
    console.log(`📊 Health Endpoint: http://localhost:${PORT}/api/health`);
  });
}

startServer();
