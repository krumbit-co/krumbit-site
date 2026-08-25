export const appStoreUrl = "https://apps.apple.com/us/app/krumbit-learn-while-scrolling/id6747910126";

export function AppStoreButton({ compact = false, label = "Download free" }: { compact?: boolean; label?: string }) {
  return <a className={`app-store-button${compact ? " compact" : ""}`} href={appStoreUrl} target="_blank" rel="noreferrer" aria-label={`${label} on the App Store`}><span className="store-mark" aria-hidden="true">A</span><span><small>{label}</small><strong>App Store</strong></span><b aria-hidden="true">↗</b></a>;
}

export function Brand() { return <Link className="brand" href="/" aria-label="Krumbit home"><img src="/krumbit-icon.png" alt="" /><span>Krumbit</span></Link>; }

const links = [["Products", "/product"], ["Custom Solutions", "/solutions"], ["About", "/about"], ["News", "/news"], ["Support", "/support"]];

export function SiteHeader() {
  return <header className="site-header"><Brand /><nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}<AppStoreButton compact label="Get it free" /></nav><details className="mobile-menu"><summary aria-label="Open menu">Menu <span>☰</span></summary><nav aria-label="Mobile navigation">{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}<a href="/privacy">Privacy</a></nav></details></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><Brand /><p>Keep scrolling. Start learning.</p><div><a href="/product">Products</a><a href="/solutions">Custom Solutions</a><a href="/about">About</a><a href="/news">News</a><a href="/privacy">Privacy</a><a href="/support">Support</a><a href="mailto:info@krumbit.co">Contact</a><span>© 2026 Krumbit Inc.</span></div></footer>;
}

export function MobileDownload() { return <a className="mobile-download" href={appStoreUrl} target="_blank" rel="noreferrer">Download Krumbit free <span aria-hidden="true">↗</span></a>; }
import Link from "next/link";
