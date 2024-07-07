import { getValue } from "../../utils/object";
import { dummyData } from "../../components/data/Data";
import { Link } from "react-router-dom";
import ButtonLogin from "../../components/common/Button/ButtonLogin";
import { FaTrash } from "react-icons/fa";
const Wishlist = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <h2 className="font-semibold text-lg px-5 md:px-20 my-5">Wishlist</h2>

      <div className="rounded-3xl font-sans grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 px-5 md:px-20 my-5">
        {dummyData.map((item, index) => (
          <>
            <Link
              key={index}
              to="/productdetailspage"
              onClick={handleClick}
              className="grid"
            >
              <div className="main-bg p-2 rounded-lg flex flex-col   cursor-pointer bg-white relative">
                <div>
                  <img
                    src={getValue(item, "image")}
                    alt="product"
                    className="rounded-lg h-52 "
                  />
                  <FaTrash className="text-rose-500 absolute top-2 right-2" />
                </div>
                <span className="line-clamp-3 font-semibold text-xs mt-2   ">
                  {getValue(item, "description")}
                </span>
                <div className="flex gap-2 items-center  mt-2  ">
                  {" "}
                  <span className="font-bold text-blue-500  text-sm md:text-base text-nowrap ">
                    ${getValue(item, "price")}
                  </span>
                  <span className="line-through text-gray-400 text-xs">
                    ${getValue(item, "disPrice")}
                  </span>
                  <span className="p-1 bg-rose-500 text-white text-xs rounded-lg h-5 flex text-nowrap items-center">
                    24% off
                  </span>
                </div>
              </div>
              <Link to="/cart " className="grid">
                <ButtonLogin title="Add to cart" styles="py-2 my-2" />
              </Link>
            </Link>
          </>
        ))}
      </div>
    </>
  );
};

export default Wishlist;
