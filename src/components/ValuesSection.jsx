import { motion } from "framer-motion";
import { values } from "../data/mockData";

export default function ValuesSection() {
  return (
    <section className="py-16 bg-slate-100"> {/* Light neutral to contrast navy */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
          Our Core Values
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
          At Foodie Haven, we believe in more than just great food. Our values guide us in creating a memorable dining experience for everyone.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-3xl shadow-lg text-center border border-blue-100"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
