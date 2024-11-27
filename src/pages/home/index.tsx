import { motion } from "motion/react";

import Biography from "./components/Biography";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pt-12 md:pt-60 min-h-full"
    >
      <Biography />
      <Posts />
    </motion.main>
  );
}
