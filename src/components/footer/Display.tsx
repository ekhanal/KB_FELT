import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/handmade.jpg";
import { useState } from "react";
import { PiInstagramLogoLight } from "react-icons/pi";

const images = [image1, image2, image3, image5, image6];

const Display = () => {
  const [hoveredIndex, setHoveredIndex] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 border my-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={image}
              alt="image"
              className="w-full md:h-[250px] object-cover"
            />
            {hoveredIndex === index && (
              <>
                <div
                  className="absolute h-full w-full bottom-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 3%, #000 106.88%)",
                    opacity: 0.7,
                  }}
                ></div>
                <div className="flex justify-center items-center">
                  <PiInstagramLogoLight className="text-white absolute top-24 text-2xl font-semibold" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Display;
