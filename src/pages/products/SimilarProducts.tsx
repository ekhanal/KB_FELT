import TrendingCard from "../../components/card/TrendingCard";
import image1 from "../../assets/images/Bichoon.avif";
import image2 from "../../assets/images/handcrafted.jpg";
import image3 from "../../assets/images/ladieshandmade.webp";
import image4 from "../../assets/images/woolfelt.jpg";
import image5 from "../../assets/images/Ecofriendly.avif";
import image6 from "../../assets/images/eco.webp";
import image7 from "../../assets/images/yogamat.webp";
import image8 from "../../assets/images/santa.jpg";
const data = [
  {
    image: image1,
    title: "Bichoon Felt Boots.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
    price:100,
  },
  {
    image: image2,
    title: "Handcrafted Black Round Felt Pouf.Lorem ipsum dolor sit amet. ",
    price:50,
  },
  {
    image: image3,
    title: "Ladies Handmade Felt.Lorem ipsum dolor sit amet consectetur . ",
    price:80,
  },
  {
    image: image4,
    title: "Wool Felt,Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    price:50,
  },
  {
    image: image5,
    title: "Eco-Friendly.Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    price:80,
  },
  {
    image: image6,
    title: "Handcrafted.Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    price:100,
  },
  {
    image: image7,
    title: ".Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    price:80,
  },
  {
    image: image8,
    title: "Santa Claus.Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    price:50,
  },
  {
    image: image1,
    title: "Bichoon Felt Boots.Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    price:80,
  },
];
const SimilarProducts = () => {
  return (
    <div className="p-2 shadow-md mt-4">
      <div className="text-center">
        <h3 className="text-base md:text-2xl font-semibold text-pink-400">
          SHOP MORE LIKE THIS PRODUCT
        </h3>
      </div>
      <div className="grid grid-cols-2 sm::grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
        {data.map((items, index) => (
          <TrendingCard  key={index} item={items} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
