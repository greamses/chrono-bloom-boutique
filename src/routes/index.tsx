import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { WatchCard } from "@/components/WatchCard";
import { watches } from "@/data/watches";
import craftImg from "@/assets/craft.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Maison Horo · Independent Swiss Watchmaking Since 1893" },
      {
        name: "description",
        content:
          "Hand-assembled mechanical watches from the Vallée de Joux. Heritage, sport, and atelier pieces — limited production, lifetime measure.",
      },
      { property: "og:title", content: "Maison Horo · The measure of a lifetime" },
      { property: "og:description", content: "Independent Swiss watchmaking since 1893." },
    ],
  }),
});

function Index() {
  const featured = watches.slice(0, 3);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />

        {/* Featured */}
        <section className="mx-auto max-w-7xl px-6 py-32 md:px-10">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="hairline text-gold">Selected pieces</div>
              <h2 className="mt-4 max-w-2xl text-balance text-5xl md:text-6xl">
                The current<br /><span className="italic">chapter.</span>
              </h2>
            </div>
            <Link to="/collection" className="hairline border-b border-gold pb-1 text-gold">
              View all six pieces →
            </Link>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featured.map((w, i) => (
              <WatchCard key={w.id} watch={w} index={i} />
            ))}
          </div>
        </section>

        {/* Craft */}
        <section className="relative overflow-hidden border-y border-border bg-card">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-2 md:px-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="overflow-hidden"
            >
              <img
                src={craftImg}
                alt="Watchmaker assembling a movement at the Maison Horo atelier"
                width={1400}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <div className="flex flex-col justify-center">
              <div className="hairline text-gold">L'Atelier</div>
              <h2 className="mt-4 text-balance text-5xl leading-[1.05] md:text-6xl">
                Three hundred<br />and twenty hours.<br />
                <span className="italic text-gold">One watch.</span>
              </h2>
              <p className="mt-8 max-w-md text-muted-foreground">
                Each timepiece is assembled, regulated, and tested by a single
                horologer. Their initials are engraved on the rotor — a
                signature of accountability you'll never see, but always wear.
              </p>
              <Link to="/atelier" className="hairline mt-10 inline-flex w-fit border-b border-gold pb-1 text-gold">
                Inside the atelier →
              </Link>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="mx-auto max-w-7xl px-6 py-32 md:px-10">
          <div className="grid gap-16 md:grid-cols-3">
            {[
              { n: "01", t: "Independent", d: "Family-held since 1893. Beholden to no group, no quarterly target." },
              { n: "02", t: "In-house", d: "Movements designed, machined, finished, and regulated under one roof." },
              { n: "03", t: "Lifetime", d: "Every Maison Horo is serviced for the lifetime of its first owner. And the second." },
            ].map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <div className="font-display text-7xl text-gold/40">{p.n}</div>
                <h3 className="mt-6 text-3xl">{p.t}</h3>
                <p className="mt-4 text-muted-foreground">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}