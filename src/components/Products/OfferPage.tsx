import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image4.jpg";
import image4 from "../../assets/images/image5.jpg";
import image5 from "../../assets/images/Ecofriendly.avif";
import image6 from "../../assets/images/handcrafted.jpg";
import image7 from "../../assets/images/herbs.avif";
import image8 from "../../assets/images/ladieshandmade.webp";
import OfferCard from "../card/OfferCard";
import {useState} from "react";

const OfferPage = () => {
    const [showAll, setShowAll] = useState(false);
    const data=[
        {
            image: image1,
            title: "Alphabets",
            description: "Made from recycled materials. Made from recycled materials",
            price: 100,
            offer: "50%",
        } ,
        {
            image: image2,
            title: "Animals",
            description:
                "Handmade by skilled craftsmen. Handmade by skilled craftsmen",
            price: 150,
            offer: "10%",
        },
        {
            image: image3,
            title: "Boots",
            description: "Made with natural materials. Made with natural materials",
            price: 75,
            offer: "15%",
        },
        {
            image: image4,
            title: "Wool Felt",
            description: "Handmade with natural fibers",
            price: 10,
            offer: "25%",
        },
        {
            image: image5,
            title: "Eco-Friendly",
            description: "Made from recycled materials",
            price: 15,
            offer: "10%",
        },
        {
            image: image6,
            title: "Handcrafted",
            description:
                "Handmade by skilled craftsmen. Handmade by skilled craftsmen",
            price: 120,
            offer: "20%",
        },
        {
            image: image7,
            title: "Herbs",
            description:
                "Handcrafted with natural ingredients. Handcrafted with natural ingredients",
            price: 75,
            offer: "5%",
        },
        {
            image: image8,
            title: "Ladies Handmade",
            description: "Handcrafted for women",
            price: 10,
            offer: "10%",
        },
    ];
    const visibleData = showAll ? data : data.slice(0,4);
  return (
    
    <>
     <>
      <div className="p-4 shadow-md mt-4">
        <div className="text-center">
          <h3 className="text-base md:text-2xl font-semibold text-pink-400">
          OFFER
          </h3>
        </div>
        <div className="grid grid-cols-2 sm::grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {visibleData.map((item, index) => (
            <OfferCard key={index} item={item} />
          ))}
        </div>
        {data.length > 4 && (
          <div className="flex justify-center mt-4">
            <button
              className="bg-pink-400 text-white px-4 py-2 rounded"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </>
    </>
  );
};

export default OfferPage;
