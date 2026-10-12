import Link from "next/link";
import { ArrowUpRight, ArrowDown, Plus } from "lucide-react";
import { GridInstallation, Reveal } from "@/components/interactive";
import { WorkGrid, ServiceRows, ContactCTA } from "@/components/sections";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-meta">
          <span>
            <span className="live-dot" /> INDEPENDENT DIGITAL STUDIO
          </span>
          <span>DESIGN / TECHNOLOGY / COMMERCE</span>
        </div>
        <div className="hero-main">
          <div className="hero-copy">
            <h1>
              Good design.
              <br />
              Great <span>logic.</span>
            </h1>
            <div className="hero-description">
              <span className="tiny-cross">
                <Plus />
              </span>
              <p>
                We turn ambitious ideas into digital experiences that work
                beautifully. From interactive 3D to your next storefront.
              </p>
            </div>
            <Link href="/work" className="button">
              Explore our work <ArrowUpRight size={20} />
            </Link>
          </div>
          <GridInstallation />
        </div>
        <div className="hero-bottom">
          <span>CREATIVE THINKING. PRECISE ENGINEERING.</span>
          <a href="#selected-work">
            SCROLL TO EXPLORE <ArrowDown size={15} />
          </a>
        </div>
      </section>
      <div className="capability-strip">
        <span>3D CONFIGURATORS</span>
        <Plus />
        <span>DIGITAL EXPERIENCES</span>
        <Plus />
        <span>ECOMMERCE</span>
        <Plus />
        <span>BRAND SYSTEMS</span>
      </div>
      <section className="work-section light" id="selected-work">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>
              Ideas made
              <br />
              <span className="outline-word">tangible.</span>
            </h2>
          </div>
          <div>
            <p>
              A few things we’ve put out into the world.
              <br />
              Built to be used. Designed to be remembered.
            </p>
            <Link className="text-link" href="/work">
              All projects <ArrowUpRight size={18} />
            </Link>
          </div>
        </Reveal>
        <WorkGrid />
      </section>
      <section className="services-section">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">02 / WHAT WE DO</p>
            <h2>
              One studio.
              <br />
              Many possibilities.
            </h2>
          </div>
          <p>
            Strategy, design and engineering,
            <br />
            working together from day one.
          </p>
        </Reveal>
        <ServiceRows />
      </section>
      <section className="studio-section light">
        <p className="eyebrow">03 / THE WAY WE WORK</p>
        <div className="studio-grid">
          <h2>
            Small enough to care.
            <br />
            Built to <span>deliver.</span>
          </h2>
          <div>
            <p className="large-copy">
              We’re a compact, remote-first studio of designers and engineers.
              The people you talk to are the people who build your product.
            </p>
            <p>
              Clear scope. Open communication. Thoughtful decisions. We stay
              close to the work and bring you into the process.
            </p>
            <Link className="text-link" href="/about">
              Meet the studio <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <div className="principles">
          <div>
            <span>01</span>
            <h3>Built in the open</h3>
            <p>
              See the work take shape with regular previews and clear decisions.
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Made to last</h3>
            <p>
              Reusable systems and considered engineering, beyond launch day.
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Yours to own</h3>
            <p>Your code, your platform and a clear handover.</p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
