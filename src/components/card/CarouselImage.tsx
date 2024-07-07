import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface CarouselProps {
  images: { id: number; image: string }[];
}

const CarouselImage: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (images.length === 0) return null; // Return null if there are no images

  return (
    <div className="relative w-full ">
      <div className="overflow-hidden relative h-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((data, index) => (
            <div className="w-full h-full flex-shrink-0" key={index}>
              <img
                src={data.image}
                alt={`Slide ${index}`}
                className="h-auto md:h-[500px] w-full rounded-md object-cover"
                height={1000}
                width={1000}
              />
            </div>
          ))}
        </div>
        {images.length > 1 && (
          <>
            <button
              className={`absolute top-1/2 left-4 transform -translate-y-1/2 ${
                currentIndex === 0
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              } rounded-full p-3 shadow-lg focus:outline-none`}
              onClick={handlePrevClick}
              disabled={currentIndex === 0}
            >
              <FaArrowLeft />
            </button>
            <button
              className={`absolute top-1/2 right-4 transform -translate-y-1/2 ${
                currentIndex === images.length - 1
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              } rounded-full p-3 shadow-lg focus:outline-none`}
              onClick={handleNextClick}
              disabled={currentIndex === images.length - 1}
            >
              <FaArrowRight />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CarouselImage;
