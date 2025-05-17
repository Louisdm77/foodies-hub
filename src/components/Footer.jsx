import { motion } from "framer-motion";

export default function Footer() {
  // Animation variants for smooth reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <footer className="relative py-12 bg-gradient-to-b from-neutral-900 to-blue-900">
      {/* Subtle Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_100%)] z-0"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h3
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl font-serif font-bold text-neutral-100 mb-4"
        >
          Foodie Haven
        </motion.h3>

        <motion.p
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-neutral-200 font-sans text-lg mb-6"
        >
          123 Foodie Lane, Flavor Town | (123) 456-7890 | info@foodiehaven.com
        </motion.p>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="w-24 h-0.5 bg-amber-500 mx-auto mb-6"
        ></motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center space-x-6 mb-6"
        >
          <a
            href="https://facebook.com/foodiehaven"
            className="text-neutral-200 font-sans text-lg hover:text-amber-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com/foodiehaven"
            className="text-neutral-200 font-sans text-lg hover:text-amber-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/foodiehaven"
            className="text-neutral-200 font-sans text-lg hover:text-amber-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </motion.div>

        <motion.p
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-neutral-200 font-sans text-sm"
        >
          © 2025 Foodie Haven. All rights reserved. <br/>  Creator: Akwaji Dan
        </motion.p>
      </div>
    </footer>
  );
}