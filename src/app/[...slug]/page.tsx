import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { projects, services } from "@/lib/content";
import { WorkGrid, ServiceRows, ContactCTA } from "@/components/sections";
import { ContactForm } from "@/components/interactive";
const routes = [
  "about",
  "services",
  "work",
  "contact",
  ...services.map((s) => `services/${s.slug}`),
  ...projects.map((p) => `work/${p.slug}`),
];
export function generateStaticParams() {
  return routes.map((r) => ({ slug: r.split("/") }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const key = slug.join("/");
  const item =
    services.find((s) => key === `services/${s.slug}`) ||
    projects.find((p) => key === `work/${p.slug}`);
  return {
    title:
      item?.title ??
      ({
        about: "The studio",
        services: "Our services",
        work: "Selected work",
        contact: "Start a conversation",
      }[key] ||
        "Page"),
    description:
      item?.description ??
      "Explore Grid & Logic — an independent design and technology studio.",
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const key = slug.join("/");
  if (!routes.includes(key)) notFound();
  const service = services.find((s) => key === `services/${s.slug}`);
  const project = projects.find((p) => key === `work/${p.slug}`);
  if (key === "contact")
    return (
      <section className="contact-page">
        <div>
          <p className="eyebrow">LET’S BUILD SOMETHING GOOD</p>
          <h1>
            It starts with
            <br />a <span>hello.</span>
          </h1>
          <p className="large-copy">
            Tell us what you have in mind.
            <br />
            We’ll help you find the next step.
          </p>
          <div className="contact-details">
            <span className="eyebrow">REACH THE STUDIO</span>
            <a href="mailto:gridandlogic@gmail.com">
              gridandlogic@gmail.com <ArrowUpRight size={20} />
            </a>
            <a href="tel:+923374992211">+92 337 499 2211</a>
            <a href="https://wa.me/923374992211">WhatsApp ↗</a>
            <p>Remote-first · working worldwide</p>
          </div>
        </div>
        <ContactForm />
      </section>
    );
  if (service)
    return (
      <>
        <section className="page-hero">
          <Link className="eyebrow" href="/services">
            ← ALL SERVICES
          </Link>
          <h1>
            {service.title}
            <span>.</span>
          </h1>
          <p className="large-copy">{service.description}</p>
          <Link className="button" href="/contact">
            Discuss your project <ArrowUpRight size={20} />
          </Link>
        </section>
        <section className="service-detail light">
          <div className="detail-image">
            <Image
              src={`/assets/${service.image}`}
              alt={`${service.title} project example`}
              fill
              sizes="90vw"
            />
          </div>
          <div className="detail-grid">
            <div>
              <p className="eyebrow">THE ENGAGEMENT</p>
              <h2>
                From idea
                <br />
                to interface.
              </h2>
              <p>
                We scope each engagement around your product, audience and
                existing platform. These are the foundations we’ll work through
                together.
              </p>
            </div>
            <div>
              {service.deliverables.map((d, i) => (
                <div className="deliverable" key={d}>
                  <span>0{i + 1}</span>
                  <h3>{d}</h3>
                  <Check size={20} />
                </div>
              ))}
              <p className="detail-note">
                Scope and timelines are agreed before the project begins.
                Integrations depend on your chosen platform and available
                access.
              </p>
            </div>
          </div>
        </section>
        <ContactCTA />
      </>
    );
  if (project)
    return (
      <>
        <section className="page-hero">
          <Link href="/work" className="eyebrow">
            ← SELECTED WORK
          </Link>
          <p className="project-kicker">
            {project.name} / {project.type}
          </p>
          <h1>{project.title}</h1>
          <p className="large-copy">{project.description}</p>
          <a
            className="button"
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            Visit live project <ArrowUpRight size={20} />
          </a>
        </section>
        <section className="project-detail light">
          <div className="case-image" style={{ background: project.color }}>
            <Image
              src={`/assets/${project.image}`}
              alt={`${project.name} website screenshot`}
              fill
              sizes="90vw"
            />
          </div>
          <div className="case-info">
            <p className="eyebrow">PROJECT SCOPE</p>
            <div>
              {project.scope.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
          <div className="detail-grid">
            <div>
              <p className="eyebrow">THE CHALLENGE</p>
              <h2>
                Making complexity
                <br />
                feel simple.
              </h2>
              <p>{project.challenge}</p>
            </div>
            <div>
              <p className="eyebrow">THE APPROACH</p>
              <h2>
                Considered at
                <br />
                every step.
              </h2>
              <p>{project.approach}</p>
              <p className="detail-note">
                Linked work is listed on the existing Grid & Logic website. This
                overview describes the visible experience; no conversion or
                revenue results are claimed.
              </p>
            </div>
          </div>
          <Link className="text-link" href="/work">
            Explore more work <ArrowUpRight size={20} />
          </Link>
        </section>
        <ContactCTA />
      </>
    );
  if (key === "work")
    return (
      <>
        <section className="page-hero">
          <p className="eyebrow">SELECTED WORK / 2026</p>
          <h1>
            Proof in the
            <br />
            <span>making.</span>
          </h1>
          <p className="large-copy">
            Products, platforms and identities.
            <br />A look at the things we’ve brought to life.
          </p>
        </section>
        <section className="work-section light">
          <WorkGrid />
        </section>
        <ContactCTA />
      </>
    );
  if (key === "services")
    return (
      <>
        <section className="page-hero">
          <p className="eyebrow">OUR CAPABILITIES</p>
          <h1>
            Designed together.
            <br />
            Built <span>better.</span>
          </h1>
          <p className="large-copy">
            From defining the experience to writing the code.
            <br />
            One connected team, all the way through.
          </p>
        </section>
        <section className="services-section">
          <ServiceRows />
        </section>
        <section className="light service-detail">
          <div className="detail-grid">
            <h2>
              The right team
              <br />
              for your next move.
            </h2>
            <div>
              <p className="large-copy">
                Start with the problem. We’ll shape the right mix of design,
                technology and commerce around it.
              </p>
              <p>
                Whether you need a new storefront, an interactive product
                experience or a clearer identity, we define a practical scope
                before the work begins.
              </p>
            </div>
          </div>
        </section>
        <ContactCTA />
      </>
    );
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">THE STUDIO / GRID & LOGIC</p>
        <h1>
          Curious minds.
          <br />
          Connected <span>craft.</span>
        </h1>
        <p className="large-copy">
          An independent digital product studio.
          <br />
          Making good things with people who care.
        </p>
      </section>
      <section className="light studio-section">
        <div className="studio-grid">
          <h2>
            Designers who think.
            <br />
            Engineers who feel.
          </h2>
          <div>
            <p className="large-copy">
              We work at the intersection of design and technology, with a
              shared belief that a great digital experience should be useful,
              distinctive and well built.
            </p>
            <p>
              Our remote studio works with brands across locations and
              timezones. We keep teams compact and communication direct, so
              ideas move from discussion to the browser.
            </p>
          </div>
        </div>
        <div className="principles">
          {[
            [
              "Clarity first",
              "A written scope and shared decisions keep the project moving.",
            ],
            [
              "Craft throughout",
              "Design and engineering happen together, with real previews.",
            ],
            [
              "Ownership matters",
              "Documentation and source code make the handover practical.",
            ],
          ].map(([t, d], i) => (
            <div key={t}>
              <span>0{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
