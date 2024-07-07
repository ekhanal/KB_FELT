import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
const TopNavbar = () => {
  return (
    <div className="primary_color px-5 lg:px-20 hidden md:flex justify-between font-sans text-sm py-2	">
      <div className="flex items-center gap-3">
        {" "}
        <span className="flex items-center">
          <HiOutlineDevicePhoneMobile /> Download App
        </span>
      </div>
      <div className="flex items-center gap-3 ">
        {" "}
        <span>Contact Us</span>
        <span> Track Order</span>
        <span> Seller Login</span>
      </div>
    </div>
  );
};

export default TopNavbar;
