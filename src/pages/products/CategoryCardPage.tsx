import ProductCategoryCard from "../../components/card/ProductCategoryCard";
import { dummyData } from "../../components/data/Data";
const CategoryCardPage = () => {
  return (
    <>
      <div className="my-5 px-5 lg:px-20 ">
        <h1 className="text-xl font-semibold my-2">Engine</h1>
        <ProductCategoryCard data={dummyData} heading="Motors" />
      </div>
    </>
  );
};

export default CategoryCardPage;
