import React from "react";
import burgerImg from "/images/ugi33vl6.png"; // Adjust the path as needed

export default function AboutPage() {
  return (
    <section className="bg-[#222831] text-white py-[15vh]">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-10xl mx-auto px-4 gap-14">
        {/* Image Box */}
        <div className="md:w-1/2 flex justify-end">
          <img
            src={burgerImg}
            alt="burger"
            className="h-[600px] object-contain"
          />
        </div>

        {/* Details Box */}
        <div className="md:w-1/2">
          <div className="w-full md:w-3/4">
            <div className="mb-4">
              <h3 className="text-[42px] dancing-script">We Are Feane</h3>
            </div>
            <p className="mb-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-full transition">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
