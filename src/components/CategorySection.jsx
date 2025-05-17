import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "../data/mockData";
import FoodCard from "./FoodCard";

export default function CategorySection() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section id="categories" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-300 text-center mb-12">
          Our Menu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.05 }}
              className="bg-orange-800/50 p-6 rounded-3xl cursor-pointer"
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category.id ? null : category.id
                )
              }
            >
              <h3 className="text-2xl font-semibold text-orange-300">
                {category.name}
              </h3>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories
                  .find((cat) => cat.id === selectedCategory)
                  .foods.map((food) => (
                    <FoodCard key={food.id} food={food} />
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}