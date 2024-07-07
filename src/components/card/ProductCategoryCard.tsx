import { Link } from "react-router-dom";
import { getValue } from "../../utils/object";

interface Product {
  image: string;
  price: number;
  description: string;
  rating: number;
  offer: number;
  disPrice: number;
}
interface ProductCardProps {
  data: Product[];
  heading: string;
}

const ProductCategoryCard: React.FC<ProductCardProps> = ({ data }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="rounded-3xl font-sans grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
        {data.map((item, index) => (
          <Link
            key={index}
            to="/productdetailspage"
            onClick={handleClick}
            className=""
          >
            <div className="main-bg p-2 rounded-lg flex flex-col   cursor-pointer bg-white ">
              <div className="relative">
                <img
                  src={getValue(item, "image")}
                  alt="product"
                  className="rounded-lg h-32 md:h-56 "
                />
                <span className="absolute top-0 right-2 p-1 bg-rose-500 text-white text-xs rounded-lg h-5 flex md:hidden text-nowrap items-center">
                  24% off
                </span>
              </div>
              <span className="line-clamp-2 md:line-clamp-3 font-semibold text-xs md:text-sm mt-2   ">
                {getValue(item, "description")}
              </span>
              <div className="flex gap-2 items-center  mt-2  ">
                {" "}
                <span className="font-bold text-blue-500  text-xs md:text-base text-nowrap ">
                  ${getValue(item, "price")}
                </span>
                <span className="line-through text-gray-400 text-xs">
                  ${getValue(item, "disPrice")}
                </span>
                <span className="hidden  p-1 bg-rose-500 text-white text-xs rounded-lg h-5 md:flex text-nowrap items-center">
                  24% off
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductCategoryCard;
