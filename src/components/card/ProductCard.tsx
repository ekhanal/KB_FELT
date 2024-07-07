import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { getValue } from "../../utils/object";
import { Link } from "react-router-dom";
import ButtonLogin from "../common/Button/ButtonLogin";

interface Product {
  image: string;
  price: number;
  description: string;
  rating: number;
  offer: number;
  disPrice: number;
}

interface ProductCardProps {
  data: Product[];
  heading: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ data, heading }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const settings = {
    infinite: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
    loop: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-5 lg:mx-20 p-2 md:p-5 my-5 rounded-3xl font-sans bg-white">
      <div className="flex justify-between">
        <span className="text-base md:text-xl font-bold ">{heading}</span>
        <a href={"/CategoryCardPage"}>
          <ButtonLogin
            title="View All"
            styles="text-xs md:text-sm py-2 px-2  md:py-2 md:px-3"
          />
        </a>
      </div>
      <Slider className="" {...settings}>
        {data.map((item, index) => (
          <Link
            key={index}
            to="/productdetailspage"
            onClick={handleClick}
            className="w-full  "
          >
            <div className="main-bg p-0 md:p-2 rounded-lg flex flex-col cursor-pointer mt-2 ">
              <div className="relative ">
                {/* <CarouselImage images={getValue(item, "image")} /> */}
                <img
                  src={getValue(item, "image")}
                  alt="product"
                  className={`rounded-lg h-32 md:h-56 `}
                />

                <span className="absolute top-0 right-2 p-1 bg-rose-500 text-white text-xs rounded-lg h-5 flex md:hidden text-nowrap items-center">
                  24% off
                </span>
              </div>
              <span className="block md:hidden text-gray-400 text-xs">
                heading
              </span>
              <p className="line-clamp-2 md:line-clamp-3 font-semibold    text-sm mt-2   ">
                {getValue(item, "description")}
              </p>
              <div className="flex gap-2 items-center  mt-2  ">
                {" "}
                <span className="font-semibold text-blue-500  text-sm md:text-base text-nowrap ">
                  ${getValue(item, "price")}
                </span>
                <span className="line-through text-gray-400 text-xs">
                  ${getValue(item, "disPrice")}
                </span>
                <span className="p-1 bg-rose-500 text-white text-xs rounded-lg h-5 hidden md:flex text-nowrap items-center">
                  24% off
                </span>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCard;
