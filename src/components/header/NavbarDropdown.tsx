import { FaAngleRight } from "react-icons/fa";
import { RiArrowUpSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motorsData } from "../data/Data";
import { getValue } from "../../utils/object";

interface NavbarDrpdownProps {
  categoryDropDown: boolean;
  setCategoryDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavbarDrpdown: React.FC<NavbarDrpdownProps> = ({
  categoryDropDown,
  setCategoryDropDown,
}) => {
  return (
    <div>
      {categoryDropDown && (
        <div
          className="absolute  right-5 md:left-5 top-16 md:top-12 w-[300px] md:w-[800px]  h-[500px]    bg-white rounded-md shadow-lg flex z-20 transition duration-700 delay-700 ease-in-out"
          onMouseLeave={() => setCategoryDropDown(false)}
        >
          {/* Arrow up */}
          <div
            className="absolute -top-5 left-[4%] md:left-[4.9%]  text-transparent  w-full flex justify-center z-10 "
            onMouseEnter={() => setCategoryDropDown(true)}
          >
            <RiArrowUpSFill size={32} className="backdrop-transparent" />
          </div>
          {/* Category Menu */}
          <div className="w-2/6 text-gray-700 flex flex-col py-3 px-3 transition delay-700 duration-700 ease-in-out overflow-y-auto z-50">
            <div>
              {/* Category */}
              <div
                className={`py-1 px-2 flex items-center cursor-pointer w-full justify-between`}
              >
                <Link
                  to={`/categoryproduct`}
                  className="w-full flex flex-col gap-2"
                >
                  {motorsData.map((item) => (
                    <div className="flex justify-between w-full  ">
                      <div>
                        {" "}
                        <span>{getValue(item, "name")}</span>
                      </div>
                      <div>
                        <span>
                          <FaAngleRight className="mt-1 text-gray-500" />
                        </span>
                      </div>
                    </div>
                  ))}
                </Link>
              </div>
            </div>
          </div>
          {/* Subcategory Menu */}
          <div
            className="w-4/6 text-gray-700  py-3 gap-2 border-l-2  overflow-y-auto  grid grid-cols-3 "
            style={{
              scrollbarWidth: "none",
            }}
          >
            {motorsData.map((item) => (
              <div>
                {item.subcategory.map((sub, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center  h-32"
                  >
                    <img
                      className="rounded-full h-24 w-24 mr-2"
                      src={sub.image}
                      alt="Subcategory"
                    />
                    <span className="justify-center flex">{sub.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarDrpdown;
