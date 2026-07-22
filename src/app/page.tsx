"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight, Server, Database, Bot, Users, TrendingUp, Mic, Calendar, Eye,
  Box, MessageSquare, Presentation, Book, ShoppingBag, Cake, Settings, Search,
  Gamepad2, Brain, Monitor, Code2,
} from "lucide-react";

/* ---------------- Data ---------------- */

type Experience = {
  role: string;
  org: string;
  current?: boolean;
  desc: string;
};

const EXPERIENCE: Experience[] = [
  {
    role: "AI Intern / Full-Stack Developer",
    org: "Copianto AI · 2025 - Present",
    current: true,
    desc: "Built and deployed RAG-based AI applications using modern frameworks, significantly improving response relevance and latency. Engineered Slack integrations via APIs to automate workflows, and integrated AI features directly into user-facing frontend applications.",
  },
  {
    role: "Hackathon Winner & React Educator",
    org: "Skapez Mpier · 2024 - Present",
    desc: "Winner of the Bitmark Hackathon for “CardioAR”, an AI-powered AR learning platform utilizing React and Vite. Additionally, taught React development to over 3,000 students through dedicated online courses.",
  },
  {
    role: "Software Developer",
    org: "Freelance & Independent Projects · 2023 - Present",
    desc: "Developed a suite of high-impact products including a scalable e-commerce & delivery platform, a React Native mobile app, an automated trading bot, and customized AI voice tools using Coqui AI and Fish Audio.",
  },
  {
    role: "STEM & Robotics Educator",
    org: "2019 - Present",
    desc: "Taught robotics fundamentals using Arduino and Scratch. Led hands-on hardware and robotic engineering projects, introducing students to ML concepts and automated systems logic.",
  },
];

type Badge = { label: string; tone: "accent" | "success" | "gold" };

