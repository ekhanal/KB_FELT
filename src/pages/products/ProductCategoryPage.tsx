import { useState } from "react";
import { motorsData } from "../../components/data/Data";
import { motorCategory } from "../../components/data/Data";
import { getValue } from "../../utils/object";
import { Link } from "react-router-dom";

const ProductCategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleRadioChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  const handleClear = () => {
    setSelectedCategory(null);
  };
  return (
    <>
      <div className="flex px-5 lg:px-20 my-5 gap-2 md:gap-5">
        <div className="w-4/12 md:w-2/12 bg-white rounded-lg p-2">
          <div className="flex justify-between pb-2  border-b ">
            <span>Fliter</span>
            <button className="text-rose-500 font-medium" onClick={handleClear}>
              Clear
            </button>
          </div>{" "}
          <div className="flex flex-col justify-center gap-2 mt-1">
            {motorCategory.map((item, index) => (
              <div
                className="flex items-center w-full gap-2 text-sm md:text-base"
                key={index}
              >
                <input
                  type="radio"
                  id={getValue(item, "name")}
                  name="category"
                  value={getValue(item, "name")}
                  checked={selectedCategory === item.name}
                  onChange={handleRadioChange}
                  className="hidden"
                />
                <label htmlFor={getValue(item, "name")}>
                  {getValue(item, "name")}
                </label>
              </div>
            ))}
          </div>
          {/* <div className="my-2">
            <span className="font-semibold">Price Range</span>
            <RangeSlider />
          </div> */}
        </div>
        <div className="9/12 md:w-10/12">
          <div className="flex justify-between mb-2 items-center text-sm">
            <div className="">
              <span className="text-gray-500 text-xs md:text-sm md:flex hidden">
                {" "}
                {"Home > Electronics "}
              </span>
            </div>
            <div className="bg-white rounded-lg p-2 font-semibold text-xs md:text-base">
              <span>Sort By :</span>
              <select>
                <option selected>Recommended</option>
                <option>Latest</option>
                <option>Relevant</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1">
            {motorsData.map((item, index) => (
              <>
                <Link to={"/CategoryCardPage"}>
                  <div
                    key={index}
                    className="main-bg p-2 rounded-lg flex flex-col   cursor-pointer "
                  >
                    {item.subcategory.map((subcat) => (
                      <>
                        <img
                          src={getValue(subcat, "image")}
                          alt={subcat.name}
                          className="md:h-40 h-24 rounded-lg"
                        />
                        <p className="text-xs md:text-sm font-semibold text-center mt-1">
                          {getValue(item, "name")}
                        </p>
                      </>
                    ))}
                  </div>
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCategoryPage;
