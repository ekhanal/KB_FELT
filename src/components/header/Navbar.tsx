import React, { useState, MouseEvent, useRef, useEffect } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { PiHeartStraight, PiShoppingCartLight } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai"; // Import only the hamburger icon
import logo from "./../../assets/images/kb fent logo.svg";
import Button from "../common/Button/Button";
import SignUpModal from "../popup/SignUpModal";
import LoginModal from "../popup/LoginModal";
import ButtonLogin from "../common/Button/ButtonLogin";
import { useLogout, useUserProfile } from "../../hooks/auth.hook";
import { useAuthContext } from "../../hooks/contextConsumer.hook";
import { useGetAllCart } from "../../hooks/cart.hook";
import { useClickOutside } from "../../hooks/useClickOutside.hook";
import { getCookie, removeCookie } from "../../utils/cookie";
import { AUTH_COOKIE_CONFIG } from "../../constants/common";
import { RiArrowUpSFill } from "react-icons/ri";
import { PATH } from "../../constants/path";
import { GoChecklist } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [loginVisible, setLoginVisible] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // State for menu visibility
  const linkRef = useRef<HTMLAnchorElement>(null);
  const { data: userData } = useUserProfile();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [userDropdown, setUserDropDown] = useState<boolean>(false);
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();
  const navigate = useNavigate();
  const modalContent = useRef<HTMLDivElement>(null);
  const { mutateAsync: logout } = useLogout();
  const { data: cartData, refetch: cartFetch } = useGetAllCart();

  const cartCount =
    cartData?.reduce(
      (acc: number, item: any) => acc + (item.items.length || 0),
      0
    ) || 0;
  useClickOutside(modalContent, visible, setVisible);

  console.log({ userData });

  const user = userData?.user;

  const userPartName = user?.name?.split(" ") || ["", ""];
  const initials = userPartName
    .map((part: string) => part.charAt(0).toUpperCase())
    .join("");

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      if (linkRef.current) {
        linkRef.current.click(); // Correct way to trigger a click on a ref
      }
    }
  };

  const onClickLogout = async () => {
    try {
      setIsLoggedIn(false);
      await logout({
        refresh_token: getCookie(AUTH_COOKIE_CONFIG.REFRESH_TOKEN),
      });
      removeCookie(AUTH_COOKIE_CONFIG.loggedInCookie);
      removeCookie(AUTH_COOKIE_CONFIG.REFRESH_TOKEN);
      removeCookie(AUTH_COOKIE_CONFIG.ACCESS_TOKEN);
      navigate("/login");
      cartFetch();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  const onUserClick = () => {
    setUserDropDown(!userDropdown);
    setVisible(true);
  };

  useEffect(() => {
    cartFetch();
  }, [cartCount]);

  const onClose = () => {
    setVisible(false);
    setLoginVisible(false); // Close login modal if needed
  };

  const onClickLogin = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setLoginVisible(true);
  };

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setVisible(true);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <>
      <div className="flex px-5 lg:px-20 w-full justify-between items-center sticky top-0 bg-white z-50 gap-5 my-0">
        <div className="flex">
          <Link to="/">
            <img
              src={logo}
              alt="logo here"
              className=" w-40  sm:w-40  md:w-64  lg:w-80 -mx-2"
            />{" "}
          </Link>
        </div>
        <div className="flex items-center justify-center m-4 border border-gray-300 sm:w-2/3 w-full">
          <input
            placeholder="Search.."
            className=" w-full outline-none text-xs md:text-base bg- ml-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Link
            to={`/searchPage/${searchTerm}`}
            ref={linkRef}
            onClick={() => window.scrollTo(0, 0)}
          >
            <button className="text-white bg-pink-400 px-6 py-2 outline-none border border-pink-400">
              <CiSearch size={24} className="text-gray-50" />
            </button>
          </Link>
        </div>

        {/* Hamburger menu icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <AiOutlineMenu size={24} />
          </button>
        </div>

        {/* Menu items */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row items-center gap-3 text-sm absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent p-5 md:p-0 shadow-md md:shadow-none`}
        >
          <Link to={"/cart"}>
            <div className="flex flex-col justify-center items-center  relative">
              <span className="hidden md:flex items-center gap-2 font-semibold">
                <span className="absolute text-[10px] -top-2 left-2 w-4 h-4 bg-rose-500 text-white rounded-full flex justify-center items-center">
                  {(cartCount || 0).toString()}
                </span>
                <PiShoppingCartLight size={24} />
                cart
              </span>
            </div>
          </Link>

          <Link to={"/wishlist"}>
            <span className="font-semibold flex items-center gap-2">
              <CiHeart size={24} />
              Wishlist
            </span>
          </Link>
          {isLoggedIn && user ? (
            <div
              className="flex gap-2"
              onMouseEnter={() => setUserDropDown(true)}
              onMouseLeave={() => setUserDropDown(false)}
            >
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  alt=""
                  className="w-10 h-10 rounded-full  "
                />
              ) : (
                <div>
                  {" "}
                  <span className="primary-bg-colors text-white p-2 rounded-full w-9 h-9 text-center">
                    {initials}
                  </span>{" "}
                </div>
              )}
              <button className="relative" onClick={onUserClick}>
                <span className="hidden sm:block text-nowrap">
                  {user?.name}
                </span>
                {userDropdown && (
                  <>
                    {/* <div
                      // ref={modalContent}
                      className="absolute  left-0 md:-left-12 top-10 md:top-8 w-[50px] md:w-[170px]  h-[200px]     bg-white rounded-md shadow-lg flex z-50 transition duration-700 delay-700 ease-in-out"
                    >
                      <div className=" text-gray-700 flex flex-col p-2 transition delay-700 duration-700 ease-in-out overflow-y-auto z-50  w-full">
                        <div>
                          <div
                            className={`py-1 px-2 flex  cursor-pointer w-full justify-between flex-col font-semibold `}
                          >
                            <Link to={`/testUser`}>
                              <span>My Profile</span>
                            </Link>
                            <Link to={`/userProfile`}>
                              <span>Change Password</span>
                            </Link>

                            <button onClick={onClickLogout}>Log Out</button>
                          </div>
                        </div>
                      </div>
                      
                    </div> */}
                    <div className="absolute -right-16 lg:-right-20 top-8 z-[999] mt-2 w-40 md:w-64 bg-gray-100 lg:bg-white rounded-md shadow-lg transition-opacity duration-300 opacity-100">
                      {/* Dropdown arrow */}

                      <div className="absolute -top-5  text-white w-full  justify-center flex b">
                        <RiArrowUpSFill size={40} />
                      </div>

                      {/* Profile dropdown menu */}
                      <div className="py-1 ">
                        <span className="hidden sm:block px-4 py-1 text-lg text-gray-900  w-full  hover:bg-gray-200 lg:hover:bg-gray-100 text-center font-semibold ">
                          {user?.name ? ` ${user.name} ` : `Welcome`}
                        </span>
                        <div className="px-4">
                          <hr />
                          <Link to={PATH.dashboard}>
                            <button className="flex  py-1 text-sm text-gray-700  w-full text-left hover:bg-gray-200 lg:hover:bg-gray-100">
                              <GoChecklist className="mt-1 mr-2 " size={18} />{" "}
                              Your Orders
                            </button>
                          </Link>

                          <Link to={PATH.cart}>
                            <button className="flex py-1 text-sm text-gray-700  w-full text-left hover:bg-gray-200 lg:hover:bg-gray-100">
                              <FaRegUser className="mt-1 mr-2" size={14} />
                              Your profile
                            </button>
                          </Link>

                          <Link to={PATH.wishlist}>
                            <button className="flex py-1 text-sm text-gray-700  w-full text-left hover:bg-gray-200 lg:hover:bg-gray-100">
                              <PiHeartStraight
                                className="mt-1 mr-2"
                                size={18}
                              />
                              WishList
                            </button>
                          </Link>

                          <hr className="my-2 px-4" />
                          <button
                            className="flex  py-1 text-sm text-gray-700 hover:bg-gray-200 lg:hover:bg-gray-100 w-full text-left"
                            onClick={onClickLogout}
                          >
                            <BiLogOut className=" mr-2" size={20} /> Logout
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-col md:flex-row items-center gap-3">
                <ButtonLogin
                  title="LogIn"
                  styles="text-xs md:text-sm font-semibold text-nowrap font-sans py-2 px-2 md:py-3 md:px-4"
                  onClickLogin={onClickLogin}
                />
                <Button
                  title="SignUp"
                  styles="text-xs md:text-sm font-semibold text-nowrap font-sans"
                  onClick={onClick}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <SignUpModal
        visible={visible}
        setVisible={setVisible}
        onClose={onClose}
      />
      <LoginModal
        visible={loginVisible}
        setVisible={setLoginVisible}
        onClose={onClose}
      />
    </>
  );
};

export default Navbar;
