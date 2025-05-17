import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, updateQuantity, removeFromCart } = useCart();

  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/menu", label: "Menu" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-800 to-yellow-600 py-4 shadow-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 -mb-1">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            >
              <NavLink
                to="/"
                className="text-3xl font-display font-extrabold text-amber-200"
              >
                Foodie Haven
              </NavLink>
            </motion.div>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `text-lg font-bold text-amber-100 hover:text-amber-300 transition ${
                        isActive
                          ? "underline underline-offset-4 decoration-amber-300"
                          : ""
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="relative"
              >
                <button onClick={() => setIsCartOpen(true)}>
                  <svg
                    className="w-6 h-6 text-amber-100 hover:text-amber-300 transition"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-amber-300 text-rose-800 text-xs font-bold rounded-full px-1.5 py-0.5">
                      {cart.length}
                    </span>
                  )}
                </button>
              </motion.div>
            </div>

            <button
              className="md:hidden text-amber-100 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 py-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block text-lg font-bold text-amber-100 hover:text-amber-300 transition ${
                        isActive
                          ? "underline underline-offset-4 decoration-amber-300"
                          : ""
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <button
                  onClick={() => {
                    setIsCartOpen(true);
                    setIsOpen(false);
                  }}
                  className="block text-lg font-bold text-amber-100 hover:text-amber-300 transition flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Cart {cart.length > 0 && `(${cart.length})`}
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Cart Modal */}
      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-60 z-40"
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed z-50 top-1/2 left-1/2 w-full max-w-xl transform -translate-x-1/2 -translate-y-1/2 bg-[#0b1120] text-white rounded-xl shadow-2xl p-6 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-orange-400">Your Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-center text-gray-400 text-lg">
                Your cart is empty. Browse the menu and add some delicious
                items!
              </p>
            ) : (
              <>
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <motion.div
                      key={`${item.id}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-4 bg-slate-800 rounded-lg p-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-orange-300">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-2 py-1 bg-slate-700 rounded hover:bg-slate-600"
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-2 py-1 bg-slate-700 rounded hover:bg-slate-600"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-3 text-sm text-red-400 hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <p className="text-orange-300 font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-6 border-t border-slate-700 pt-4">
                  <span className="text-lg font-semibold text-gray-300">
                    Total:
                  </span>
                  <span className="text-xl font-bold text-orange-400">
                    ${total}
                  </span>
                </div>

                <div className="text-right mt-4">
                  <button
                    onClick={() =>
                      alert("Checkout functionality not implemented.")
                    }
                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg"
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </>
  );
}
