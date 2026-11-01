import fs from 'fs';
import path from 'path';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
  status: 'unread' | 'read';
}

export interface GuestbookEntry {
  id: string;
  name: string;
  role: string;
  company: string;
  message: string;
  avatar_color: string;
  created_at: string;
}

export interface ProjectStat {
  project_id: string;
  likes: number;
  views: number;
  updated_at: string;
}

export interface DatabaseState {
  contacts: ContactMessage[];
  guestbook: GuestbookEntry[];
  projectStats: Record<string, ProjectStat>;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

// Initial default seeds for guestbook and project reactions
const defaultState: DatabaseState = {
  contacts: [],
  guestbook: [
    {
      id: 'seed-1',
      name: 'Sarah Lin',
      role: 'Staff Engineer',
      company: 'CloudScale Inc.',
      message: 'Impressive architecture on OmniFlow! The event-driven worker queue design is exceptionally clean.',
      avatar_color: 'blue',
      created_at: new Date(Date.now() - 86400000 * 3).toISOString(),
    },
    {
      id: 'seed-2',
      name: 'David Chen',
      role: 'Head of Engineering',
      company: 'Apex Systems',
      message: 'Great full-stack portfolio. Very pragmatic tech stack and attention to database query optimization.',
      avatar_color: 'yellow',
      created_at: new Date(Date.now() - 86400000 * 7).toISOString(),
    },
  ],
  projectStats: {
    omniflow: { project_id: 'omniflow', likes: 42, views: 320, updated_at: new Date().toISOString() },
    apexmetrics: { project_id: 'apexmetrics', likes: 38, views: 245, updated_at: new Date().toISOString() },
    'codepulse-ai': { project_id: 'codepulse-ai', likes: 56, views: 410, updated_at: new Date().toISOString() },
    nexusmart: { project_id: 'nexusmart', likes: 24, views: 180, updated_at: new Date().toISOString() },
    hyperroute: { project_id: 'hyperroute', likes: 31, views: 215, updated_at: new Date().toISOString() },
    syncspace: { project_id: 'syncspace', likes: 29, views: 195, updated_at: new Date().toISOString() },
  },
};

class PortfolioDatabase {
  private pool: Pool | null = null;
  private isPostgres = false;
  private memoryState: DatabaseState = defaultState;

  constructor() {
    this.initFileStore();
    this.initPostgres();
  }

