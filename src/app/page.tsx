"use client";

import { motion } from "framer-motion";
import { ArrowRight, Server, Database, Bot, Users, TrendingUp, Mic, Calendar, Eye, Box, MessageSquare, Presentation, Book, ShoppingBag, Cake, Settings, Search } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: '800px' }}
          >
            <motion.div variants={itemVariants} style={{ marginBottom: '1.5rem' }}>
              <span className="pill" style={{ color: 'var(--primary)', borderColor: 'var(--primary)', background: 'rgba(129, 140, 248, 0.1)' }}>
                Welcome to my portfolio
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '2rem' }}>
              I build <span style={{ color: 'var(--accent)' }}>AI-powered</span> applications that scale.
            </motion.h1>
            
            <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '650px' }}>
              I am a Full-stack Developer with 7+ years of experience specializing in Python, React, modern web architecture, and AI integrations like RAG & NLP systems.
            </motion.p>
            
            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn btn-primary">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="https://linkedin.com/in/eliel-agbeke-7b36282a3/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Connect on LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Experience</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid var(--card-border)' }}>
              
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-2.55rem', top: '0.25rem', width: '1rem', height: '1rem', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary)' }}></div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>AI Intern / Full-Stack Developer</h3>
                <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Copianto AI &bull; 2025 - Present</h4>
                <p style={{ color: 'var(--text-muted)' }}>
                  Built and deployed RAG-based AI applications using modern frameworks, significantly improving response relevance and latency. Engineered Slack integrations via APIs to automate workflows, and integrated AI features directly into user-facing frontend applications.
                </p>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-2.55rem', top: '0.25rem', width: '1rem', height: '1rem', borderRadius: '50%', background: 'var(--card-border)' }}></div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Hackathon Winner & React Educator</h3>
                <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Skapez Mpier &bull; 2024 - Present</h4>
                <p style={{ color: 'var(--text-muted)' }}>
                  Winner of the Bitmark Hackathon for &quot;CardioAR&quot;, an AI-powered AR learning platform utilizing React and Vite. Additionally, taught React development to over 3,000 students through dedicated online courses.
                </p>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-2.55rem', top: '0.25rem', width: '1rem', height: '1rem', borderRadius: '50%', background: 'var(--card-border)' }}></div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Software Developer</h3>
                <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Freelance & Independent Projects &bull; 2023 - Present</h4>
                <p style={{ color: 'var(--text-muted)' }}>
                  Developed a suite of high-impact products including a scalable e-commerce & delivery platform, a React Native mobile app, an automated trading bot, and customized AI voice tools using Coqui AI and Fish Audio.
                </p>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-2.55rem', top: '0.25rem', width: '1rem', height: '1rem', borderRadius: '50%', background: 'var(--card-border)' }}></div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>STEM & Robotics Educator</h3>
                <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>2019 - Present</h4>
                <p style={{ color: 'var(--text-muted)' }}>
                  Taught robotics fundamentals using Arduino and Scratch. Led hands-on hardware and robotic engineering projects, introducing students to ML concepts and automated systems logic.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Notable Projects</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
              
              <div className="glass-panel">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(129, 140, 248, 0.1)', borderRadius: '8px', color: 'var(--primary)' }}><Bot size={24} /></div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>CardioAR</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>An AI-powered Augmented Reality learning platform built to help students explore human anatomy. Bitmark Hackathon Winning Project.</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="pill">React</span><span className="pill">Vite</span><span className="pill">AI/AR</span>
                </div>
              </div>

              <div className="glass-panel">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ padding: '0.5rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '8px', color: 'var(--accent)' }}><Server size={24} /></div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Yemex Delivery App</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>A scalable delivery management application featuring a robust e-commerce module for users to seamlessly browse and purchase items.</p>
                <span style={{ display: 'inline-block', fontSize: '0.75rem', color: 'var(--primary)', marginBottom: '1.5rem', padding: '0.2rem 0.5rem', border: '1px solid rgba(129, 140, 248, 0.3)', borderRadius: '4px' }}>Proprietary Application</span>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="pill">Node.js</span><span className="pill">PostgreSQL</span><span className="pill">Architecture</span>
                </div>
              </div>



              <div className="glass-panel">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ padding: '0.5rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '8px', color: 'var(--accent)' }}><Database size={24} /></div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>CarKits PWA</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>A Progressive Web App created for a private client in the automotive sales space, streamlining parts lookup and purchases.</p>
                 <span style={{ display: 'inline-block', fontSize: '0.75rem', color: 'var(--primary)', marginBottom: '1.5rem', padding: '0.2rem 0.5rem', border: '1px solid rgba(129, 140, 248, 0.3)', borderRadius: '4px' }}>Private Client Work</span>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="pill">React</span><span className="pill">PWA</span><span className="pill">MongoDB</span>
                </div>
              </div>

              <div className="glass-panel">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '8px', color: 'var(--accent)' }}><Users size={24} /></div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Mentorship Platform</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>A community application bridging the gap between learners and experienced professionals.</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="pill">Full-stack</span><span className="pill">Web</span><span className="pill">MongoDB</span>
                </div>
              </div>

              <div className="glass-panel">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(129, 140, 248, 0.1)', borderRadius: '8px', color: 'var(--primary)' }}><TrendingUp size={24} /></div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Automated Trading Bot</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>A custom financial algorithm bot built to automate trading participation with real-time analytics.</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="pill">Python</span><span className="pill">Algorithms</span><span className="pill">Finance</span>
                </div>
              </div>

              <div className="glass-panel">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '8px', color: 'var(--accent)' }}><ShoppingBag size={24} /></div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Sisi&apos;s Clothing</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>An online clothing shop offering a wide range of stylish apparel.</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="pill">React Native</span><span className="pill">Mobile</span><span className="pill">Node.js</span>
                </div>
              </div>

              <div className="glass-panel">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(129, 140, 248, 0.1)', borderRadius: '8px', color: 'var(--primary)' }}><Mic size={24} /></div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Podcast Studio Platform</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>An audio production platform integrated with Coqui AI and Fish Audio for advanced voice cloning and natural synthesis.</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="pill">React</span><span className="pill">Voice AI</span><span className="pill">Python</span>
                </div>
              </div>

              <div className="glass-panel">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '8px', color: 'var(--accent)' }}><Calendar size={24} /></div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Meeting Assistant Bot</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>An automated bot allowing seamless meeting participation, voice interactions, and note-tracking.</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="pill">NLP</span><span className="pill">Automation</span><span className="pill">Python</span>
                </div>
              </div>

              <div className="glass-panel">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '8px', color: 'var(--accent)' }}><Eye size={24} /></div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Object Detection Bot</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>An object detection bot making use of computer vision, AI, and Arduino to interact with the environment.</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="pill">Computer Vision</span><span className="pill">AI</span><span className="pill">Arduino</span>
                </div>
              </div>

              <div className="glass-panel">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(129, 140, 248, 0.1)', borderRadius: '8px', color: 'var(--primary)' }}><Box size={24} /></div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>3D Interactive Learning</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>An immersive educational experience delivering complex topics through interactive 3D models.</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="pill">3D</span><span className="pill">Interactive</span><span className="pill">Web</span>
                </div>
              </div>

              <div className="glass-panel">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '8px', color: 'var(--accent)' }}><MessageSquare size={24} /></div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Ember</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>A custom-made chatbot tailored for online stores and support, designed with flexibility to integrate future AI enhancements.</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="pill">Chatbot</span><span className="pill">AI Support</span><span className="pill">E-Commerce</span>
                </div>
              </div>

              <div className="glass-panel">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(129, 140, 248, 0.1)', borderRadius: '8px', color: 'var(--primary)' }}><Presentation size={24} /></div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Slide Generator</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>A machine learning model that automatically generates presentation slides based on textual input.</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="pill">Machine Learning</span><span className="pill">Automation</span><span className="pill">Python</span>
                </div>
              </div>

              <div className="glass-panel">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '8px', color: 'var(--accent)' }}><Book size={24} /></div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Scripture and Spirit</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>A Christian-based community platform for connecting with religious groups, accessing spiritual media, and conducting Bible studies guided by a dedicated theological AI assistant.</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="pill">Community</span><span className="pill">AI Assistant</span><span className="pill">Media</span>
                </div>
              </div>

              <div className="glass-panel">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(129, 140, 248, 0.1)', borderRadius: '8px', color: 'var(--primary)' }}><Cake size={24} /></div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Sweet Delights</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>A beautiful digital storefront for a pastry shop specializing in delicious fruit-based pastries.</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="pill">E-Commerce</span><span className="pill">UI/UX</span><span className="pill">Frontend</span>
                </div>
              </div>

              <div className="glass-panel">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '8px', color: 'var(--accent)' }}><Settings size={24} /></div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>AreSistv</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>An advanced accessibility tool built reliably as a Chrome Extension.</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="pill">Chrome Extension</span><span className="pill">Accessibility</span><span className="pill">JavaScript</span>
                </div>
              </div>

              <div className="glass-panel">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(129, 140, 248, 0.1)', borderRadius: '8px', color: 'var(--primary)' }}><Search size={24} /></div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Custom RAG</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>A custom-made Retrieval-Augmented Generation application that helps you with precise knowledge retrieval.</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="pill">LLM</span><span className="pill">RAG</span><span className="pill">AI</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section" style={{ background: 'rgba(255, 255, 255, 0.01)', marginBottom: '4rem' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <h2 className="section-title">Technical Expertise</h2>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', maxWidth: '800px', margin: '0 auto' }}>
              {["Python", "JavaScript", "TypeScript", "C++", "Node.js", "Express.js", "React", "React Native", "Next.js", "Vite", "MongoDB", "PostgreSQL", "Firebase", "AI Agents", "RAG Systems", "NLP", "Automation Systems", "AWS","render", "Google Cloud", "Linux", "Contabo", "Docker", "WebSockets", "Git", "Electron", "Arduino"].map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="pill" 
                  style={{ fontSize: '1rem', padding: '0.75rem 1.5rem', background: 'rgba(15, 17, 21, 0.5)' }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
