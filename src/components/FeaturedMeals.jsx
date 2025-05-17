import { motion } from "framer-motion";
import { categories } from "../data/mockData";
import { useCart } from "../context/CartContext";
import { useEffect } from "react";

export default function FeaturedMeals() {
  const { addToCart } = useCart();
  const featured = categories.flatMap((cat) => cat.foods).slice(0, 3);

 
  useEffect(() => {
    console.log("Featured items:", featured);
  }, []);

 
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
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-neutral-100 tracking-tight">
            Signature Culinary Creations
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            className="w-32 h-0.5 bg-amber-600 mx-auto mt-4"
          ></motion.div>
          <p className="text-neutral-300 text-xl sm:text-2xl font-sans tracking-wide max-w-3xl mx-auto mt-6">
            Indulge in our chefs’ masterpieces, crafted with passion and precision to elevate your dining experience.
          </p>
        </motion.div>

        {featured.length === 0 ? (
          <p className="text-neutral-300 text-center text-lg">
            No featured dishes available. Please check back soon!
          </p>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featured.map((food) => (
              <motion.div
                key={food.id}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 15px 30px rgba(251, 191, 36, 0.3)",
                  transition: { duration: 0.3 },
                }}
                className="bg-neutral-100/90 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all flex flex-col items-center min-h-[400px]"
              >
                <div className="relative w-full h-56 mb-4 overflow-hidden rounded-md">
                  <motion.img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-full object-cover"
                    onError={() => console.error(`Failed to load image for ${food.name}: ${food.image}`)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent"></div>
                </div>
                <h4 className="text-2xl font-serif font-semibold text-neutral-900 tracking-tight mb-2">
                  {food.name}
                </h4>
                <p className="text-neutral-600 text-base font-sans text-center mb-4">{food.description}</p>
                <p className="text-amber-600 font-bold text-lg mb-4">${food.price.toFixed(2)}</p>
                <motion.button
                  onClick={() => addToCart(food)}
                  whileHover={{
                    backgroundColor: "#d97706",
                    color: "#fff",
                    borderColor: "#d97706",
                  }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-2 border border-amber-600 text-amber-600 font-sans font-medium rounded-md bg-transparent hover:shadow-lg"
                >
                  Add to Cart
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}