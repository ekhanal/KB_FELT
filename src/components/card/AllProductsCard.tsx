import React from "react";
import { Link } from "react-router-dom";
import { getValue } from "../../utils/object";

interface AllProductsProps {
  items: any;
}
const AllProductsCard: React.FC<AllProductsProps> = ({ items: items }) => {
  return (
    <Link
      to={`/productdetailspage/${getValue(items, "prod_slug")}`}
      className="w-full  "
    >
      <div className="w-full  rounded-md overflow-hidden border m-4 ">
        <div className="w-full flex flex-col items-center">
          <img
            className=" w-full rounded-t-md md:h-[300px] object-cover"
            src={items?.image}
            alt={items?.title}
          />
        </div>
        <div className="flex flex-col items-center  p-2">
          <h3 className="line-clamp-2 md:line-clamp-2  text-xs md:text-base mt-2 leading-1 min-h-[3rem] ">
            {items?.product_name}
          </h3>

          <p className="text-gray-800 text-sm md:text-base font-bold text-center mt-1">
            ${items?.current_price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AllProductsCard;
