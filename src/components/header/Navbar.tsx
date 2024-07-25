import React, { useState, MouseEvent } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai"; // Import only the hamburger icon
import logo from "./../../assets/images/kb fent logo.svg";
import Button from "../common/Button/Button";
import SignUpModal from "../popup/SignUpModal";
import LoginModal from "../popup/LoginModal";
import ButtonLogin from "../common/Button/ButtonLogin";

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [loginVisible, setLoginVisible] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // State for menu visibility

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
      <div className="flex px-5 lg:px-20 w-full justify-between items-center sticky top-0 bg-white z-50 gap-5">
        <div className="flex">
          <img
            src={logo}
            alt="logo here"
            className="h-20 w-40 sm:h-24 sm:w-48 md:h-32 md:w-64 lg:h-40 lg:w-96 -mx-2"
          />
        </div>
        <div className="flex items-center justify-center m-4 border border-gray-300 sm:w-2/3 w-full">
          <input
            placeholder="search here.."
            className="focus:outline-none px-2 py-2 w-full"
          />
          <button className="text-white bg-pink-400 px-6 py-2 outline-none border border-pink-400">
            <CiSearch size={24} className="text-gray-300" />
          </button>
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
            <span className="flex items-center gap-2 font-semibold">
              <PiShoppingCartLight size={24} />
              Cart
            </span>
          </Link>

          <Link to={"/wishlist"}>
            <span className="font-semibold flex items-center gap-2">
              <CiHeart size={24} />
              Wishlist
            </span>
          </Link>

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
