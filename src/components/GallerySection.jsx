import { motion } from "framer-motion";
import { gallery } from "../data/mockData";

export default function GallerySection() {
  // Animation variants for smooth reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-neutral-900 to-blue-900 overflow-hidden">
      {/* Subtle Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_100%)] z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-neutral-100 tracking-tight">
            A Taste of Foodie Haven
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-32 h-0.5 bg-amber-500 mx-auto mt-4"
          ></motion.div>
          <p className="text-neutral-200 text-lg sm:text-xl font-sans tracking-wide max-w-2xl mx-auto mt-6">
            Explore the ambiance, flavors, and warmth that make Foodie Haven
            unforgettable.
          </p>
        </motion.div>

        {gallery.length === 0 ? (
          <p className="text-neutral-200 text-center text-lg">
            No gallery items available. Check back soon!
          </p>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {gallery.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(251, 191, 36, 0.3)",
                }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-64 object-cover rounded-lg border-2 border-amber-500/50"
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load image: ${item.image}`);
                    e.target.src =
                      "https://images.unsplash.com/photo-1550547660-d9450f859349";
                  }}
                />
                <p className="absolute bottom-4 left-4 text-neutral-100 font-sans font-medium bg-neutral-900/80 px-3 py-1 rounded z-20">
                  {item.caption}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
