import { useEffect, useRef, useState } from "react";

const slides = [
  {
    title: "Fast Food Restaurant",
    description:
      "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.",
  },
  {
    title: "Fast Food Restaurant",
    description:
      "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.",
  },
  {
    title: "Fast Food Restaurant",
    description:
      "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(1); // Start from 1 (real first slide)
  const [isAnimating, setIsAnimating] = useState(true);
  const slideRef = useRef(null);

  const slideCount = slides.length;
  const extendedSlides = [slides[slideCount - 1], ...slides, slides[0]]; // [last, ...slides, first]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
      setIsAnimating(true);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === slideCount + 1) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
        setIndex(1); // Reset to real first slide
      }, 700); // match duration-700
      return () => clearTimeout(timeout);
    } else if (index === 0) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
        setIndex(slideCount); // Reset to real last slide
      }, 700);
      return () => clearTimeout(timeout);
    } else {
      setIsAnimating(true);
    }
  }, [index, slideCount]);

  const handleDotClick = (i) => {
    setIsAnimating(true);
    setIndex(i + 1); // Offset by 1 due to clone
  };

  return (
    <section className="bg-orange-100 py-10">
      <div className="w-[750px] pl-[200px] pt-[80px] mx-auto">
        <div className="relative overflow-hidden h-[300px]">
          <div
            ref={slideRef}
            className={`flex ${isAnimating ? "transition-transform duration-700" : ""}`}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {extendedSlides.map((slide, idx) => (
              <div key={idx} className="w-full flex-shrink-0 px-4">
                <div className="flex flex-col gap-2">
                  <h1 className="text-[56px] font-bold dancing-script">
                    {slide.title}
                  </h1>
                  <p className="text-gray-700">{slide.description}</p>
                  <button className="rounded-full bg-yellow-400 px-6 py-2 font-semibold text-white hover:bg-yellow-500 transition">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 justify-center mt-8">
          {slides.map((_, dotIdx) => (
            <div
              key={dotIdx}
              onClick={() => handleDotClick(dotIdx)}
              className={`cursor-pointer w-5 h-5 rounded-full ${
                index === dotIdx + 1 ? "bg-[#ffbe33]" : "bg-gray-300 hover:bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
