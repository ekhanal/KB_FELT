import image1 from "../../assets/images/eco.webp";
import image2 from "../../assets/images/feltsheets.webp";
import image3 from "../../assets/images/felt-balls.webp";
import image4 from "../../assets/images/Ellen.avif";
import image5 from "../../assets/images/herbs.avif";
import image6 from "../../assets/images/Ecofriendly.avif";
import TrendingCard from "../card/TrendingCard";

const data = [
  {
    image: image1,
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 15,
  },
  {
    image: image2,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 10,
  },
  {
    image: image3,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 20,
  },
  {
    image: image4,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 12,
  },
  {
    image: image5,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 15,
  },
  {
    image: image6,
    title: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 10,
  },
];

const TrendingProducts = () => {
  return (
    <>
      <div className=" p-4 shadow-md mt-4">
        <div className="text-center">
          <h3 className="text-base md:text-2xl font-semibold text-pink-400">
            POPULAR PRODUCT
          </h3>
        </div>
        <div className="grid grid-cols-2 sm::grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
          {data.map((item, index) => (
            <TrendingCard key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
