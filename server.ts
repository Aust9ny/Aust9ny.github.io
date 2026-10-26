import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client server-side
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  return new GoogleGenAI({
    apiKey: apiKey || "",
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

// API Route: AI Market Gap Deep Analysis & Niche Validation
app.post("/api/analyze-niche", async (req: Request, res: Response): Promise<void> => {
  try {
    const { idea, industry, targetAudience, budget, skills, language = "en" } = req.body;

    if (!idea && !industry) {
      res.status(400).json({ error: "Please provide an idea or target industry to analyze." });
      return;
    }

    const ai = getGeminiClient();
    const isThai = language === "th";

    const prompt = `Perform a comprehensive, brutally honest, and actionable Market Gap & Profitability Analysis for building a money-making software / micro-SaaS / digital product app.
${isThai ? "IMPORTANT: Respond strictly in natural, professional, high-converting Thai business language (ภาษาไทย) for all descriptions, titles, ICP details, pricing notes, and action plans." : ""}

User Input:
- Idea / Concept: ${idea || "Suggest the single most profitable overlooked gap in this industry"}
- Target Industry/Domain: ${industry || "General B2B / High-Margin Niche"}
- Target Audience: ${targetAudience || "High willingness-to-pay businesses or professionals"}
- Budget/Constraint: ${budget || "Bootstrapped (<$1,000)"}
- Skills/Focus: ${skills || "Full-stack developer / Solo builder"}

You must analyze what the real "hole in the current market" is, why existing incumbents fail or ignore it, exact willingness to pay, unit economics, MVP scope (1-2 weeks build time), and cold customer acquisition strategy.

Respond with strict JSON matching the schema.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        systemInstruction: isThai
          ? "คุณคือ Venture Capitalist, ผู้ก่อตั้ง Micro-SaaS และนักวิจัยตลาดชั้นนำที่เชี่ยวชาญการเจาะช่องว่างตลาด (Market Gap) ที่ผู้ประกอบการเดี่ยวทำกำไรได้สูงและรวดเร็ว จงตอบเป็นภาษาไทยที่กระชับ ตรงประเด็น ชี้ตัวเลขและกลยุทธ์ชัดเจน หลีกเลี่ยงคำพูดเพ้อฝัน"
          : "You are a world-class venture capitalist, micro-SaaS founder, and market researcher who specializes in spotting underserved market voids where solo builders and small teams can make high cash flow quickly. Be specific, realistic, data-driven, and avoid generic fluff.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            nicheTitle: { type: Type.STRING, description: "Punchy, descriptive name of the profitable niche" },
            oneLiner: { type: Type.STRING, description: "Clear value proposition and who it solves for" },
            marketHoleDescription: { type: Type.STRING, description: "Detailed explanation of the exact gap/void in current market" },
            whyExistingFail: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Why current solutions (spreadsheets, enterprise tools, or manual labor) fall short",
            },
            targetICP: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING, description: "Exact job title or persona (e.g. Regional HVAC Operations Manager)" },
                companySize: { type: Type.STRING, description: "Target company size or revenue" },
                corePain: { type: Type.STRING, description: "The burning urgent pain they will pay money to fix today" },
                willingnessToPay: { type: Type.STRING, description: "Estimated monthly or annual willingness to pay with justification" },
              },
              required: ["title", "companySize", "corePain", "willingnessToPay"],
            },
            scores: {
              type: Type.OBJECT,
              properties: {
                profitabilityScore: { type: Type.INTEGER, description: "Score 1-100" },
                marketGapUrgency: { type: Type.INTEGER, description: "Score 1-100" },
                competitionWhitespace: { type: Type.INTEGER, description: "Score 1-100 (100 = wide open blue ocean)" },
                speedToFirstDollar: { type: Type.INTEGER, description: "Score 1-100" },
                overallViability: { type: Type.INTEGER, description: "Score 1-100" },
              },
              required: ["profitabilityScore", "marketGapUrgency", "competitionWhitespace", "speedToFirstDollar", "overallViability"],
            },
            pricingModel: {
              type: Type.OBJECT,
              properties: {
                starterPrice: { type: Type.STRING, description: "e.g. $49/mo" },
                starterFeatures: { type: Type.STRING, description: "What is included" },
                proPrice: { type: Type.STRING, description: "e.g. $199/mo (sweet spot)" },
                proFeatures: { type: Type.STRING, description: "Core revenue driver package" },
                agencyOrEnterprisePrice: { type: Type.STRING, description: "e.g. $599/mo or $1,500/year" },
                unitEconomicsNote: { type: Type.STRING, description: "Calculated path to $10,000 MRR (e.g. 50 customers @ $200/mo)" },
              },
              required: ["starterPrice", "starterFeatures", "proPrice", "proFeatures", "agencyOrEnterprisePrice", "unitEconomicsNote"],
            },
            mvpFeatureList: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3 to 5 minimal features to build in 7-14 days to validate and charge money",
            },
            unfairMoat: { type: Type.STRING, description: "How to prevent easy copying once launched" },
            customerAcquisitionPlaybook: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  channel: { type: Type.STRING, description: "Channel name (e.g. Cold LinkedIn to niche owners, Reddit keyword alerts, directory scraping)" },
                  tactics: { type: Type.STRING, description: "Concrete script or tactical steps" },
                },
                required: ["channel", "tactics"],
              },
            },
            keyRisksAndMitigations: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  risk: { type: Type.STRING },
                  mitigation: { type: Type.STRING },
                },
                required: ["risk", "mitigation"],
              },
            },
            actionTimelineDay1To30: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  phase: { type: Type.STRING, description: "e.g. Days 1-5: Problem Interviews & Pre-sales" },
                  milestones: { type: Type.STRING, description: "Concrete deliverables" },
                },
                required: ["phase", "milestones"],
              },
            },
          },
          required: [
            "nicheTitle",
            "oneLiner",
            "marketHoleDescription",
            "whyExistingFail",
            "targetICP",
            "scores",
            "pricingModel",
            "mvpFeatureList",
            "unfairMoat",
            "customerAcquisitionPlaybook",
            "keyRisksAndMitigations",
            "actionTimelineDay1To30",
          ],
        },
      },
    });

    const responseText = response.text || "{}";
    const data = JSON.parse(responseText);
    res.json({ success: true, data });
  } catch (error: unknown) {
    console.error("Niche analysis error:", error);
    const message = error instanceof Error ? error.message : "Failed to analyze niche";
    res.status(500).json({ error: message });
  }
});

// API Route: Live Market Trends & Opportunity Radar via Search Grounding
app.post("/api/discover-live-trends", async (req: Request, res: Response): Promise<void> => {
  try {
    const { category, language = "en" } = req.body;
    const ai = getGeminiClient();
    const isThai = language === "th";

    const searchPrompt = isThai
      ? `อะไรคือปัญหาจุดบกพร่องของซอฟต์แวร์/ระบบทำงาน ปัญหา B2B workflow และโอกาสทำเงิน Micro-SaaS ที่น่าสนใจในหมวดหมู่ ${
          category || "SMB automation, AI vertical workflows, compliance, and niche e-commerce operations"
        } ในช่วงไม่กี่เดือนที่ผ่านมา? ระบุจุดที่ธุรกิจบ่นเรื่องราคาซอฟต์แวร์ที่แพงเกินไปหรือฟังก์ชันที่ยังขาด ตอบเป็นภาษาไทยที่กระชับและนำไปปฏิบัติได้จริง`
      : `What are emerging unaddressed software/tool pain points, B2B workflow holes, and profitable micro-SaaS opportunities in ${
          category || "SMB automation, AI vertical workflows, compliance, and niche e-commerce operations"
        } over recent months? Highlight where businesses are complaining about software pricing or missing features.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: searchPrompt,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: isThai
          ? "วิเคราะห์และระบุช่องว่างการตลาดที่ทำกำไรสูง ที่ธุรกิจสูญเสียเงินหรือเวลา และกำลังมองหาซอฟต์แวร์ทางเลือกที่คุ้มค่า ตอบเป็นภาษาไทยอย่างชัดเจน"
          : "Identify high-margin market holes where businesses lose money or time and are seeking software alternatives.",
      },
    });

    const text = response.text || (isThai ? "ไม่พบข้อมูลเทรนด์สด" : "No trend insights found.");
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    res.json({
      success: true,
      insights: text,
      groundingSources: chunks,
    });
  } catch (error: unknown) {
    console.error("Live trends error:", error);
    const message = error instanceof Error ? error.message : "Failed to fetch live trends";
    res.status(500).json({ error: message });
  }
});

