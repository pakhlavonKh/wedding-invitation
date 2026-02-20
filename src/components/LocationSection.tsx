import { motion } from "framer-motion";
import { MapPin, Clock, CalendarDays } from "lucide-react";
import GoldDivider from "@/components/GoldDivider";
import WeddingCalendar from "./WeddingCalendar";


const LocationSection = () => {
  return (
    <section className="wedding-section bg-card">
      <WeddingCalendar />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-lg mx-auto"
      >
        <GoldDivider />

        <h2 className="text-display text-3xl md:text-4xl font-light gold-text mb-10">
          Қуанышымызға ортақ болыңыздар!
        </h2>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-3"
          >
            <CalendarDays className="w-6 h-6 gold-text" />
            <p className="text-display text-xl font-light text-foreground">
              12 маусым, 2026 жыл
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center gap-3"
          >
            <Clock className="w-6 h-6 gold-text" />
            <p className="text-xl font-light text-foreground !inline">
              15:00 <span className="text-sm text-muted-foreground uppercase tracking-[0.2em] !inline">Беташар</span>
            </p>
            <p className="text-display text-xl font-light text-foreground !inline">
              17:00 <span className="text-sm text-muted-foreground uppercase tracking-[0.2em] !inline">Той</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center gap-3"
          >
            <MapPin className="w-6 h-6 gold-text" />
            <p className="text-display text-xl font-light text-foreground">
              Grand Hall мейрамханасы
            </p>
            <p className="text-body text-sm text-muted-foreground">
              Теміртау қаласы
            </p>
            <p className="text-body text-sm text-muted-foreground">
              Проспект Металлургов, 65/1
            </p>
          </motion.div>

          <motion.a
            href="https://2gis.kz/karaganda/search/%D0%9F%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%20%D0%9C%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%83%D1%80%D0%B3%D0%BE%D0%B2%2065%2F1/firm/70000001093071350/72.964107%2C50.038101?m=72.964122%2C50.038853%2F17.39"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-block mt-4 px-8 py-3 border border-primary/40 text-primary text-body text-sm uppercase tracking-[0.2em] rounded-full hover:bg-primary/10 transition-colors duration-300"
          >
            Картаға өту
          </motion.a>
        </div>

        <GoldDivider />
      </motion.div>
    </section>
  );
};

export default LocationSection;
