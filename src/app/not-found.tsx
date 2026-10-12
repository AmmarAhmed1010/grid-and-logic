import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page-hero">
      <p className="eyebrow">404 / OFF THE GRID</p>
      <h1>
        Let’s get you
        <br />
        back on track.
      </h1>
      <Link className="button" href="/">
        Back to the studio ↗
      </Link>
    </section>
  );
}
