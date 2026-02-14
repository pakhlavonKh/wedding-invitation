import { motion } from "framer-motion";
import GoldDivider from "@/components/GoldDivider";

const HostsSection = () => {
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

        <h2 className="text-display text-3xl md:text-4xl font-light gold-text mb-8">
          Той иелері
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-2"
        >
          <p className="text-display text-2xl md:text-3xl font-light text-foreground">
            Бақытбек & Айша
          </p>
          <p className="text-body text-sm text-muted-foreground uppercase tracking-[0.2em]">
            Күйеу жігіттің ата-анасы
          </p>
        </motion.div>

        <GoldDivider />
      </motion.div>
    </section>
  );
};

export default HostsSection;
