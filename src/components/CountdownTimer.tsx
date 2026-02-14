import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GoldDivider from "@/components/GoldDivider";

const WEDDING_DATE = new Date("2026-06-12T18:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const diff = WEDDING_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const items = [
    { value: timeLeft.days, label: "Күн" },
    { value: timeLeft.hours, label: "Сағат" },
    { value: timeLeft.minutes, label: "Минут" },
    { value: timeLeft.seconds, label: "Секунд" },
  ];

  return (
    <section className="wedding-section bg-card">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <GoldDivider />
        
        <h2 className="text-display text-3xl md:text-4xl font-light gold-text mb-4">
          Тойға дейін
        </h2>
        
        <div className="flex justify-center gap-6 md:gap-10 mt-10">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="countdown-item"
            >
              <span className="countdown-number">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="countdown-label">{item.label}</span>
            </motion.div>
          ))}
        </div>
        
        <GoldDivider />
      </motion.div>
    </section>
  );
};

export default CountdownTimer;
