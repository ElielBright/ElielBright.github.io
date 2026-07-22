"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="site-header"
    >
      <nav className="container nav-inner" aria-label="Primary">
        <Link
          href="/"
          style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--foreground)", display: "flex", alignItems: "center", gap: "0.6rem" }}
        >
          <Image
            src="/logo.png"
            alt="Eliel Kwesi Agbeke logo"
            width={32}
            height={32}
            style={{ borderRadius: "8px", border: "1px solid var(--border)" }}
          />
          Eliel<span style={{ color: "var(--accent)" }}>.</span>
        </Link>

        <div className="nav-links">
          <Link href="#experience" className="nav-link">Experience</Link>
          <Link href="#projects" className="nav-link">Projects</Link>
          <Link href="#skills" className="nav-link">Skills</Link>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=brighteliel@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
          >
            Contact
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}
