import { useGetAllFeaturedProducts } from "../../hooks/product.hook";
import AllProductsCard from "../card/AllProductsCard";

const NewArrival = () => {
  const { data: products } = useGetAllFeaturedProducts();
  return (
    <>
      <div className=" p-4 shadow-md mt-4">
        <div className="text-center">
          <h3 className="text-base md:text-2xl font-semibold text-pink-400">
            NEW ARRIVAL
          </h3>
        </div>
        <div className="w-full grid grid-cols-2 sm::grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 lg:px-20">
          {products?.map((item: any) => (
            <AllProductsCard items={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewArrival;
