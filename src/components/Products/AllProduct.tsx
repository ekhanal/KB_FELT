import { useState } from "react";

import AllProductsCards from "../card/AllProductsCard";
import { useGetAllProducts } from "../../hooks/product.hook";

const AllProduct = () => {
  const { data: products } = useGetAllProducts();
  const [showAll, setShowAll] = useState(false);

  const visibleData = showAll ? products : products?.slice(0, 4);

  return (
    <>
      <div className=" p-4 shadow-md mt-4">
        <div className="text-center">
          <h3 className="text-base md:text-2xl font-semibold text-pink-400">
            ALL PRODUCT
          </h3>
        </div>
        <div className="grid grid-cols-2 sm::grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
          {visibleData?.map((item: any, index: any) => (
            <AllProductsCards key={index} items={item} />
          ))}
        </div>
        {products?.length > 4 && (
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
