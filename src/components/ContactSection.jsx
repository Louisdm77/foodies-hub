import { motion } from "framer-motion";

export default function ContactSection() {
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
            Connect with Foodie Haven
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-32 h-0.5 bg-amber-500 mx-auto mt-4"
          ></motion.div>
          <p className="text-neutral-200 text-lg sm:text-xl font-sans tracking-wide max-w-2xl mx-auto mt-6">
            Have a question or ready to reserve a table? Reach out, and we’ll respond promptly.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 15px rgba(251, 191, 36, 0.3)",
            }}
            transition={{ duration: 0.3 }}
            className="bg-neutral-50/95 backdrop-blur-md p-6 rounded-lg border border-amber-500/50"
          >
            <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
              Contact Information
            </h3>
            <p className="text-neutral-900 font-sans">
              123 Foodie Lane, Flavor Town
            </p>
            <p className="text-neutral-900 font-sans">
              Phone: (123) 456-7890
            </p>
            <p className="text-neutral-900 font-sans">
              Email: info@foodiehaven.com
            </p>
            <p className="text-neutral-900 font-sans mt-4">
              Open: Mon-Sun, 11 AM - 10 PM
            </p>
            <img
              src="https://images.unsplash.com/photo-1516685018648-6ce0b262b668"
              alt="Foodie Haven Storefront"
              className="mt-4 w-full h-48 object-cover rounded-lg border-2 border-amber-500/50"
              loading="lazy"
              onError={(e) => {
                console.error("Failed to load storefront image");
                e.target.src = "https://images.unsplash.com/photo-1550547660-d9450f859349";
              }}
            />
          </motion.div>

          <motion.form
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 15px rgba(251, 191, 36, 0.3)",
            }}
            transition={{ duration: 0.3 }}
            className="bg-neutral-50/95 backdrop-blur-md p-6 rounded-lg border border-amber-500/50"
          >
            <div className="mb-4">
              <label
                className="block text-neutral-900 font-sans font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 rounded-lg bg-neutral-100/80 text-neutral-900 border border-neutral-200 focus:ring-2 focus:ring-amber-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-neutral-900 font-sans font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded-lg bg-neutral-100/80 text-neutral-900 border border-neutral-200 focus:ring-2 focus:ring-amber-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-neutral-900 font-sans font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 rounded-lg bg-neutral-100/80 text-neutral-900 border border-neutral-200 focus:ring-2 focus:ring-amber-500"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-amber-500 text-neutral-900 font-sans font-medium rounded-lg hover:bg-amber-600 hover:shadow-lg transition"
            >
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}