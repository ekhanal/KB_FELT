import { useState } from "react";
import { Link } from "react-router-dom";
import { getValue } from "../../utils/object";

interface ProductCardProps {
  data: any;
  heading: string;
}

const AllProductsCard: React.FC<ProductCardProps> = ({ data, heading }) => {
  const [visibleProducts, setVisibleProducts] = useState(2);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const loadMore = () => {
    setVisibleProducts((prev) => prev + 1);
  };

  const loadLess = () => {
    setVisibleProducts((prev) => Math.max(2, prev - 1));
  };

  return (
    <>
      <h2 className="my-5 text-xl font-semibold text-pink-400">{heading}</h2>
      <div className="rounded-3xl font-sans grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {data.slice(0, visibleProducts).map((item: any, index: number) => (
          <Link
            key={index}
            to="/productdetailspage"
            onClick={handleClick}
            className=""
          >
            <div className="main-bg p-0 md:p-2 rounded-lg flex flex-col cursor-pointer mt-2 ">
              <div className="relative">
                {/* <CarouselImage images={getValue(item, "image")} /> */}
                <img
                  src={getValue(item, "image")}
                  alt="product"
                  className={`rounded-lg h-32 md:h-56 w-full object-cover `}
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
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        {visibleProducts < data.length && (
          <button
            onClick={loadMore}
            className="px-4 py-2 bg-pink-400 text-white rounded-md mx-2"
          >
            Load More
          </button>
        )}
        {visibleProducts > 2 && (
          <button
            onClick={loadLess}
            className="px-4 py-2 bg-pink-400 text-white rounded-md mx-2"
          >
            Load Less
          </button>
        )}
      </div>
    </>
  );
};

export default AllProductsCard;
