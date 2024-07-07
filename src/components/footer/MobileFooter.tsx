import { RiHomeSmile2Line } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi2";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const MobileFooter = () => {
  return (
    <>
      <>
        <div className="h-30 bg-blue-900 text-white flex sticky bottom-0 md:hidden px-5 py-5 shadow-full justify-between z-50  ">
          <Link to={"/"}>
            <div className="flex flex-col justify-center items-center ">
              <RiHomeSmile2Line className="" size={24} />
            </div>
          </Link>
          <Link to="/ProductCategoryPage">
            <div className="flex flex-col justify-center items-center ">
              <BiCategory className="" size={24} />
            </div>
          </Link>
          <div className="flex flex-col justify-center items-center ">
            <HiOutlineUser className="" size={24} />
          </div>{" "}
          <Link to={"/Cart"}>
            <div className="flex flex-col justify-center items-center  relative">
              <span className="absolute text-xs -top-2 right-0 w-4 h-4 bg-rose-500 text-white rounded-full flex justify-center items-center">
                0
              </span>
              <BsCart3 className="" size={24} />
            </div>
          </Link>
        </div>
      </>
    </>
  );
};

export default MobileFooter;
