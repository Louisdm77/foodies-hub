import { motion } from "framer-motion";
import burger from "../assets/images/burger.png";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative py-10 md:py-16 bg-gradient-to-b from-neutral-900 to-blue-900 overflow-hidden">
      {/* Subtle Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_100%)] z-0"></div>

      {/* Decorative Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10px_10px,#f59e0b_2px,transparent_2px)] bg-[length:20px_20px] opacity-10 z-0"></div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-serif font-bold text-neutral-100 mb-3 tracking-tight"
          >
            Foodie Haven
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl font-sans font-medium text-neutral-200 mb-3"
          >
            Savor the Extraordinary
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg font-sans text-neutral-200 mb-5 max-w-md mx-auto md:mx-0"
          >
            Indulge in gourmet burgers, artisanal pizzas, and decadent desserts. Your culinary journey begins here.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
          >
            <motion.a
              href="/menu"
              variants={itemVariants}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 12px rgba(251, 191, 36, 0.3)",
              }}
              transition={{ duration: 0.3 }}
              className="px-8 py-3 bg-amber-500 text-neutral-900 font-sans font-medium text-base rounded-lg hover:bg-amber-600 transition shadow-md"
            >
              Explore Our Menu
            </motion.a>
            <motion.a
              href="/contact"
              variants={itemVariants}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 12px rgba(251, 191, 36, 0.3)",
              }}
              transition={{ duration: 0.3 }}
              className="px-8 py-3 bg-neutral-100/95 text-neutral-900 font-sans font-medium text-base rounded-lg hover:bg-neutral-200 transition shadow-md"
            >
              Reserve Now
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Burger Image with Polaroid Frame */}
        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, rotate: -8 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="bg-neutral-50/90 backdrop-blur-md p-3 rounded-lg shadow-xl transform rotate-2 border border-amber-500/40 max-w-[20rem] sm:max-w-[22rem] md:max-w-[24rem]">
            <img
              src={burger}
              alt="Signature Burger"
              className="w-full h-auto object-cover rounded border-2 border-amber-500/40"
              onError={(e) => {
                console.error("Failed to load burger image");
                e.target.src =
                  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd";
              }}
            />
            <p className="text-center text-sm font-sans font-medium text-neutral-900 mt-2">
              Crafted with Passion
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
