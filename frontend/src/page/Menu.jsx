import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const menuItems = [
  {
    id: 1,
    category: "pizza",
    name: "Delicious Pizza",
    price: "$20",
    image: "/images/pizza/pizza1.png",
  },
  {
    id: 2,
    category: "burger",
    name: "Delicious Burger",
    price: "$15",
    image: "/images/burger/burger1.png",
  },
  {
    id: 3,
    category: "pizza",
    name: "Delicious Pizza",
    price: "$17",
    image: "/images/pizza/pizza2.png",
  },
  {
    id: 4,
    category: "pasta",
    name: "Delicious Pasta",
    price: "$18",
    image: "/images/pasta/pasta1.png",
  },
  {
    id: 5,
    category: "fries",
    name: "French Fries",
    price: "$10",
    image: "/images/fries/fries1.png",
  },
  {
    id: 6,
    category: "pizza",
    name: "Delicious Pizza",
    price: "$15",
    image: "/images/pizza/pizza3.png",
  },
  {
    id: 7,
    category: "burger",
    name: "Tasty Burger",
    price: "$12",
    image: "/images/burger/burger2.png",
  },
  {
    id: 8,
    category: "burger",
    name: "Tasty Burger",
    price: "$14",
    image: "/images/burger/burger3.png",
  },
  {
    id: 9,
    category: "pasta",
    name: "Delicious Pasta",
    price: "$10",
    image: "/images/pasta/pasta2.png",
  },
];

const categories = ["all", "burger", "pizza", "pasta", "fries"];

export default function Menu() {
  const [active, setActive] = useState("all");

  const filteredItems =
    active === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  return (
    <section className="py-16 px-4 md:px-24 bg-white">
      <div className="text-center pb-6">
        <h2 className="text-[42px] font-extrabold text-black dancing-script">
          Our Menu
        </h2>
      </div>

      <ul className="flex justify-center gap-6 mb-10 flex-wrap">
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => setActive(cat)}
            className={`cursor-pointer capitalize px-6 py-2 rounded-full transition font-medium ${
              active === cat ? "bg-[#222831] text-white" : ""
            }`}
          >
            {cat}
          </li>
        ))}
      </ul>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-6xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
              className=" text-white rounded-xl overflow-hidden group"
              style={{
                background:
                  "linear-gradient(to bottom, #f1f2f3 25px,#222831 25px)",
              }}
            >
              <div className="overflow-hidden bg-[#f1f2f3] p-7 rounded-bl-[45px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-contain transition-transform duration-200 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h5 className="text-lg font-semibold mb-2">{item.name}</h5>
                <p className="text-md mb-4">
                  Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                  velit, magnam voluptatem repellendus sed eaque
                </p>
                <div className="flex justify-between items-center">
                  <h6 className="text-white font-bold">{item.price}</h6>
                  <button className="bg-yellow-400 p-2 rounded-full text-white hover:bg-yellow-500">
                    <FaShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="text-center mt-10">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-14 rounded-full">
          View More
        </button>
      </div>
    </section>
  );
}
