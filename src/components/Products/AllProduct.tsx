import React, { useState } from "react";
import image1 from "../../assets/images/Ecofriendly.avif";
import image2 from "../../assets/images/needlefelt.avif";
import image3 from "../../assets/images/Wool.avif";
import image4 from "../../assets/images/Ecofriendly.avif";
import image5 from "../../assets/images/needle.jpg";
import image6 from "../../assets/images/handcrafted.jpg";
import image7 from "../../assets/images/ladieshandmade.webp";
import image8 from "../../assets/images/herbs.avif";
import AllProductsCards from "../card/AllProductsCard";

const AllProduct = () => {
  const [showAll, setShowAll] = useState(false);

  const data = [
    {
      image: image1,
      title: "Eco-Friendly",
      description: "Made from recycled materials",
      price: 15,
    },
    {
      image: image2,
      title: "Needle Felt",
      description: "Handcrafted with precision",
      price: 12,
    },
    {
      image: image3,
      title: "Wool Felt",
      description: "Handmade with natural fibers",
      price: 10,
    },
    {
      image: image4,
      title: "Eco-Friendly",
      description: "Made from recycled materials",
      price: 15,
    },
    {
      image: image5,
      title: "Handcrafted",
      description: "Handmade by skilled craftsmen",
      price: 12,
    },
    {
      image: image6,
      title: "Ladies Handmade",
      description: "Handcrafted for women",
      price: 10,
    },
    {
      image: image7,
      title: "Herbs",
      description: "Handcrafted with natural ingredients",
      price: 15,
    },
    {
      image: image8,
      title: "Eco-Friendly",
      description: "Made from recycled materials",
      price: 15,
    },
  ];

  const visibleData = showAll ? data : data.slice(0, 4);

  return (
    <>
      <div className=" p-4 shadow-md mt-4">
        <div className="text-center">
          <h3 className="text-base md:text-2xl font-semibold text-pink-400">
            ALL PRODUCT
          </h3>
        </div>
        <div className="grid grid-cols-2 sm::grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
          {visibleData.map((item, index) => (
            <AllProductsCards key={index} items={item} />
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
  );
};

export default AllProduct;
