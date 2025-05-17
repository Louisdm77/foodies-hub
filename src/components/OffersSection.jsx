import { motion } from "framer-motion";
import { offers } from "../data/mockData";

export default function OffersSection() {
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
            Exclusive Offers
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-32 h-0.5 bg-amber-500 mx-auto mt-4"
          ></motion.div>
          <p className="text-neutral-200 text-lg sm:text-xl font-sans tracking-wide max-w-2xl mx-auto mt-6">
            Savor the moment with our limited-time deals at Foodie Haven. Don’t miss out!
          </p>
        </motion.div>

        {offers.length === 0 ? (
          <p className="text-neutral-200 text-center text-lg">
            No offers available. Check back soon!
          </p>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
          >
            {offers.map((offer) => (
              <motion.div
                key={offer.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(251, 191, 36, 0.3)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-neutral-50 backdrop-blur-md p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center border border-amber-500/50 min-h-[260px] z-10"
              >
                <div className="w-full sm:w-1/3 mb-4 sm:mb-0 sm:mr-4">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-48 object-cover rounded-lg border-2 border-amber-500/50"
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Failed to load image for ${offer.title}: ${offer.image}`);
                      e.target.src = "https://images.unsplash.com/photo-1550547660-d9450f859349";
                    }}
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-neutral-900 font-sans mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-neutral-900 text-base font-sans font-medium mb-4">
                    {offer.description}
                  </p>
                  <motion.a
                    href="/menu"
                    whileHover={{ backgroundColor: "#d97706", color: "#fff" }}
                    transition={{ duration: 0.3 }}
                    className="inline-block px-6 py-2 border border-amber-500 text-amber-400 font-sans font-medium rounded-full bg-amber-500/10 hover:shadow-lg"
                  >
                    Order Now
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}