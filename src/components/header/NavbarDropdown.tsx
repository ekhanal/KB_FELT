import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { RiArrowUpSFill } from "react-icons/ri";

import { getValue } from "../../utils/object";
import { useGetAllCategoryAndSubcategory } from "../../hooks/product.hook";
import { Link } from "react-router-dom";

interface NavbarDrpdownProps {
  data: any;
  categoryDropDown: boolean;
  setCategoryDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarDrpdown: React.FC<NavbarDrpdownProps> = ({
  categoryDropDown,
  setCategoryDropDown,
}) => {
  const { data: category } = useGetAllCategoryAndSubcategory();

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<number | null>(
    null
  );

  return (
    <div>
      {categoryDropDown && (
        <div className="absolute right-5 md:left-0  top-16 md:top-11 w-[500px] md:w-full h-auto    flex z-50  text-xs pr-5 ">
          <div
            className="flex mx-5 lg:mx-16 bg-white w-full rounded-md shadow-lg"
            onMouseLeave={() => setCategoryDropDown(false)}
          >
            {/* Arrow up */}
            <div
              className="absolute -top-5 left-[4%] md:left-[4.9%] text-transparent w-full flex justify-center z-10"
              onMouseEnter={() => setCategoryDropDown(true)}
            >
              <RiArrowUpSFill size={32} className="backdrop-transparent" />
            </div>
            {/* Category Menu */}
            <div className="w-2/12 text-gray-700 flex flex-col py-3 px-3 transition delay-700 duration-700 ease-in-out overflow-y-auto z-50 ">
              {category?.map((item: any) => (
                <div
                  key={item.id}
                  className={`py-1 px-2 flex items-center cursor-pointer w-full justify-between ${
                    selectedCategory === item.id ? "bg-gray-200" : ""
                  }`}
                  onMouseEnter={() => setSelectedCategory(item.id)}
                >
                  <span>{getValue(item, "category_name")}</span>
                  <FaAngleRight className="mt-1 text-gray-500" />
                </div>
              ))}
            </div>
            {/* Subcategory Menu */}
            <div
              className="w-2/12 text-gray-700 flex flex-col py-3 px-3 transition delay-700 duration-700 ease-in-out overflow-y-auto z-50 "
              style={{
                scrollbarWidth: "none",
              }}
            >
              {category
                ?.filter((item: any) => item.id === selectedCategory)
                .flatMap((item: any) => item.mainCategory)
                .map((sub: any) => (
                  <div
                    key={sub.id}
                    className={`py-1 px-2 flex items-center cursor-pointer w-full justify-between ${
                      selectedSubcategory === sub.id ? "bg-gray-200" : ""
                    }`}
                    onMouseEnter={() => setSelectedSubcategory(sub.id)}
                  >
                    <span>{getValue(sub, "sub_category_name")}</span>
                    <FaAngleRight className="mt-1 text-gray-500" />
                  </div>
                ))}
            </div>
            {/* Child Category Menu */}
            <div
              className="w-8/12 text-gray-700 grid  grid-cols-4 lg:grid-cols-6 gap-5 py-3 px-3 transition delay-700 duration-700 ease-in-out overflow-y-auto z-50 "
              style={{
                scrollbarWidth: "none",
              }}
            >
              {category
                ?.filter((item: any) => item.id === selectedCategory)
                .flatMap((item: any) => item.mainCategory)
                .filter((sub: any) => sub.id === selectedSubcategory)
                .flatMap((sub: any) => sub.subCategories)
                .map((child: any) => (
                  <Link
                    key={child.id}
                    to={`/subCategoryProduct/${getValue(
                      child,
                      "child_category_slug"
                    )}`}
                    className="py-1 px-2 items-center cursor-pointer w-full justify-center "
                  >
                    <img
                      className="w-20 h-20  object-contain"
                      src={child.image}
                      alt=""
                    />
                    <span className="justify-center flex text-center text-xs pt-2">
                      {child.child_category_name}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarDrpdown;
