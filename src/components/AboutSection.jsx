import { motion } from "framer-motion";
import cozydining from "../assets/images/cozydining.jpeg";

export default function AboutSection() {
  // Animation variants for smooth reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-neutral-900 to-blue-900 overflow-hidden">
      {/* Subtle Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_100%)] z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto bg-neutral-50/95 backdrop-blur-md p-8 rounded-lg shadow-lg"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl  sm:text-6xl font-serif font-bold  tracking-tight mb-6 text-black"
          >
            Our Story
          </motion.h2>
          <motion.div
            variants={itemVariants}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-32 h-0.5 bg-amber-500 mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-lg sm:text-xl font-sans font-bold tracking-wide mb-6"
          >
            Foodie Haven was born from a vision to unite communities through exquisite cuisine. Founded in 2015 in the vibrant heart of Flavor Town, we’ve grown from a modest eatery into a beloved culinary landmark, fueled by our dedication to quality, creativity, and memorable experiences.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-lg sm:text-xl font-sans font-bold tracking-wide mb-8"
          >
            Every dish tells a story—handcrafted burgers, wood-fired pizzas, and indulgent desserts, each crafted with the finest local ingredients. Step into Foodie Haven and savor the artistry of flavor that defines our legacy.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="relative w-full h-80 mb-8 overflow-hidden rounded-lg border-2 border-amber-500/50"
            whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(251, 191, 36, 0.3)" }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={cozydining}
              alt="Foodie Haven Restaurant"
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error("Failed to load image: https://images.unsplash.com/photo-1517248135467-4c7edcad34c4");
                e.target.src = "https://cdn.pixabay.com/photo/2016/11/18/14/05/restaurant-1837150_1280.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 via-amber-900/20 to-transparent"></div>
          </motion.div>
          <motion.a
            variants={itemVariants}
            href="/about"
            whileHover={{
              backgroundColor: "#d97706",
              color: "#fff",
              borderColor: "#d97706",
            }}
            transition={{ duration: 0.3 }}
            className="inline-block px-8 py-3 border border-amber-500 text-amber-500 font-sans font-medium rounded-md bg-amber-500/10 hover:shadow-lg"
          >
            Discover More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}