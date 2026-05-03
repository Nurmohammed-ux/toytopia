import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import ToyCard from "../components/ToyCard/ToyCard";

const Home = () => {
  const data = useLoaderData();
  const [current, setCurrent] = useState(0);

  const slides = data.slice(0, 3);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div>
      {/* 🔥 HERO SLIDER */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden">
        {slides.map((slide, index) => (
          <img
            key={slide.toyId}
            src={slide.picture}
            alt={slide.toyName}
            className={`absolute inset-0 w-full h-full object-fit transition-all duration-700 rounded-b-xl ease-in-out ${
              index === current
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          />
        ))}
        {/* Overlay Text */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Best Toys For Kids
          </h1>
        </div>

        {/* Buttons */}
        <button
          onClick={() =>
            setCurrent(current === 0 ? slides.length - 1 : current - 1)
          }
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded"
        >
          ❮
        </button>

        <button
          onClick={() =>
            setCurrent(current === slides.length - 1 ? 0 : current + 1)
          }
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded"
        >
          ❯
        </button>
      </div>

      {/* 🔥 POPULAR TOYS */}
      <div className="mt-10 px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Popular Toys</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {data.slice(0, 6).map((toy) => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
