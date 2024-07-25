import React from "react";
import Slider from "react-slick";
import image2 from "./../../assets/images/banner5.jpg";
import image3 from "./../../assets/images/Handicraftbag.jpg";
import image4 from "./../../assets/images/banner5.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Image {
  url: string;
  alt: string;
}

const dummyData: Image[] = [
  {
    url: image2,
    alt: "Image 2 description",
  },
  {
    url: image3,
    alt: "Image 3 description",
  },
  {
    url: image4,
    alt: "Image 4 description",
  },
];

const Carosule: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Adjusted for responsive settings
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
    draggable: true,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" z-10 ">
      <Slider {...settings}>
        {dummyData.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center"
            style={{ padding: "0px" }}
          >
            <div className="w-full h-52 md:h-96  ">
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carosule;