type Project = {
  title: string;
  icon: LucideIcon;
  desc: string;
  badge?: Badge;
  note?: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    title: "Ignis Claw",
    icon: Code2,
    badge: { label: "VS Code Extension", tone: "accent" },
    desc: "An AI coding agent built as a VS Code extension — bringing autonomous code generation and in-editor assistance directly into the developer workflow.",
    tags: ["AI Agent", "VS Code", "Dev Tools"],
  },
  {
    title: "Self-hosted AI Assistant",
    icon: Bot,
    badge: { label: "Self-Hosted", tone: "success" },
    note: "Administered from Telegram",
    desc: "An autonomous agent that drafts and replies to emails and WhatsApp messages — fully self-hosted and administered from Telegram.",
    tags: ["Autonomous Agent", "Email", "WhatsApp"],
  },
  {
    title: "Arcade Games",
    icon: Gamepad2,
    desc: "A collection of small games built for fun with Unity and Godot.",
    tags: ["Unity", "Godot", "Game Dev"],
  },
  {
    title: "“Eliel” AI Proxy",
    icon: Server,
    badge: { label: "Autonomous Server", tone: "success" },
    note: "100% Offline & Privacy-First",
    desc: "An end-to-end, locally hosted AI proxy daemon acting as my digital twin on WhatsApp, fully operable via a centralized Telegram administrative microservice. Processes text, audio via a custom FFmpeg/Whisper pipeline, and executes dynamic tool calling.",
    tags: ["Local LLMs", "Whisper.cpp", "Puppeteer", "Telegram API"],
  },
  {
    title: "EurekaGUI",
    icon: Monitor,
    desc: "An offline desktop application serving as a GUI for Ollama models. It allows seamless, internet-free interaction with local AI models for coding assistance and everyday tasks.",
    tags: ["Electron", "Local AI", "Ollama"],
  },
  {
    title: "FlashLearn",
    icon: Brain,
    desc: "An AI-powered RAG application that transforms documents (PPT, DOCX, PDF, Excel) into interactive learning flashcards. Features offline mobile export via HTML and JSON.",
    tags: ["RAG", "EdTech", "AI"],
  },
  {
    title: "BitZ",
    icon: Gamepad2,
    badge: { label: "🏆 Hackathon Winner", tone: "gold" },
    note: "Built in 24 Hours · 2026",
    desc: "An EdTech application built for the Edubase Bitmark Hackathon — designed and shipped in 24 hours. Won the challenge by delivering an engaging, interactive learning experience powered by the Bitmark protocol.",
    tags: ["EdTech", "Bitmark", "Hackathon"],
  },
  {
    title: "CardioAR",
    icon: Bot,
    badge: { label: "🥇 1st Place Winner", tone: "gold" },
    desc: "An AI-powered Augmented Reality learning platform built to help students explore human anatomy. Devpost Winning Hackathon Project.",
    tags: ["EdTech", "React", "Vite", "AI/AR"],
  },
  {
    title: "Yemex Delivery App",
    icon: Server,
    note: "Proprietary Application",
    desc: "A scalable delivery management application featuring a robust e-commerce module for users to seamlessly browse and purchase items.",
    tags: ["Node.js", "PostgreSQL", "Architecture"],
  },
  {
    title: "CarKits PWA",
    icon: Database,
    note: "Private Client Work",
    desc: "A Progressive Web App created for a private client in the automotive sales space, streamlining parts lookup and purchases.",
    tags: ["React", "PWA", "MongoDB"],
  },
  {
    title: "Mentorship Platform",
    icon: Users,
    desc: "A community application bridging the gap between learners and experienced professionals.",
    tags: ["Full-stack", "Web", "MongoDB"],
  },
  {
    title: "Automated Trading Bot",
    icon: TrendingUp,
    desc: "A custom financial algorithm bot built to automate trading participation with real-time analytics.",
    tags: ["Python", "Algorithms", "Finance"],
  },
  {
    title: "Sisi's Clothing",
    icon: ShoppingBag,
    desc: "An online clothing shop offering a wide range of stylish apparel.",
    tags: ["React Native", "Mobile", "Node.js"],
  },
  {
    title: "Podcast Studio Platform",
    icon: Mic,
    desc: "An audio production platform integrated with Coqui AI and Fish Audio for advanced voice cloning and natural synthesis.",
    tags: ["React", "Voice AI", "Python"],
  },
  {
    title: "Meeting Assistant Bot",
    icon: Calendar,
    desc: "An automated bot allowing seamless meeting participation, voice interactions, and note-tracking.",
    tags: ["NLP", "Automation", "Python"],
  },
  {
    title: "Object Detection Bot",
    icon: Eye,
    desc: "An object detection bot making use of computer vision, AI, and Arduino to interact with the environment.",
    tags: ["Computer Vision", "AI", "Arduino"],
  },
  {
    title: "3D Interactive Learning",
    icon: Box,
    desc: "An immersive educational experience delivering complex topics through interactive 3D models.",
    tags: ["3D", "Interactive", "Web"],
  },
  {
    title: "Ember",
    icon: MessageSquare,
    desc: "A custom-made chatbot tailored for online stores and support, designed with flexibility to integrate future AI enhancements.",
    tags: ["Chatbot", "AI Support", "E-Commerce"],
  },
  {
    title: "Slide Generator",
    icon: Presentation,
    desc: "A machine learning model that automatically generates presentation slides based on textual input.",
    tags: ["Machine Learning", "Automation", "Python"],
  },
  {
    title: "Scripture and Spirit",
    icon: Book,
    desc: "A Christian-based community platform for connecting with religious groups, accessing spiritual media, and conducting Bible studies guided by a dedicated theological AI assistant.",
    tags: ["Community", "AI Assistant", "Media"],
  },
  {
    title: "Sweet Delights",
    icon: Cake,
    desc: "A beautiful digital storefront for a pastry shop specializing in delicious fruit-based pastries.",
    tags: ["E-Commerce", "UI/UX", "Frontend"],
  },
  {
    title: "AreSistv",
    icon: Settings,
    desc: "An advanced accessibility tool built reliably as a Chrome Extension.",
    tags: ["Chrome Extension", "Accessibility", "JavaScript"],
  },
  {
    title: "Custom RAG",
    icon: Search,
    desc: "A custom-made Retrieval-Augmented Generation application that helps you with precise knowledge retrieval.",
    tags: ["LLM", "RAG", "AI"],
  },
];

