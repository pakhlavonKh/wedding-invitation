import { motion } from "framer-motion";
import { useState } from "react";
import GoldDivider from "@/components/GoldDivider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const RSVPSection = () => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxZyNJ5KZ1WqKYxSAYbosrecXeLkfllJQA1SwurhEItdYnLrWUD9QQ79-tw8mkTH5mL/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !attendance) return;

    try {
      setSubmitted(true);

      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          attendance,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setName("");
        setAttendance("");
        setTimeout(() => setSubmitted(false), 1500);
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      console.error("RSVP error:", err);
      setSubmitted(false);
      alert("Ошибка при отправке. Попробуйте позже.");
    }
  };

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

        <p className="text-body text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto mb-8">
          Тойға қатысуыңызды алдын ала растауыңызды сұраймыз
        </p>

        {/* RSVP Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 mb-10"
        >
          {/* Name Input */}
          <div>
            <Input
              type="text"
              placeholder="Есіміңіз"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-gold/30 focus:border-gold/60 bg-background/50"
              required
            />
          </div>

          {/* Attendance Radio Group */}
          <RadioGroup value={attendance} onValueChange={setAttendance}>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes" className="font-light cursor-pointer">
                Иә, келемін
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no" className="font-light cursor-pointer">
                Өкінішке орай, келе алмаймын
              </Label>
            </div>
          </RadioGroup>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!name || !attendance || submitted}
            className="w-full bg-gold/80 hover:bg-gold text-background font-semibold py-6 rounded-full transition-all duration-300"
          >
            {submitted ? "✓ Жауап болдырылды" : "Жауапты жіберу"}
          </Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