  private initFileStore() {
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }
      if (fs.existsSync(DB_FILE)) {
        const raw = fs.readFileSync(DB_FILE, 'utf-8');
        this.memoryState = { ...defaultState, ...JSON.parse(raw) };
      } else {
        this.saveToFile();
      }
    } catch (err) {
      console.warn('File store init notice:', err);
    }
  }

  private saveToFile() {
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }
      fs.writeFileSync(DB_FILE, JSON.stringify(this.memoryState, null, 2), 'utf-8');
    } catch (err) {
      console.error('Failed to write to file database:', err);
    }
  }

  private async initPostgres() {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      console.log('⚡ DB Engine: Using Local Persistent File Storage (Set DATABASE_URL to use PostgreSQL)');
      return;
    }

    try {
      this.pool = new Pool({
        connectionString: databaseUrl,
        ssl: process.env.NODE_ENV === 'production' && !databaseUrl.includes('localhost') ? { rejectUnauthorized: false } : undefined,
        max: 10,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 4000,
      });

      // Test connection
      const client = await this.pool.connect();
      console.log('✅ DB Engine: Connected to PostgreSQL successfully!');
      this.isPostgres = true;

      // Create Tables if not exist
      await client.query(`
        CREATE TABLE IF NOT EXISTS contacts (
          id VARCHAR(64) PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          subject VARCHAR(255),
          message TEXT NOT NULL,
          created_at TIMESTAMPTZ DEFAULT NOW(),
          status VARCHAR(32) DEFAULT 'unread'
        );

        CREATE TABLE IF NOT EXISTS guestbook (
          id VARCHAR(64) PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          role VARCHAR(255) NOT NULL,
          company VARCHAR(255) NOT NULL,
          message TEXT NOT NULL,
          avatar_color VARCHAR(32) DEFAULT 'blue',
          created_at TIMESTAMPTZ DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS project_stats (
          project_id VARCHAR(64) PRIMARY KEY,
          likes INT DEFAULT 0,
          views INT DEFAULT 0,
          updated_at TIMESTAMPTZ DEFAULT NOW()
        );
      `);

      // Auto-migrate existing data from memory / db.json into PostgreSQL
      const contactsCount = await client.query('SELECT COUNT(*) FROM contacts');
      if (parseInt(contactsCount.rows[0].count, 10) === 0 && this.memoryState.contacts.length > 0) {
        console.log(`📦 Auto-migrating ${this.memoryState.contacts.length} existing contacts from db.json into PostgreSQL...`);
        for (const c of this.memoryState.contacts) {
          await client.query(
            `INSERT INTO contacts (id, name, email, subject, message, created_at, status)
             VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFLICT (id) DO NOTHING`,
            [c.id, c.name, c.email, c.subject, c.message, c.created_at, c.status]
          );
        }
      }

      const gbCount = await client.query('SELECT COUNT(*) FROM guestbook');
      if (parseInt(gbCount.rows[0].count, 10) === 0 && this.memoryState.guestbook.length > 0) {
        console.log(`📦 Auto-migrating ${this.memoryState.guestbook.length} existing guestbook entries into PostgreSQL...`);
        for (const g of this.memoryState.guestbook) {
          await client.query(
            `INSERT INTO guestbook (id, name, role, company, message, avatar_color, created_at)
             VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFLICT (id) DO NOTHING`,
            [g.id, g.name, g.role, g.company, g.message, g.avatar_color, g.created_at]
          );
        }
      }

      const statsCount = await client.query('SELECT COUNT(*) FROM project_stats');
      if (parseInt(statsCount.rows[0].count, 10) === 0 && Object.keys(this.memoryState.projectStats).length > 0) {
        for (const [pid, s] of Object.entries(this.memoryState.projectStats)) {
          await client.query(
            `INSERT INTO project_stats (project_id, likes, views, updated_at)
             VALUES ($1, $2, $3, $4) ON CONFLICT (project_id) DO NOTHING`,
            [pid, s.likes, s.views, s.updated_at]
          );
        }
      }

      client.release();
    } catch (err) {
      console.warn('⚠️ PostgreSQL connection failed, falling back to persistent file store:', (err as Error).message);
      this.isPostgres = false;
      this.pool = null;
    }
  }

  // --- CONTACTS ---
  async createContact(contact: Omit<ContactMessage, 'id' | 'created_at' | 'status'>): Promise<ContactMessage> {
    const newContact: ContactMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: contact.name,
      email: contact.email,
      subject: contact.subject || 'Portfolio Inquiry',
      message: contact.message,
      created_at: new Date().toISOString(),
      status: 'unread',
    };

    if (this.isPostgres && this.pool) {
      try {
        await this.pool.query(
          `INSERT INTO contacts (id, name, email, subject, message, created_at, status)
           VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [newContact.id, newContact.name, newContact.email, newContact.subject, newContact.message, newContact.created_at, newContact.status]
        );
        return newContact;
      } catch (e) {
        console.error('Postgres insert error, saving to memory fallback:', e);
      }
    }

    this.memoryState.contacts.unshift(newContact);
    this.saveToFile();
    return newContact;
  }

  async getContacts(): Promise<ContactMessage[]> {
    if (this.isPostgres && this.pool) {
      try {
        const res = await this.pool.query(`SELECT * FROM contacts ORDER BY created_at DESC`);
        return res.rows;
      } catch (e) {
        console.error('Postgres fetch error, falling back:', e);
      }
    }
    return this.memoryState.contacts;
  }

  // --- GUESTBOOK ---
  async getGuestbook(): Promise<GuestbookEntry[]> {
    if (this.isPostgres && this.pool) {
      try {
        const res = await this.pool.query(`SELECT * FROM guestbook ORDER BY created_at DESC LIMIT 50`);
        return res.rows;
      } catch (e) {
        console.error('Postgres guestbook fetch error:', e);
      }
    }
    return this.memoryState.guestbook;
  }

  async addGuestbookEntry(entry: Omit<GuestbookEntry, 'id' | 'created_at'>): Promise<GuestbookEntry> {
    const colors = ['blue', 'yellow', 'emerald', 'purple'];
    const chosenColor = entry.avatar_color || colors[Math.floor(Math.random() * colors.length)];

    const newEntry: GuestbookEntry = {
      id: `gb_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: entry.name,
      role: entry.role || 'Visitor / Tech Enthusiast',
      company: entry.company || 'Tech Community',
      message: entry.message,
      avatar_color: chosenColor,
      created_at: new Date().toISOString(),
    };

    if (this.isPostgres && this.pool) {
      try {
        await this.pool.query(
          `INSERT INTO guestbook (id, name, role, company, message, avatar_color, created_at)
           VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [newEntry.id, newEntry.name, newEntry.role, newEntry.company, newEntry.message, newEntry.avatar_color, newEntry.created_at]
        );
        return newEntry;
      } catch (e) {
        console.error('Postgres guestbook insert error:', e);
      }
    }

    this.memoryState.guestbook.unshift(newEntry);
    this.saveToFile();
    return newEntry;
  }

  // --- PROJECT STATS (LIKES & VIEWS) ---
  async getProjectStats(): Promise<Record<string, ProjectStat>> {
    if (this.isPostgres && this.pool) {
      try {
        const res = await this.pool.query(`SELECT * FROM project_stats`);
        const map: Record<string, ProjectStat> = {};
        for (const row of res.rows) {
          map[row.project_id] = {
            project_id: row.project_id,
            likes: Number(row.likes),
            views: Number(row.views),
            updated_at: row.updated_at,
          };
        }
        return map;
      } catch (e) {
        console.error('Postgres stats fetch error:', e);
      }
    }
    return this.memoryState.projectStats;
  }

  async incrementProjectLike(projectId: string): Promise<ProjectStat> {
    const now = new Date().toISOString();

    if (this.isPostgres && this.pool) {
      try {
        const res = await this.pool.query(
          `INSERT INTO project_stats (project_id, likes, views, updated_at)
           VALUES ($1, 1, 1, $2)
           ON CONFLICT (project_id)
           DO UPDATE SET likes = project_stats.likes + 1, updated_at = $2
           RETURNING *`,
          [projectId, now]
        );
        const row = res.rows[0];
        return {
          project_id: row.project_id,
          likes: Number(row.likes),
          views: Number(row.views),
          updated_at: row.updated_at,
        };
      } catch (e) {
        console.error('Postgres like increment error:', e);
      }
    }

    if (!this.memoryState.projectStats[projectId]) {
      this.memoryState.projectStats[projectId] = {
        project_id: projectId,
        likes: 1,
        views: 1,
        updated_at: now,
      };
    } else {
      this.memoryState.projectStats[projectId].likes += 1;
      this.memoryState.projectStats[projectId].updated_at = now;
    }
    this.saveToFile();
    return this.memoryState.projectStats[projectId];
  }

  async incrementProjectView(projectId: string): Promise<ProjectStat> {
    const now = new Date().toISOString();

    if (this.isPostgres && this.pool) {
      try {
        const res = await this.pool.query(
          `INSERT INTO project_stats (project_id, likes, views, updated_at)
           VALUES ($1, 0, 1, $2)
           ON CONFLICT (project_id)
           DO UPDATE SET views = project_stats.views + 1, updated_at = $2
           RETURNING *`,
          [projectId, now]
        );
        const row = res.rows[0];
        return {
          project_id: row.project_id,
          likes: Number(row.likes),
          views: Number(row.views),
          updated_at: row.updated_at,
        };
      } catch (e) {
        console.error('Postgres view increment error:', e);
      }
    }

    if (!this.memoryState.projectStats[projectId]) {
      this.memoryState.projectStats[projectId] = {
        project_id: projectId,
        likes: 0,
        views: 1,
        updated_at: now,
      };
    } else {
      this.memoryState.projectStats[projectId].views += 1;
      this.memoryState.projectStats[projectId].updated_at = now;
    }
    this.saveToFile();
    return this.memoryState.projectStats[projectId];
  }

  getStatus() {
    return {
      engine: this.isPostgres ? 'PostgreSQL' : 'Persistent File DB',
      postgresConnected: this.isPostgres,
      contactsCount: this.memoryState.contacts.length,
      guestbookCount: this.memoryState.guestbook.length,
    };
  }
}

export const db = new PortfolioDatabase();
