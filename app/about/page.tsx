export const metadata = {
  title: "About Us — Krumbit",
  description: "Meet the founders building Krumbit, a healthier way to turn everyday scrolling into learning.",
};

const founders = ["Hengrui Liang", "Arnav Saharan"];

export default function About() {
  return (
    <div className="legal-page">
      <SiteHeader />
      <main className="legal-main about-main">
        <div className="legal-mark">K</div>
        <p className="section-label news-label">About us</p>
        <h1>Building a smarter way to scroll.</h1>
        <p className="legal-lead">Krumbit turns spare moments into opportunities to discover, recall, and keep something worth knowing.</p>
        <section className="legal-card">
          <h2>Our mission</h2>
          <p>We are building a healthier alternative to mindless feeds—one that keeps the ease of short-form content while changing the outcome from passive consumption to meaningful learning.</p>
          <h2>What we believe</h2>
          <p>Learning should be easy to start, active enough to stick, and visible enough to motivate another session. Technology should work with people&apos;s existing habits while helping those habits produce a better result.</p>
        </section>
        <section className="value-grid"><article><span>01</span><h3>Curiosity first</h3><p>Give people an inviting path into subjects they care about.</p></article><article><span>02</span><h3>Recall over reach</h3><p>Measure value by what learners retain, not how long they remain on screen.</p></article><article><span>03</span><h3>Progress without pressure</h3><p>Make small learning sessions feel worthwhile and repeatable.</p></article></section>
        <section className="founders-section" aria-labelledby="founders-title">
          <p className="section-label">The people behind Krumbit</p>
          <h2 id="founders-title">Founders</h2>
          <div className="founder-list">
            {founders.map((founder, index) => (
              <article className="founder-card" key={founder}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div className="founder-avatar" aria-hidden="true">{founder.charAt(0)}</div>
                <div><small>FOUNDER</small><h3>{founder}</h3></div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
import { SiteFooter, SiteHeader } from "../components/site-chrome";
