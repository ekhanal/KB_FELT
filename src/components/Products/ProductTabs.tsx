import { useState } from "react";
import Review from "../payment/Review";
import { getValue } from "../../utils/object";

interface Props {
  data: any;
  id: any;
}
const Tabs: React.FC<Props> = ({ data, id }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };
  ``;

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
              {data?.map((item: any, index: number) => (
                <div
                  key={index}
                  className="text-sm text-gray-500 flex gap-2 mt-2 "
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: getValue(item, "description"),
                    }}
                  />
                </div>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <span className="font-semibold ">Product Specification</span>
            <ul>
              {data?.map((item: any, index: number) => (
                <div
                  key={index}
                  className="text-sm text-gray-500 flex gap-2 items-center mt-2"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: getValue(item, "specification"),
                    }}
                  />
                </div>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 2 && <Review reviewData={data} id={id} />}
      </div>
    </div>
  );
};

export default Tabs;
