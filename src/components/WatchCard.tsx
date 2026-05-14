import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { type Watch, formatPrice } from "@/data/watches";

export function WatchCard({ watch, index = 0 }: { watch: Watch; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to="/watch/$id"
        params={{ id: watch.id }}
        className="group block"
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-card">
          <div className="absolute inset-0 gradient-radial-gold opacity-0 transition-opacity duration-700 group-hover:opacity-60" />
          <motion.img
            src={watch.image}
            alt={watch.name}
            width={900}
            height={1100}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
          />
          <div className="absolute left-4 top-4 hairline text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {watch.collection}
          </div>
        </div>
        <div className="mt-6 flex items-baseline justify-between border-t border-border pt-4">
          <div>
            <h3 className="font-display text-2xl">{watch.name}</h3>
            <div className="mt-1 hairline text-muted-foreground">{watch.reference}</div>
          </div>
          <div className="font-display text-xl text-gold">{formatPrice(watch.price)}</div>
        </div>
      </Link>
    </motion.div>
  );
}