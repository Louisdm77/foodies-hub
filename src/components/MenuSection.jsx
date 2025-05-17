import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "../data/mockData";
import FoodCard from "./FoodCard";

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const displayedFoods = selectedCategory
    ? categories.find((cat) => cat.id === selectedCategory).foods
    : categories.flatMap((cat) => cat.foods);

  return (
    <section className="py-20 bg-[#0b1120] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-orange-400 text-center mb-6">
          Our Delicious Menu
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          From savory bites to sweet delights, our menu is crafted to satisfy every craving. Choose a category below or browse everything!
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          <button
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === null
                ? "bg-orange-400 text-white"
                : "bg-slate-800 text-orange-300 hover:bg-slate-700"
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === category.id
                  ? "bg-orange-400 text-white"
                  : "bg-slate-800 text-orange-300 hover:bg-slate-700"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Food Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory || "all"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayedFoods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
