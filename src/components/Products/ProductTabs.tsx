import { useState } from "react";
import { motorsData } from "../data/Data";
import { GoDotFill } from "react-icons/go";
import Review from "../payment/Review";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full bg-white my-5 rounded-lg">
      <div className="flex border-b border-gray-200 w-full justify-around">
        <button
          className={`py-2 px-4 border-b-2 transition duration-300 text-sm ${
            activeTab === 0
              ? "border-blue-500 text-blue-500"
              : "border-transparent text-gray-500 hover:text-blue-500"
          }`}
          onClick={() => handleTabClick(0)}
        >
          Product Details
        </button>
        <button
          className={`py-2 px-4 border-b-2 transition duration-300 text-sm ${
            activeTab === 1
              ? "border-blue-500 text-blue-500"
              : "border-transparent text-gray-500 hover:text-blue-500"
          }`}
          onClick={() => handleTabClick(1)}
        >
          Specification{" "}
        </button>
        <button
          className={`py-2 px-4 border-b-2 transition duration-300 text-sm ${
            activeTab === 2
              ? "border-blue-500 text-blue-500"
              : "border-transparent text-gray-500 hover:text-blue-500"
          }`}
          onClick={() => handleTabClick(2)}
        >
          Review
        </button>
      </div>
      <div className="p-4">
        {activeTab === 0 && (
          <div>
            <span className="font-semibold">Product Details</span>
            <ul>
              {motorsData.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-500 flex gap-2 items-center"
                >
                  <GoDotFill size={12} />
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            {" "}
            <h2 className="text-xl font-bold mb-4">Motors Parts List</h2>
            <ul className="">
              {motorsData.map((motor) => (
                <li key={motor.id} className="mb-4">
                  <h3 className="font-bold">{motor.name}</h3>
                  <p className="text-gray-600 mb-2">{motor.description}</p>
                  <div className=" gap-2">
                    {motor.specifications.map((spec, index) => (
                      <div key={index} className="mb-2">
                        <span className="font-semibold">{spec.label}:</span>{" "}
                        {spec.value}
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 2 && <Review />}
      </div>
    </div>
  );
};

export default Tabs;
