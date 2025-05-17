import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-black"
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
        <p className="text-xl text-white mb-8">Oops! Page not found.</p>
        <Link
          to="/"
          className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </motion.section>
  );
}
