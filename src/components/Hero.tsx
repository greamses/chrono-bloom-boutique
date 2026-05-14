import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-watch.jpg";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 25,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <div ref={imageRef} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Maison Horo signature tourbillon in rose gold"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/70" />
        <div className="absolute inset-0 gradient-radial-gold opacity-40" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 md:px-10 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hairline text-gold"
        >
          Reference 1893 · Manufactured in Switzerland
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-4xl text-balance text-6xl leading-[0.95] md:text-8xl lg:text-9xl"
        >
          The measure<br />
          <span className="italic text-gold">of a lifetime.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 max-w-md text-base text-muted-foreground"
        >
          One hundred and thirty years of independent horology, assembled by hand
          in the Vallée de Joux. Six pieces. Each one inevitable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10"
        >
          <Link
            to="/collection"
            className="hairline group inline-flex items-center gap-3 border-b border-gold pb-2 text-gold transition-all hover:gap-5"
          >
            Explore the collection <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="hairline text-muted-foreground">scroll</div>
        <div className="mx-auto mt-2 h-10 w-px animate-pulse bg-gold/60" />
      </motion.div>
    </section>
  );
}