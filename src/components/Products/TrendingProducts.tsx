import { useGetAllTopProducts } from "../../hooks/product.hook";
import AllProductsCard from "../card/AllProductsCard";

const TrendingProducts = () => {
  const { data: trendingProducts } = useGetAllTopProducts();
  return (
    <>
      <div className=" p-4 shadow-md mt-4">
        <div className="text-center">
          <h3 className="text-base md:text-2xl font-semibold text-pink-400">
            POPULAR PRODUCT
          </h3>
        </div>
        <div className="grid grid-cols-2 sm::grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
          {trendingProducts?.map((item: any, index: any) => (
            <AllProductsCard key={index} items={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
