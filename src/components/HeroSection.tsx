import { motion } from "framer-motion";
import heroImage from "@/assets/wedding-hero.jpg";
import handsImage from "@/assets/hands.png";
import GoldDivider from "@/components/GoldDivider";

const letterVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 1.2 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const AnimatedText = ({ text, startIndex = 0 }: { text: string; startIndex?: number }) => (
  <span className="inline-flex flex-wrap justify-center">
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={startIndex + i}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        className="inline-block"
        style={{ whiteSpace: char === " " ? "pre" : undefined }}
      >
        {char}
      </motion.span>
    ))}
  </span>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="w-full h-full object-cover opacity-60" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <GoldDivider />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-body text-xs uppercase tracking-[0.5em] text-muted-foreground mb-10"
        >
          Құрметті қонақтар!
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-body text-xs md:text-sm text-muted-foreground mb-10 max-w-sm mx-auto leading-relaxed tracking-wide"
        >
          Балаларымыздың үйлену тойына арналған салтанатты ақ дастарханымыздың қадірлі қонағы болуға шақырамыз!
        </motion.p>

        <div className="my-6">
          <h1 className="text-display text-5xl md:text-7xl lg:text-8xl font-light gold-gradient-text leading-none text-left md:text-center pl-6 md:pl-0">
            <AnimatedText text="Бердібек" />
          </h1>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="text-display text-lg md:text-3xl italic gold-text block my-0 md:my-4"
          >
            &
          </motion.span>
          <h1 className="text-display text-5xl md:text-7xl lg:text-8xl font-light gold-gradient-text leading-none text-right md:text-center pr-6 md:pr-0">
            <AnimatedText text="Сабина" startIndex={10} />
          </h1>
        </div>

        {/* Animated hands with rings - raising from below - Mobile only */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 3.2, ease: "easeOut" }}
          className="flex justify-center md:hidden w-screen -mx-6"
        >
          <div className="relative w-full">
            <img src={handsImage} alt="Couple hands with rings" className="w-full h-auto" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.2 }}
          className="text-body text-xs uppercase tracking-[0.4em] text-muted-foreground mt-10"
        >
          Үйлену тойы
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
