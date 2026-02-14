import { motion } from "framer-motion";
import GoldDivider from "@/components/GoldDivider";

const WeddingDateSection = () => {
  const weddingDate = new Date("2026-06-12");
  const day = weddingDate.getDate();
  const monthName = new Intl.DateTimeFormat("kk", { month: "long" }).format(weddingDate);
  const year = weddingDate.getFullYear();

  return (
    <section className="wedding-section bg-background">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-lg mx-auto"
      >
        <GoldDivider />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-display text-3xl md:text-4xl font-light gold-text mb-10 text-center"
        >
          Құанышқымызға ортақ болыңыздар!
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <svg
            className="w-12 h-12 text-gold"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-7h-4v4h4v-4z" />
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-display text-2xl md:text-3xl font-light text-foreground text-center"
        >
          {day} {monthName}, {year} жыл
        </motion.p>

        <GoldDivider />
      </motion.div>
    </section>
  );
};

export default WeddingDateSection;
