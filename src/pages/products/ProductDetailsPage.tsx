import { CiHeart, CiShare2 } from "react-icons/ci";
import { motorsData } from "../../components/data/Data";
import { GoDotFill } from "react-icons/go";
import { LiaStarSolid } from "react-icons/lia";
import ProductTabs from "../../components/Products/ProductTabs";
import Button from "../../components/common/Button/Button";
// import TopProducts from "../../components/Products/TopProducts";
import { useState, useRef } from "react";
import SimilarProducts from "./SimilarProducts";
const ProductDetailPage = () => {
  
  const [quantity, setQuantity] = useState(0); // Initial quantity value
  const [mainImage, setMainImage] = useState(motorsData[0].image);
  const mainImageRef = useRef(null);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const handleImageClick = (image: any) => {
    setMainImage(image);
  };

  return (
    <>
      <div className="full flex flex-col mx-5 lg:mx-20 md:flex-row gap-5 my-8">
        <div className="w-full md:w-1/2 flex flex-col ">
          <div className="flex flex-col-reverse lg:flex-row gap-5 w-full ">
            {/* small image */}
            <div className="  flex lg:flex-col items-center gap-2  ">
              {motorsData.map((item, index) => (
                <div
                  key={index}
                  className="w-24 h-24 overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => handleImageClick(item.image)}
                >
                  <img
                    src={item.image}
                    alt={`small-pic-${index}`}
                    className="w-24 h-24 object-cover"
                  />
                </div>
              ))}
            </div>
            {/* product image */}
            <div>
              <div className="relative w-full">
                <img
                  ref={mainImageRef}
                  src={mainImage}
                  className="w-full h-full object-cover md:min-h-[300px] lg:min-h-[500px]"
                />
                <div className="absolute top-2 right-3 flex flex-col gap-2 bg-white rounded-full">
                  <CiHeart size={30} className="rounded-full p-1" />
                </div>
                <div className="absolute top-12 right-3 flex flex-col gap-2 rounded-full bg-white">
                  <CiShare2 size={30} className="rounded-full p-1" />
                </div>
                <div className="absolute top-2 left-2 rounded-full bg-[#22787f] text-white p-2 w-14 h-14 flex items-center justify-center">
                  <span className="text-xs font-bold">
                    25%
                    <br />
                    off
                  </span>
                </div>
              </div>
              <div className="w-full flex gap-2 md:gap-5 mt-5">
                  <Button title="Add to cart" styles="cursor-pointer " />
                  <a href="/cart" className="w-full flex gap-5" onClick={handleClick}>
                <Button title="Buy Now" styles="cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* right product details */}
        <div className="w-full md:w-1/2 h-full">
          {/* <span className="text-gray-500 text-xs my-3">{`Home > Men Clothing > Men's Top Wear`}</span> */}
          <h1 className="text-sm text-gray-500 my-2"> Brand Portronics</h1>
          <p className="text-black font-semibold text-lg">
            {motorsData[0].name}
          </p>
          <p className="text-black font-semibold text-sm md:text-lg ">
            Portronics Clamp M3 Adjustable Car Mobile Phone Holder Stand For
            Dashboard & Windshield, 360° Rotational, Strong Suction Cup,
            Compatible With 4 To 6 Inch Devices(Black)
          </p>
          <div className="gap-2 flex items-center my-2">
            <span className="text-xl text-[#22787f] font-semibold">$1,200</span>
            <span className="text-black line-through text-sm">$600</span>
            <span className="text-white text-xs px-1 rounded-lg bg-pink-400">
              66% off
            </span>
          </div>
          {/* stars */}
          <div className="flex items-center gap-2">
            <LiaStarSolid className="text-yellow-500" />
            <span className="text-sm font-medium">
              4.4
              <span className="text-gray-500 font-normal ml-1">
                (120 reviews)
              </span>
            </span>
          </div>
          {/* size */}
          <div className="my-2">
            <span className="font-semibold">Size:</span>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-sm bg-gray-200 px-2 py-1 font-medium rounded-lg">
                xl
              </span>
              <span className="text-sm bg-gray-200 px-2 py-1 font-medium rounded-lg">
                lg
              </span>
              <span className="text-sm bg-gray-200 px-2 py-1 font-medium rounded-lg">
                xl
              </span>
              <span className="text-sm bg-gray-200 px-2 py-1 font-medium rounded-lg">
                2xl
              </span>
              <span className="text-sm bg-gray-200 px-2 py-1 font-medium rounded-lg">
                3xl
              </span>
            </div>
          </div>
          {/* category */}
          <div className="my-2">
            <span className="font-semibold">Category:</span>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-sm bg-gray-200 px-2 py-1 font-medium rounded-lg">
                Yarn and Wool
              </span>
              <span className="text-sm bg-gray-200 px-2 py-1 font-medium rounded-lg">
                DIY Kits
              </span>
              <span className="text-sm bg-gray-200 px-2 py-1 font-medium rounded-lg">
                Fabrics and Textiles
              </span>
              <span className="text-sm bg-gray-200 px-2 py-1 font-medium rounded-lg">
                Tools and Accessories
              </span>
              <span className="text-sm bg-gray-200 px-2 py-1 font-medium rounded-lg">
                Craft Supplies
              </span>
            </div>
          </div>
          {/* color */}
          <div className="my-2">
            <span className="font-semibold">Color:</span>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-sm bg-red-500 px-2 py-1 text-white font-medium rounded-lg">
                Red
              </span>
              <span className="text-sm bg-blue-500 px-2 py-1 text-white font-medium rounded-lg">
                Blue
              </span>
              <span className="text-sm bg-yellow-500 px-2 py-1 text-white font-medium rounded-lg">
                Yellow
              </span>
              <span className="text-sm bg-black px-2 py-1 text-white font-medium rounded-lg">
                Black
              </span>
              <span className="text-sm bg-green-500 px-2  text-white py-1 font-medium rounded-lg">
                Green
              </span>
            </div>
          </div>
          {/* quantity */}
          <div className="items-center my-2">
            <span className="mr-2 font-semibold block">Quantity</span>
            <div className="flex items-center justify-between rounded-lg h-8 bg-white w-24 mt-1 font-bold">
              <button className="py-1 px-2" onClick={decrementQuantity}>
                -
              </button>
              <span className="px-2 py-1">{quantity}</span>
              <button className="py-1 px-2 text-xl" onClick={ incrementQuantity}>
                +
              </button>
            </div>
          </div>
          <div>
            <span className="font-semibold">Product Highlights:</span>
            <ul>
              {motorsData.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-500 flex gap-2 items-center"
                >
                  <GoDotFill size={12} />
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-20">
        <ProductTabs />
      </div>
      <div>
        <SimilarProducts />
      </div>
    </>
  );
};

export default ProductDetailPage;
