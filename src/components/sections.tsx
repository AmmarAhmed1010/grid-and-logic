import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects, services } from "@/lib/content";
import { Reveal } from "./interactive";
export function WorkGrid({ limit = 4 }: { limit?: number }) {
  return (
    <div className="work-grid">
      {projects.slice(0, limit).map((p, i) => (
        <Reveal key={p.slug} className={`project project-${i}`}>
          <Link href={`/work/${p.slug}`}>
            <div className="project-image" style={{ background: p.color }}>
              <Image
                src={`/assets/${p.image}`}
                alt={`${p.name} interface`}
                fill
                sizes="(max-width: 700px) 90vw, 55vw"
              />
              <span className="project-open">
                <ArrowUpRight />
              </span>
            </div>
            <div className="project-caption">
              <div>
                <p className="eyebrow">{p.type}</p>
                <h3>{p.name}</h3>
              </div>
              <span className="muted">0{i + 1} / 2026</span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
export function ServiceRows() {
  return (
    <div className="service-rows">
      {services.map((s, i) => (
        <Link className="service-row" href={`/services/${s.slug}`} key={s.slug}>
          <span className="eyebrow">0{i + 1}</span>
          <div>
            <h3>{s.title}</h3>
            <p>{s.short}</p>
          </div>
          <span className="service-tag">{s.tags[0]}</span>
          <ArrowUpRight size={30} />
        </Link>
      ))}
    </div>
  );
}
export function ContactCTA() {
  return (
    <section className="contact-cta">
      <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
      <Link href="/contact">
        <h2>
          Let’s make
          <br />
          it <span>happen.</span>
        </h2>
        <span className="cta-arrow">
          <ArrowUpRight />
        </span>
      </Link>
      <div className="cta-bottom">
        <p>From the first sketch to the final build.</p>
        <Link href="/contact">
          Start a conversation <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Link className="brand" href="/">
          <Image src="/assets/logo.svg" alt="" width={28} height={28} />
          Grid & Logic
        </Link>
        <p>
          Independent minds.
          <br />
          Connected by good work.
        </p>
        <div>
          <Link href="/work">Work</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">Studio</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <a href="mailto:gridandlogic@gmail.com">gridandlogic@gmail.com</a>
          <a href="tel:+923374992211">+92 337 499 2211</a>
          <a
            href="https://www.instagram.com/gridandlogic/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Grid & Logic</span>
        <span>Remote studio. Working worldwide.</span>
        <a href="#main">Back to top ↑</a>
      </div>
    </footer>
  );
}
