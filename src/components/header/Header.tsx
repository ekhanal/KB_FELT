import { useState, useEffect } from "react";

import { TiArrowSortedDown } from "react-icons/ti";
import NavbarDrpdown from "./NavbarDropdown";
import { motorCategory } from "../data/Data";
import { getValue } from "../../utils/object";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);

  useEffect(() => {
    if (dropdown || categoryDropdown) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  }, [dropdown, categoryDropdown]);

  return (
    <>
      <div className="relative bg-[#22787f] ">
        <div
          className="hidden md:flex gap-5 mx-20 py-2 text-white font-sans justify-between  w-full lg:w-9/12 overflow-x-scroll"
          style={{ scrollbarWidth: "none" }}
        >
          <span
            className="flex items-center gap-1 text-sm cursor-pointer relative font-semibold "
            onMouseEnter={() => setCategoryDropdown(true)}
            onMouseLeave={() => setCategoryDropdown(false)}
          >
            ALL <TiArrowSortedDown />
          </span>

          <NavbarDrpdown
            categoryDropDown={categoryDropdown}
            setCategoryDropDown={setCategoryDropdown}
          />

          {motorCategory.map((item: any, index: number) => (
            <Link to={"/productCategoryPage"}>
              <span
                key={index}
                className="justify-between font-semibold text-nowrap"
              >
                {getValue(item, "name")}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
