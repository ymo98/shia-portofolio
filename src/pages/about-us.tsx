import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";

export default function AboutUs() {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800"
    >
      <Navbar />

      <div className="flex flex-col justify-center items-center px-6 py-16 max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
        >
          About Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="leading-relaxed text-lg text-gray-700 space-y-4"
        >
          <span className="block mb-4">
            Hi, I’m <strong>Yocia</strong> a tech recruiter, AI & data
            enthusiast, and aspiring to be creative builder myself.
          </span>

          <span className="block mb-4">
            In my day job, I connect people and ideas, helping bring innovation
            to life.Through my work, I’ve built connections with AI, Machine
            Learning, and Data engineers, which inspired me to explore the field
            myself. I love discovering how data can drive smarter, more meaningful
            decisions.
          </span>

          <span className="block">
            Outside of work, I’m a music lover, daydreamer, and life explorer
            (in ways that still feel somewhat stable, def not a gambler.. haha), 
            just taking life one small adventure at a time. My goal is to make 
            the most of every experience, no matter how big or small.
          </span>
        </motion.p>
      </div>
    </motion.article>
  );
}
