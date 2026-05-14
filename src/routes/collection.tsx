import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { WatchCard } from "@/components/WatchCard";
import { watches, collections } from "@/data/watches";

export const Route = createFileRoute("/collection")({
  component: CollectionPage,
  head: () => ({
    meta: [
      { title: "The Collection · Maison Horo" },
      { name: "description", content: "Six pieces. Heritage, Sport, and Atelier — each a study in restraint." },
    ],
  }),
});

function CollectionPage() {
  const [filter, setFilter] = useState<(typeof collections)[number]>("All");
  const list = filter === "All" ? watches : watches.filter((w) => w.collection === filter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="pt-32">
        <section className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hairline text-gold">The Collection · Six pieces</div>
            <h1 className="mt-6 max-w-3xl text-balance text-6xl md:text-8xl">
              Restraint, <span className="italic text-gold">measured</span>.
            </h1>
          </motion.div>

          <div className="mt-16 flex flex-wrap gap-8 border-b border-border pb-6">
            {collections.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`hairline transition-colors ${
                  filter === c ? "text-gold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-16 grid gap-12 pb-32 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            >
              {list.map((w, i) => (
                <WatchCard key={w.id} watch={w} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}