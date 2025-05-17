import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function FoodCard({ food }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#111827] border border-slate-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow flex flex-col"
    >
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-orange-300 mb-1">
          {food.name}
        </h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-3 flex-grow">
          {food.description}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-orange-400 font-bold">
            ${food.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(food)}
            className="text-sm bg-orange-400 text-white px-3 py-1 rounded-md hover:bg-orange-500 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
