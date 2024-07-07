import { CiMail } from "react-icons/ci";
import logo from "./../../assets/images/logo.png";
import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div className="bg-white py-20">
        <div className="flex justify-between py-10 bg-gray-100 px-20">
          <div className="flex flex-col gap-2  text-sm ">
            <span className="font-semibold text-sm md:text-lg">
              We're Always Here To Help
            </span>
            <span className="text-xs">
              Reach out to us through any of these support channels
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-20">
            <div className="text-sm flex flex-col md:flex-row items-center gap-3 ">
              <IoIosInformationCircleOutline size={30} />

              <div className="text-sm flex flex-col ">
                <span className="text-xs md:text-base">
                  Customer Care Hotline
                </span>
                <span className="text-xs md:text-base font-semibold">
                  +971 55 681 9609
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <MdOutlineMail size={30} />

              <div className="flex flex-col">
                <span className="text-xs md:text-base"> Email Support</span>

                <span className="text-xs md:text-base font-semibold">
                  Sales.pokharauae.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer-color text-black px-5 md:px-20  py-10 md:py-20">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-5 text-sm">
            <div>
              <img src={logo} alt="logo" className="h-20 w-40 -mx-5" />
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4 text-black hover:text-green-500">
                Contact Info
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="/aboutus" className="text-black ">
                    1800-2572-100
                  </a>
                </li>

                <li>
                  <a href="/aboutus" className="text-black ">
                    sales@pokhara.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4 text-black hover:text-green-500">
                About
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="/aboutus" className="text-black ">
                    Contact Us
                  </a>
                </li>

                <li>
                  <a href="/aboutus" className="text-black ">
                    About US
                  </a>
                </li>
                <li>
                  <a href="/aboutus" className="text-black ">
                    carrers{" "}
                  </a>
                </li>
                <li>
                  <a href="/aboutus" className="text-black ">
                    Heading
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4 text-black hover:text-green-500">
                Help{" "}
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="/aboutus" className="text-black ">
                    Payments{" "}
                  </a>
                </li>

                <li>
                  <a href="/aboutus" className="text-black ">
                    Shipping{" "}
                  </a>
                </li>
                <li>
                  <a href="/aboutus" className="text-black ">
                    Cancellation & Returns
                  </a>
                </li>
                <li>
                  <a href="/aboutus" className="text-black ">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/aboutus" className="text-black ">
                    Heading
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4 text-black hover:text-green-500">
                Policy
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="/aboutus" className="text-black text-xs ">
                    Payments{" "}
                  </a>
                </li>

                <li>
                  <a href="/aboutus" className="text-black text-xs">
                    Shipping{" "}
                  </a>
                </li>
                <li>
                  <a href="/aboutus" className="text-black text-xs">
                    Cancellation & Returns
                  </a>
                </li>
                <li>
                  <a href="/aboutus" className="text-black text-xs">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/aboutus" className="text-black text-xs">
                    Heading
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2">
              <h4 className="text-lg font-medium mb-4 text-black">
                Stay In Touch
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="/aboutus" className="text-black text-xs">
                    Stay in touch to get special offers, free giveaways and once
                    in a lifetime deals
                  </a>
                </li>
                <li className="flex items-center gap-2 border-white border-2 rounded-lg h-10   p-2">
                  <CiMail className="font-bold" size={24} />
                  <input
                    placeholder="Enter your Email ID"
                    className="footer-color outline-none"
                  />
                </li>
                <li>
                  <button className="py-2 px-3 bg-blue-900 text-white rounded-full text-base mt-2 font-semibold">
                    Subscribe
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-5 border-t border-white pt-4 flex justify-between items-center">
            <p className="text-black text-sm">
              &copy; {new Date().getFullYear()} Pokhara Motors All rights
              reserved.
            </p>
            <div>
              <div className="flex space-x-4 ">
                <a
                  href="/"
                  className="text-black hover:text-blue-500 bg-white p-2 rounded-lg"
                >
                  <FaFacebook />
                </a>
                <a href="/" className="text-black  bg-white p-2 rounded-lg">
                  <BsTwitterX />
                </a>
                <a
                  href="/"
                  className="text-black hover:text-rose-500 bg-white p-2 rounded-lg"
                >
                  <FaInstagram />
                </a>
                <a
                  href="/"
                  className="text-black hover:text-blue-500 bg-white p-2 rounded-lg"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
