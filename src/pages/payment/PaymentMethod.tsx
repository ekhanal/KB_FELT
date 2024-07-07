import { useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
import { CiBank, CiDollar } from "react-icons/ci";
import DebitCreditCard from "../../components/payment/DebitCreditCard";
import Wallet from "../../components/payment/Wallet";
import NetBanking from "../../components/payment/NetBanking";
import CashOnDelivery from "../../components/payment/CashOnDelivery";

const PaymentMethod = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };
  return (
    <>
      <h2 className="text-xl font-semibold px-5 lg:px-20 my-10">
        Select Payment Method
      </h2>
      <div className="px-5 md:px-20 flex flex-col-reverse md:flex-row my-5 gap-5 ">
        <div className="w-full md:w-4/6 flex-col flex md:flex-row gap-5    ">
          <div className="w-full md:w-4/12 bg-white rounded-lg  ">
            <div className="flex md:flex-col  border-gray-200 w-full   p-2  overflow-x-scroll] mt-3">
              <button
                className={`p-2 md:py-2 md:px-4 border-b-2 transition duration-300 w-full flex rounded-lg items-center  gap-2 text-nowrap text-sm md:text-base ${
                  activeTab === 0
                    ? "bg-blue-900 text-white"
                    : "border-transparent text-gray-500 hover:text-white hover:bg-blue-900"
                }`}
                onClick={() => handleTabClick(0)}
              >
                <FaCreditCard />
                Debit/Credit Card
              </button>
              <button
                className={`p-2 hidden md:py-2 md:px-4 border-b-2 transition duration-300 w-full  rounded-lg items-center gap-2 text-sm md:text-base ${
                  activeTab === 1
                    ? "bg-blue-900 text-white"
                    : "border-transparent text-gray-500 hover:text-white hover:bg-blue-900"
                }`}
                onClick={() => handleTabClick(1)}
              >
                <IoWalletOutline />
                Wallet
              </button>
              <button
                className={`p-2 hidden md:py-2 md:px-4 border-b-2 transition duration-300 w-full  rounded-lg items-center gap-2  text-sm md:text-sm ${
                  activeTab === 2
                    ? "bg-blue-900 text-white"
                    : "border-transparent text-gray-500 hover:text-white hover:bg-blue-900"
                }`}
                onClick={() => handleTabClick(2)}
              >
                <IoMdArrowDropright />
                UPI
              </button>

              <button
                className={`p-2 md:py-2 md:px-4 border-b-2 transition duration-300 w-full flex rounded-lg items-center gap-2 text-sm md:text-base ${
                  activeTab === 3
                    ? "bg-blue-900 text-white"
                    : "border-transparent text-gray-500 hover:text-white hover:bg-blue-900"
                }`}
                onClick={() => handleTabClick(3)}
              >
                <CiBank />
                Net banking
              </button>

              <button
                className={`p-2 md:py-2 md:px-4 text-sm md:text-base border-b-2 transition duration-300w-full flex rounded-lg items-center gap-2 ${
                  activeTab === 4
                    ? "bg-blue-900 text-white"
                    : "border-transparent text-gray-500 hover:text-white hover:bg-blue-900"
                }`}
                onClick={() => handleTabClick(4)}
              >
                <CiDollar />
                Cash On Delivery
              </button>
            </div>
          </div>

          <div className="p-4 w-full md:w-9/12 bg-white rounded-lg  md:mt-0 ">
            {activeTab === 0 && <DebitCreditCard />}
            {activeTab === 1 && <Wallet />}
            {activeTab === 2 && <div>Content for Tab 3</div>}
            {activeTab === 3 && <NetBanking />}{" "}
            {activeTab === 4 && <CashOnDelivery />}
          </div>
        </div>
        <div className=" w-full md:w-2/6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden  p-3  gap-2 px-5   ">
            <h2 className="text-sm font-semibold mb-2">Order Summary </h2>
            <div className="flex justify-between text-sm text-gray-900 font-semibold">
              <span className="">Price (6 items)</span>
              <span>$1,00,00</span>
            </div>
            <div className="flex justify-between text-rose-500 text-xs">
              <span className="">Discount Price</span>
              <span>$1,00,00</span>
            </div>{" "}
            <div className="flex justify-between text-xs text-gray-500">
              <span>Buy more 7 save more</span>
              <span>$1,00,00</span>
            </div>{" "}
            <div className="flex justify-between text-xs text-gray-500">
              <span>Delivery Charges</span>
              <span>$1,00,00</span>
            </div>
            <div className="flex justify-between text-base text-black my-2 py-2 font-bold border-y  border-gray-400">
              <span>Total Amount</span>
              <span>$10,00,00</span>
            </div>
            <span className="my-2 text-xs text-blue-900 font-semibold ">
              You will save $1,00,00 on this order
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