const SKILLS = [
  "Python", "JavaScript", "TypeScript", "C++", "Node.js", "Express.js", "React",
  "React Native", "Next.js", "Vite", "MongoDB", "PostgreSQL", "Firebase",
  "AI Agents", "RAG Systems", "NLP", "Automation Systems", "AWS", "Render",
  "Google Cloud", "Linux", "Docker", "WebSockets", "Git", "Electron", "Arduino",
];

/* ---------------- Motion ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

/* ---------------- Card ---------------- */

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <motion.article variants={fadeUp} className="card">
      <div className="card-head">
        <div className="card-head-left">
          <span className="card-icon"><Icon size={22} aria-hidden="true" /></span>
          <h3 className="card-title">{project.title}</h3>
        </div>
        {project.badge && (
          <span className={`badge badge-${project.badge.tone}`}>{project.badge.label}</span>
        )}
      </div>
      <p className="card-desc" style={{ marginBottom: project.note ? "1rem" : "1.25rem" }}>
        {project.desc}
      </p>
      {project.note && (
        <p style={{ marginBottom: "1.25rem" }}>
          <span className="note">{project.note}</span>
        </p>
      )}
      <div className="tag-row">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </motion.article>
  );
}

/* ---------------- Page ---------------- */

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="section" style={{ minHeight: "82vh", display: "flex", alignItems: "center" }}>
        <div className="container">
          <motion.div variants={stagger} initial="hidden" animate="visible" style={{ maxWidth: "820px" }}>
            <motion.p variants={fadeUp} className="eyebrow" style={{ marginBottom: "1.25rem" }}>
              Eliel Kwesi Agbeke
            </motion.p>

            <motion.h1 variants={fadeUp} style={{ fontSize: "clamp(2.75rem, 7vw, 4.5rem)", fontWeight: 800, marginBottom: "1.25rem" }}>
              Full-Stack Developer
            </motion.h1>

            <motion.p variants={fadeUp} style={{ fontSize: "clamp(1.25rem, 3vw, 1.6rem)", color: "var(--foreground)", fontWeight: 500, marginBottom: "1.5rem" }}>
              I build <span style={{ color: "var(--accent)" }}>AI-powered</span> web &amp; mobile products.
            </motion.p>

            <motion.p variants={fadeUp} style={{ fontSize: "1.1rem", color: "var(--text-muted)", marginBottom: "2.5rem", maxWidth: "640px" }}>
              I&apos;m a full-stack developer who builds AI-powered products — I integrate and ship AI
              (RAG, LLMs, and agents) into real web and mobile apps, backed by 7+ years across Python,
              React, and modern web architecture.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#projects" className="btn btn-primary">
                View My Work <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href="https://linkedin.com/in/eliel-agbeke-7b36282a3/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Connect on LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section section-alt">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
            <h2 className="section-title">Experience</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", position: "relative", paddingLeft: "2rem", borderLeft: "2px solid var(--border-strong)" }}>
              {EXPERIENCE.map((exp) => (
                <div key={exp.role} style={{ position: "relative" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute", left: "-2.56rem", top: "0.35rem", width: "0.85rem", height: "0.85rem",
                      borderRadius: "50%", background: exp.current ? "var(--accent)" : "var(--surface)",
                      border: `2px solid ${exp.current ? "var(--accent)" : "var(--border-strong)"}`,
                      boxShadow: exp.current ? "0 0 0 4px var(--accent-soft)" : "none",
                    }}
                  />
                  <h3 style={{ fontSize: "1.35rem", fontWeight: 600 }}>{exp.role}</h3>
                  <h4 className="mono" style={{ color: "var(--accent)", fontSize: "0.85rem", margin: "0.35rem 0 0.85rem" }}>{exp.org}</h4>
                  <p style={{ color: "var(--text-muted)" }}>{exp.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
            Notable Projects
          </motion.h2>

          <motion.div className="project-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section section-alt" style={{ marginBottom: "4rem" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
            <h2 className="section-title">Technical Expertise</h2>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", maxWidth: "820px" }}>
              {SKILLS.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.4) }}
                  className="tag"
                  style={{ fontSize: "0.85rem", padding: "0.5rem 0.9rem" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
