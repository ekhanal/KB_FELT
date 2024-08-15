import { useState, useEffect } from "react";

import { TiArrowSortedDown } from "react-icons/ti";
import NavbarDrpdown from "./NavbarDropdown";
import { getValue } from "../../utils/object";
import { Link } from "react-router-dom";
import { useGetAllCategory } from "../../hooks/product.hook";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const { data: category } = useGetAllCategory();
  useEffect(() => {
    if (dropdown || categoryDropdown) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  }, [dropdown, categoryDropdown]);

  return (
    <>
      <div className="relative  px-5 lg:px-24  primary-bg-colors text-white mt-2">
        <div
          className="hidden md:flex gap-2 p py-3 font-sans   w-full   text-sm"
          style={{ scrollbarWidth: "none" }}
        >
          <span
            className="flex items-center gap-1 text-sm cursor-pointer relative font-semibold text-nowrap"
            onMouseEnter={() => setCategoryDropdown(true)}
            onMouseLeave={() => setCategoryDropdown(false)}
          >
            All Categories <TiArrowSortedDown />
          </span>

          <NavbarDrpdown
            categoryDropDown={categoryDropdown}
            setCategoryDropDown={setCategoryDropdown}
            data={category}
          />

          <div
            className="flex overflow-scroll "
            style={{
              scrollbarWidth: "none",
            }}
          >
            {category?.map((item: any, index: number) => (
              <Link
                to={`/productCategoryPage/${getValue(item, "category_slug")}`}
              >
                <span
                  key={index}
                  className=" font-semibold text-nowrap  text-[12px] mr-3 text-white  pr-2 border-r-2"
                >
                  {getValue(item, "category_name")}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
