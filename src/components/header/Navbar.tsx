import React, { useState, MouseEvent } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import Button from "../common/Button/Button";
import SignUpModal from "../popup/SignUpModal";
import LoginModal from "../popup/LoginModal";
import ButtonLogin from "../common/Button/ButtonLogin";

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [loginVisible, setLoginVisible] = useState<boolean>(false);

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

  return (
    <>
      <div className="flex px-5 lg:px-20 w-full justify-between items-center sticky top-0 bg-white z-50">
        {/* logo and search */}
        <div className="flex items-center md:w-7/12  md:gap-4">
          <Link to="/" className="w-24 md:w-40">
            <img
              src={logo}
              alt="logo"
              className="h-12 w-28 md:h-20 md:w-40 -mx-2 "
            />
          </Link>
          <div className="flex items-center primary-color rounded-lg px-2 gap-2 h-8 md:h-12 w-full">
            <CiSearch size={24} />
            <input
              placeholder="Search.."
              className="primary-color w-full outline-none text-xs md:text-base"
            />
          </div>
        </div>
        <div className="justify-between items-center flex gap-3 text-sm ">
          {/* cart wishlist */}
          <Link to={"/cart"}>
            <span className="hidden md:flex items-center gap-2 font-semibold">
              <PiShoppingCartLight size={24} />
              cart
            </span>
          </Link>

          <Link to={"/wishlist"}>
            <span className="font-semibold items-center hidden md:flex gap-2">
              <CiHeart size={24} />
              Wishlist
            </span>
          </Link>
          {/* login and signup */}
          <div className="flex items-center gap-3">
            <ButtonLogin
              title="LogIn "
              styles="text-xs md:text-sm font-semibold text-nowrap font-sans py-2 px-2 md:py-3 md:px-4"
              onClickLogin={onClickLogin}
            />
            <Button
              title="SignUp "
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