// API Route: Generate Personalized Cold Outreach Script
app.post("/api/generate-outreach-script", async (req: Request, res: Response): Promise<void> => {
  try {
    const { nicheTitle, targetICP, corePain, proposedSolution, language = "en" } = req.body;
    const ai = getGeminiClient();
    const isThai = language === "th";

    const prompt = isThai
      ? `เขียนสคริปต์ข้อความปิดการขายและติดต่อลูกค้าตรง (Cold Outreach) ที่มีอัตราตอบรับสูง ไม่ดูเป็นสแปม สำหรับบริการ B2B Micro-SaaS:
- บริการ/ช่องว่าง: ${nicheTitle}
- กลุ่มเป้าหมาย (ICP): ${targetICP}
- ปัญหาหลักเร่งด่วน: ${corePain}
- ทางออกที่เสนอ: ${proposedSolution}

จงจัดเตรียมเป็นภาษาไทย:
1. อีเมลแนะนำตัวแบบ Cold Email (ไม่เกิน 90 คำ ดึงดูดความสนใจ ชี้จุดเจ็บปวด เสนอ Call สั้นๆ 10 นาทีเพื่อแลกเปลี่ยนความคิดเห็น)
2. ข้อความสั้นทาง LINE OA / LinkedIn InMail (ไม่เกิน 50 คำ)
3. สคริปต์ข้อเสนอให้คุณค่าฟรีก่อน (Value Audit Pitch) เพื่อสร้างความเชื่อมั่นก่อนเสนอขาย`
      : `Write high-converting, non-spammy cold outreach messages for selling a B2B micro-SaaS:
- Niche: ${nicheTitle}
- Target ICP: ${targetICP}
- Core Pain: ${corePain}
- Solution: ${proposedSolution}

Provide:
1. Cold Email (under 90 words, curiosity-driven, zero buzzwords, clear low-friction CTA for a 10-minute feedback call).
2. LinkedIn InMail / Connection Message (under 50 words).
3. Value-first audit offer script (how to give them quick free value to win their business).`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        systemInstruction: isThai
          ? "คุณคือยอดนักเขียน Copywriter ด้าน Cold Outreach สำหรับธุรกิจ B2B เขียนข้อความที่ดูจริงใจ เป็นมืออาชีพ น่าเชื่อถือ และสร้างอัตราการตอบกลับสูงกว่า 30%"
          : "You are the top B2B cold outreach copywriter. Write conversational, authentic messages that get 30%+ response rates.",
      },
    });

    res.json({ success: true, script: response.text || "" });
  } catch (error: unknown) {
    console.error("Outreach generation error:", error);
    const message = error instanceof Error ? error.message : "Failed to generate outreach script";
    res.status(500).json({ error: message });
  }
});

// Health check endpoint
app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Start Express Server & attach Vite middleware
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
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
