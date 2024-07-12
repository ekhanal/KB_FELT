import ShopMoreCard from "../card/ShopMoreCard";
import image1 from "../../assets/images/boots.webp";
import image2 from "../../assets/images/rugs.webp";
import image3 from "../../assets/images/Seatpad.webp";
import image4 from "../../assets/images/woolfelt.jpg";
import image5 from "../../assets/images/cozy.webp";
import image6 from "../../assets/images/eco.webp";
import image7 from "../../assets/images/yogamat.webp";
import image8 from "../../assets/images/yarn.webp";
const data = [
  {
    image: image1,
    title: "Felt Boots & Slippers",
    description: "Warm Himalayan Footwear",
  },
  {
    image: image2,
    title: "Wool Rugs",
    description: "Transform your space in style",
  },
  {
    image: image3,
    title: "Seat Pads & Decors",
    description: "Wool accents that access you to stay a while",
  },
  {
    image: image4,
    title: "Wool Dryer Balls",
    description: "Re-usable and natural fabric softenar",
  },
  {
    image: image5,
    title: "Cozy Pet House",
    description: "Luxurious nap for little kings and queens",
  },
  {
    image: image6,
    title: "Eco Pet Toys",
    description: "Green fun for furry friends",
  },
  {
    image: image7,
    title: "Yoga Mats",
    description: "Sustainable choice with luxurious comfort",
  },
  {
    image: image8,
    title: "yarns",
    description: "Unleash your creativity,Explore Colorful Woll Yarns",
  },
];
const MoreProduct = () => {
  return (
    <div className="p-2 shadow-md mt-4">
      <div className="text-center">
        <h3 className="text-base md:text-2xl font-semibold text-pink-400">
          SHOP MORE CATEGORIES
        </h3>
      </div>
      <div className="grid grid-cols-2 sm::grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
        {data.map((items, index) => (
          <ShopMoreCard key={index} items={items} />
        ))}
      </div>
    </div>
  );
};

export default MoreProduct;
