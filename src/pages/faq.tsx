import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";

export default function FAQ() {
  return (
    <motion.article
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <Navbar />
      <div className="flex justify-center items-center h-[55vh]">
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
          className="header-title"
        >
          FAQ
        </motion.h1>
      </div>
    </motion.article>
  );
}
