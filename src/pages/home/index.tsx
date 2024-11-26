import { motion } from "motion/react";

import Biography from "./components/Biography";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Biography />
      <Posts />
    </motion.main>
  );
}
