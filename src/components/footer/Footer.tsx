import { CiMail } from "react-icons/ci";
import logo from "./../../assets/images/kb fent logo.svg";
import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="bg-white py-20">
        <div className="flex flex-col md:flex-row justify-between py-10 bg-gray-100 px-5 md:px-10 lg:px-20 gap-5 md:gap-10">
          <div className="flex flex-col gap-2 text-sm">
            <span className="font-semibold text-sm md:text-lg">
              We're Always Here To Help
            </span>
            <span className="text-xs">
              Reach out to us through any of these support channels
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <div className="text-sm flex flex-col md:flex-row items-center gap-3">
              <IoIosInformationCircleOutline size={30} />
              <div className="text-sm flex flex-col">
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
                  Sales.kb-felt.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer-color text-black px-5 md:px-10 lg:px-20 py-10 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 text-sm">
            <div>
              <img src={logo} alt="logo" className="h-20 w-40 -mx-5" />
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4 text-black hover:text-[#3a8c93]">
                Contact Info
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="/aboutus" className="text-black">
                    1800-2572-100
                  </a>
                </li>
                <li>
                  <a href="/aboutus" className="text-black">
                    sales@kb-felt.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4 text-black hover:text-[#3a8c93]">
                About
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="/aboutus" className="text-black">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/aboutus" className="text-black">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/aboutus" className="text-black">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/aboutus" className="text-black">
                    Heading
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4 text-black hover:text-[#3a8c93]">
                Help
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="/aboutus" className="text-black">
                    Payments
                  </a>
                </li>
                <li>
                  <a href="/aboutus" className="text-black">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="/aboutus" className="text-black">
                    Cancellation & Returns
                  </a>
                </li>
                <li>
                  <a href="/aboutus" className="text-black">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/aboutus" className="text-black">
                    Heading
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4 text-black hover:text-[#3a8c93]">
                Policy
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="/aboutus" className="text-black">
                    Payments
                  </a>
                </li>
                <li>
                  <a href="/aboutus" className="text-black">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="/aboutus" className="text-black">
                    Cancellation & Returns
                  </a>
                </li>
                <li>
                  <a href="/aboutus" className="text-black">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/aboutus" className="text-black">
                    Heading
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-lg font-medium mb-4 text-black">
                Stay In Touch
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="/aboutus" className="text-black text-xs">
                    Stay in touch to get special offers, free giveaways, and
                    once in a lifetime deals
                  </a>
                </li>
                <li className="flex items-center gap-2 border-2 border-gray-300 rounded-lg h-10 p-2">
                  <CiMail className="text-black" size={24} />
                  <input
                    placeholder="Enter your Email ID"
                    className="bg-transparent outline-none text-black w-full"
                  />
                </li>
                <li>
                  <button className="py-2 px-3 bg-pink-400 text-white rounded-full text-base mt-2 font-semibold focus:outline-none">
                    Subscribe
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-5 border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-black text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} kbfeltnwoolcraft.com
            </p>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://www.facebook.com/kbfeltnwool"
                className="text-black hover:text-pink-400 bg-white p-2 rounded-lg"
              >
                <FaFacebook />
              </a>
              <a href="https://www.facebook.com/kbfeltnwool" className="text-black bg-white p-2 rounded-lg">
                <BsTwitterX />
              </a>
              <a
                href="https://www.facebook.com/kbfeltnwool"
                className="text-black hover:text-pink-400 bg-white p-2 rounded-lg"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/kbfeltnwool"
                className="text-black hover:text-pink-400 bg-white p-2 rounded-lg"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
