import AllProductsCard from "../../components/card/AllProductCard";
import { dummyData } from "../../components/data/Data";
const AllProducts = () => {
  return (
    <div className="px-5 md:px-20 my-5 md:my-10 ">
      <AllProductsCard data={dummyData} heading="All Products" />
    </div>
  );
};

export default AllProducts;
