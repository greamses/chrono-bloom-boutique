import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="font-display text-2xl tracking-tight">
          Maison<span className="text-gold">·</span>Horo
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {[
            { to: "/", label: "Home" },
            { to: "/collection", label: "Collection" },
            { to: "/atelier", label: "Atelier" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hairline text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "hairline text-gold" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button className="hairline border-b border-gold pb-1 text-gold transition-opacity hover:opacity-70">
          Bag (0)
        </button>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4 md:px-10">
        <div>
          <div className="font-display text-2xl">Maison<span className="text-gold">·</span>Horo</div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Independent watchmaking, assembled by hand in the Vallée de Joux since 1893.
          </p>
        </div>
        {[
          { title: "Maison", items: ["Collection", "Atelier", "Heritage", "Boutiques"] },
          { title: "Service", items: ["Care", "Warranty", "Authenticity", "Contact"] },
          { title: "Discover", items: ["Journal", "Newsletter", "Press", "Careers"] },
        ].map((c) => (
          <div key={c.title}>
            <div className="hairline text-gold">{c.title}</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {c.items.map((i) => (
                <li key={i} className="cursor-pointer transition-colors hover:text-foreground">{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-7xl px-6 text-xs text-muted-foreground md:px-10">
        © {new Date().getFullYear()} Maison Horo · Genève
      </div>
    </footer>
  );
}