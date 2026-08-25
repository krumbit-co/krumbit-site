export const metadata = {
  title: "Krumbit Secures Angel Funding — Krumbit News",
  description: "Krumbit has secured angel funding to accelerate its mission to turn everyday scrolling into meaningful learning.",
};

export default function News() {
  return (
    <div className="legal-page">
      <SiteHeader />
      <main className="legal-main">
        <div className="legal-mark">K</div>
        <p className="section-label news-label">Company news · August 25, 2026</p>
        <h1>Krumbit secures angel funding.</h1>
        <p className="legal-lead">New backing will help us build a healthier alternative to mindless scrolling—and put useful learning into more people&apos;s spare minutes.</p>
        <article className="legal-card news-article">
          <p>Krumbit has secured angel funding to accelerate our mission: make every scroll an opportunity to learn something worth remembering.</p>
          <p>The funding will support continued product development, expansion of our bite-sized learning library, and improvements to the personalized experience that connects each learner with topics they genuinely care about.</p>
          <h2>Why we are building Krumbit</h2>
          <p>Short-form feeds have become one of the most familiar habits in the world. Krumbit keeps the ease and rhythm of that format, then changes the outcome: quick visual lessons, active recall, and progress people can see over time.</p>
          <h2>What comes next</h2>
          <p>We are staying focused on the fundamentals—better lessons, stronger recall, more relevant topics, and a product people are happy to open when they have five minutes to spare.</p>
          <p>We are grateful to our early supporters, learners, and angel backers for believing that the next generation of feeds can leave people feeling smarter than when they arrived.</p>
          <p>Media and partnership inquiries can be sent to <a href="mailto:info@krumbit.co">info@krumbit.co</a>.</p>
        </article>
        <aside className="press-box"><p className="section-label">ABOUT KRUMBIT</p><h2>A smarter alternative to mindless scrolling.</h2><p>Krumbit is a short-form learning product that combines visual lessons, quick recall, personalized topics, and visible progress. It is available for iPhone and iPad.</p><div><a href="/about">Company story →</a><a href="/product">Explore the product →</a><a href="mailto:info@krumbit.co">Media contact →</a></div></aside>
      </main>
      <SiteFooter />
    </div>
  );
}
import { SiteFooter, SiteHeader } from "../components/site-chrome";
