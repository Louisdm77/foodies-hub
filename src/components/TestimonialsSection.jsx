import { useState } from "react";
import { motion } from "framer-motion";
import { testimonials } from "../data/mockData";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const next = () => setCurrent((prev) => (prev + 1) % totalPages);
  const prev = () => setCurrent((prev) => (prev - 1 + totalPages) % totalPages);

  const displayedTestimonials = testimonials.slice(
    current * testimonialsPerPage,
    (current + 1) * testimonialsPerPage
  );

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
            Voices of Our Guests
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-32 h-0.5 bg-amber-500 mx-auto mt-4"
          ></motion.div>
          <p className="text-neutral-200 text-lg sm:text-xl font-sans tracking-wide max-w-2xl mx-auto mt-6">
            Discover why our guests rave about Foodie Haven’s flavors, ambiance,
            and exceptional service.
          </p>
        </motion.div>

        {testimonials.length === 0 ? (
          <p className="text-neutral-200 text-center text-lg">
            No testimonials available. Check back soon!
          </p>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {displayedTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(251, 191, 36, 0.3)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-neutral-50 backdrop-blur-md p-6 rounded-lg shadow-lg flex flex-col items-center border border-amber-500/50 min-h-[320px] z-10"
              >
                <div className="relative w-16 h-16 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover border-2 border-amber-500/50"
                    // loading="lazy"
                    onError={(e) => {
                      console.error(
                        `Failed to load image for ${testimonial.name}: ${testimonial.image}`
                      );
                      e.target.src =
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e";
                    }}
                  />
                </div>
                <p className="text-neutral-900 italic text-lg font-sans font-medium mb-4 text-center">
                  "{testimonial.quote}"
                </p>
                <h4 className="text-blue-500 font-bold font-sans text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-amber-400 text-sm mt-2">
                  {"★".repeat(testimonial.rating)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              whileHover={{ backgroundColor: "#d97706", color: "#fff" }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 flex items-center justify-center border border-amber-500 text-amber-500 font-sans font-medium rounded-full bg-amber-500/10 hover:shadow-lg"
            >
              ←
            </motion.button>
            <motion.button
              onClick={next}
              whileHover={{ backgroundColor: "#d97706", color: "#fff" }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 flex items-center justify-center border border-amber-500 text-amber-500 font-sans font-medium rounded-full bg-amber-500/10 hover:shadow-lg"
            >
              →
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
