"use client";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X, Check, MoveUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { demoContactAdapter } from "@/lib/contact";

export function Header() {
  const menuButton = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const links = [
    ["Work", "/work"],
    ["Services", "/services"],
    ["Studio", "/about"],
    ["Contact", "/contact"],
  ];
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Grid and Logic home">
        <Image src="/assets/logo.svg" alt="" width={34} height={34} />
        <span>
          Grid <span className="muted">&</span> Logic
          <span className="brand-dot">®</span>
        </span>
      </Link>
      <nav
        className={open ? "navigation is-open" : "navigation"}
        aria-label="Main navigation"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setOpen(false);
            menuButton.current?.focus();
          }
        }}
      >
        {links.map(([name, href]) => (
          <Link
            key={href}
            href={href}
            aria-current={path.startsWith(href) ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {name}
          </Link>
        ))}
        <Link
          className="header-cta"
          href="/contact"
          onClick={() => setOpen(false)}
        >
          Let’s talk <ArrowUpRight size={17} />
        </Link>
      </nav>
      <button
        ref={menuButton}
        className="menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduce ? {} : { opacity: [0.8, 1], y: [12, 0] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55 }}
    >
      {children}
    </motion.div>
  );
}
export function GridInstallation() {
  const [angle, setAngle] = useState(0);
  return (
    <div className="installation" aria-label="Interactive perspective grid">
      <div className="installation-label">
        <span className="live-dot" /> GRID EXPERIMENT / 001
      </div>
      <div
        className="lattice-wrap"
        style={{ transform: `rotate(${angle}deg)` }}
      >
        <div className="lattice lattice-a" />
        <div className="lattice lattice-b" />
        <div className="lattice lattice-c" />
      </div>
      <div className="installation-bottom">
        <span>FORM × FUNCTION</span>
        <button
          onClick={() => setAngle(angle + 30)}
          aria-label="Rotate grid installation"
        >
          <MoveUpRight size={20} />
        </button>
      </div>
    </div>
  );
}
export function ContactForm() {
  const [status, setStatus] = useState("");
  return (
    <form
      className="contact-form"
      onSubmit={async (e) => {
        e.preventDefault();
        const fields = new FormData(e.currentTarget);
        try {
          const result = await demoContactAdapter.prepare({
            name: String(fields.get("name")),
            email: String(fields.get("email")),
            service: String(fields.get("service")),
            message: String(fields.get("message")),
          });
          setStatus(result.message);
        } catch (error) {
          setStatus(
            error instanceof Error
              ? error.message
              : "Unable to prepare enquiry.",
          );
        }
      }}
    >
      <div className="form-row">
        <label>
          Your name
          <input
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            placeholder="Alex Morgan"
          />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="alex@company.com"
          />
        </label>
      </div>
      <label>
        What are you looking to build?
        <select name="service" required defaultValue="">
          <option value="" disabled>
            Select a project type
          </option>
          <option>3D configurator</option>
          <option>Website or ecommerce</option>
          <option>Brand and design</option>
          <option>Creative development</option>
        </select>
      </label>
      <label>
        A little about your project
        <textarea
          name="message"
          required
          minLength={15}
          maxLength={3000}
          rows={4}
          placeholder="Tell us about your idea, what you need and your timeline."
        />
      </label>
      <p className="form-note">
        Demo form. To send an enquiry, use the studio email below.
      </p>
      <button className="button" type="submit">
        Prepare enquiry <ArrowUpRight size={19} />
      </button>
      <p role="status" className="form-status">
        {status && (
          <>
            <Check size={18} />
            {status}
          </>
        )}
      </p>
    </form>
  );
}
