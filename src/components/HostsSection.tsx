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

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-body text-l uppercase tracking-[0.5em] text-muted-foreground mb-10"
        >
          Құрметті қонақтар!
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-body text-m md:text-sm text-muted-foreground mb-10 max-w-sm mx-auto leading-relaxed tracking-wide"
        >
          Балаларымыздың үйлену тойына арналған салтанатты ақ дастарханымыздың
          қадірлі қонағы болуға шақырамыз!
        </motion.p>

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
        </motion.div>

        <GoldDivider />
      </motion.div>
    </section>
  );
};

export default HostsSection;
