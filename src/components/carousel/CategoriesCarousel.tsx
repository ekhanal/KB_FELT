// import Slider from "react-slick";
// import { Link } from "react-router-dom";
import CraftCard from "../card/CraftCard";

import alphabets from "../../assets/images/alphabets.webp";
import animals from "../../assets/images/animals.webp";
import feltballs from "../../assets/images/felt-balls.webp";
import feltsheets from "../../assets/images/feltsheets.webp";
import food from "../../assets/images/food.webp";
import heart from "../../assets/images/heart.webp";
import other from "../../assets/images/other.webp";
import sports from "../../assets/images/sports-ball.webp";

const CategoriesCarosule = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 2,
    draggable: true,
    swipeToSlide: true,
    nextArrow: null,
    prevArrow: null,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    {
      image: feltballs,
      Heading: "Felt Balls",
    },
    {
      image: food,
      Heading: "Food, Fruits and vegetables",
    },
    {
      image: feltsheets,
      Heading: "Felt Sheets",
    },
    {
      image: heart,
      Heading: "Heart, Stars and Rainbow",
    },
    {
      image: alphabets,
      Heading: "Alphabets & Number",
    },
    {
      image: other,
      Heading: "Other Shapes",
    },
    {
      image: sports,
      Heading: "Sports Ball and Accessories",
    },
    {
      image: animals,
      Heading: "Animals & Characters",
    },
  ];

  return (
    <div className=" md:-mt-0 z-40 bg-white pt-8">
      <div className="text-center">
        <h1 className="text-base md:text-2xl font-semibold text-pink-400">CRAFT SUPPLIES</h1>
        <p className="text-gray-400">
          Over 500+ unique designs with customization
        </p>
      </div>
      <div className="my-5 px-5 sm:px-6 lg:px-20 max-p-7xl z-20">
        {/* <Slider
          className="bg-white md:bg-transparent rounded-lg z-40  "
          {...settings}
        > */}
          <div className="md:flex">
            {cards.map((item, index) => (
              <CraftCard data={item} key={index} />
            ))}
          </div>
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default CategoriesCarosule;
