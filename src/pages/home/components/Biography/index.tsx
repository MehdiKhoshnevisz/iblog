import Container from "@/components/Container";
import github from "@/assets/icons/github.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import { motion } from "motion/react";

const Biography = () => {
  const headingWords = [
    "Remote",
    "Front-End",
    "developer",
    "from",
    "IRAN,Tehran",
  ];

  const h1Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 20, opacity: 0, filter: "blur(4px)" },
    show: {
      y: 0,
      opacity: 1,
      filter: "blur(0)",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <Container className="mb-24 md:mb-40">
      <section>
        <motion.h1
          variants={h1Variants}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-6xl text-center font-black leading-snug md:leading-none"
        >
          {headingWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-4 whitespace-nowrap"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <p className="text-center mx-auto mt-8 md:text-xl text-slate-600 leading-loose md:leading-snug">
          Hey, I’m <span className="font-black">Mehdi</span>-a front-end
          developer who loves creating interactive, visually stunning web
          experiences. From smooth animations to clean, functional designs, I’m
          all about bringing ideas to life and making the web a more exciting
          place!
        </p>

        <div className="flex justify-center gap-3 mt-8">
          <a href="https://github.com/MehdiKhoshnevisz" target="_blank">
            <img src={github} height={24} width={24} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/mehdi-khoshnevisz/">
            <img
              src={linkedin}
              height={24}
              width={24}
              alt="linkedin"
              className="rounded"
            />
          </a>
        </div>
      </section>
    </Container>
  );
};

export default Biography;
