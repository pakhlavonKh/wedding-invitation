import { motion } from "framer-motion";
import GoldDivider from "@/components/GoldDivider";

const RSVPSection = () => {
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

        <h2 className="text-display text-3xl md:text-4xl font-light gold-text mb-6">
          Сіздерді күтеміз!
        </h2>

        <p className="text-body text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto mb-10">
          Тойға қатысуыңызды алдын ала растауыңызды сұраймыз
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-display text-5xl md:text-7xl font-light gold-gradient-text py-10"
        >
          Бердібек & Сабина
        </motion.div>

        <GoldDivider />

        <p className="text-body text-xs text-muted-foreground/50 mt-8 uppercase tracking-[0.3em]">
          Махаббатпен ♥
        </p>
      </motion.div>
    </section>
  );
};

export default RSVPSection;
