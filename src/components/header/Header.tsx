// import { useState, useEffect } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
// import NavbarDropdown from "./NavbarDropdown";
import { motorsData } from "../data/Data";
import { getValue } from "../../utils/object";
import { Link } from "react-router-dom";


const Header = () => {
  // const [dropdown, setDropdown] = useState(false);
  // const [categoryDropdown, setCategoryDropdown] = useState(false);

  // useEffect(() => {
  //   setDropdown(categoryDropdown);
  // }, [categoryDropdown]);

  return (
    <div className="relative bg-[#22787f]">
      <div
        className="hidden md:flex gap-5 mx-20 py-2 text-white font-sans w-full lg:w-9/12 overflow-x-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        {/* <span
          className="flex items-center gap-1 text-sm cursor-pointer relative font-semibold"
          onMouseEnter={() => setCategoryDropdown(true)}
          onMouseLeave={() => setCategoryDropdown(false)}
        >
          ALL <TiArrowSortedDown />
        </span> */}

        {/* <NavbarDropdown
          categoryDropdown={categoryDropdown}
          setCategoryDropdown={setCategoryDropdown}
        /> */}

        {motorsData.map((item, index) => (
          <Link key={index} to={`/productcategory/${item.category}`}>
            <span className="justify-between font-semibold text-nowrap">
              {getValue(item, "category")}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;

export const PATH = {
  dashboard: "/",
  resetPassword: "/resetPassword",
  forgotPassword: "/forgotPassword",
  login: "/login",
  productDetailsPage: "/productDetailsPage",
  cart: "/cart",
  productCategoryPage: "/productcategory/:id",
  paymentMethod: "/paymentmethod",
  wishlist: "/wishlist",
  categoryCardPage: "/categorycardpage",
  payment: "/payment",
};
