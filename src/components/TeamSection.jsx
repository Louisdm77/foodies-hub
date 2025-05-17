import { motion } from "framer-motion";
import { chefs } from "../data/mockData";

export default function TeamSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
          Our Talented Chefs
        </h2>
        <p className="text-blue-800 text-center max-w-2xl mx-auto mb-8">
          Meet the culinary masters behind Foodie Haven’s delicious creations. Their passion and expertise make every meal unforgettable.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {chefs.map((chef) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-600/95 backdrop-blur-md p-6 rounded-3xl text-center border border-amber-500/50"
            >
              <img
                src={chef.image}
                alt={chef.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-neutral-100">{chef.name}</h3>
              <p className="text-neutral-100">{chef.role}</p>
              <p className="text-neutral-100 mt-2">{chef.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}