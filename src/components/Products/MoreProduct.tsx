import { useGetAllCategory } from "../../hooks/product.hook";
import ShopMoreCard from "../card/ShopMoreCard";

const MoreProduct = () => {
  const { data: category } = useGetAllCategory();

  return (
    <div className="p-2 shadow-md mt-4">
      <div className="text-center">
        <h3 className="text-base md:text-2xl font-semibold text-pink-400">
          SHOP MORE CATEGORIES
        </h3>
      </div>
      <div className="grid grid-cols-2 sm::grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
        {category?.map((items: any, index: number) => (
          <ShopMoreCard key={index} items={items} />
        ))}
      </div>
    </div>
  );
};

export default MoreProduct;
