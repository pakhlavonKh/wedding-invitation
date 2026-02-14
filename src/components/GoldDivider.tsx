import { motion } from "framer-motion";

const GoldDivider = () => (
  <div className="flex items-center justify-center gap-3 my-8">
    <motion.div className="h-px w-16 bg-primary/30" />
    <motion.div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
    <motion.div className="h-px w-16 bg-primary/30" />
  </div>
);

export default GoldDivider;
