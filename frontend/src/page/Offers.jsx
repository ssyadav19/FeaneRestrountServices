import React from "react";
import burgerImg from "/images/burger.jpg";
import pizzaImg from "/images/pizza.jpg";
import { FaShoppingCart } from "react-icons/fa";

export default function Offers() {
  const offers = [
    {
      title: "Tasty Thursdays",
      discount: "20% Off",
      image: burgerImg,
    },
    {
      title: "Pizza Days",
      discount: "15% Off",
      image: pizzaImg,
    },
  ];

  return (
    <section className="bg-white py-[85px]">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 flex-wrap">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="flex items-center bg-[#222831] text-white rounded-lg border border-black w-[550px] h-[230px] gap-6 pl-5 group transition-transform"
          >
            {/* Image */}
            <div className="border-[5px] border-yellow-400 rounded-full overflow-hidden">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-[180px] transform transition-transform duration-200 group-hover:scale-110"
              />
            </div>

            {/* Details */}
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold dancing-script">
                {offer.title}
              </h3>
              <h2 className="text-3xl font-bold dancing-script">
                {offer.discount}
              </h2>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-full flex items-center gap-2 w-[160px] h-[45px]">
                Order Now <FaShoppingCart size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
