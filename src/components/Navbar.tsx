"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container"
      style={{ paddingTop: '2rem', paddingBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
    >
      <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--foreground)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Image src="/logo.png" alt="Eliel Logo" width={36} height={36} style={{ borderRadius: '8px', border: '1px solid var(--card-border)' }} />
        Eliel<span style={{ color: 'var(--primary)' }}>.</span>
      </Link>
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link href="#experience" className="pill" style={{ border: 'none', background: 'transparent' }}>Experience</Link>
        <Link href="#projects" className="pill" style={{ border: 'none', background: 'transparent' }}>Projects</Link>
        <Link href="#skills" className="pill" style={{ border: 'none', background: 'transparent' }}>Skills</Link>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=brighteliel@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
          Contact Me
        </a>
      </div>
    </motion.nav>
  );
}
