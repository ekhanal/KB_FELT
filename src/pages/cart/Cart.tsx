import { useState } from "react";
import { motorsData } from "../../components/data/Data";
import Button from "../../components/common/Button/Button";
import { peopleData } from "../../components/data/Data";
import { getValue } from "../../utils/object";
import { FaEdit } from "react-icons/fa";
import ButtonLogin from "../../components/common/Button/ButtonLogin";
import { Link } from "react-router-dom";
import AddressModal from "../../components/popup/AddressModal";
import { FcFullTrash } from "react-icons/fc";

const Cart = () => {
  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [quantity, setQuantity] = useState(0); // Initial quantity value

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const onClose = () => {
    setVisible(false);
    setEditVisible(false);
  };
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setVisible(true);
  };

  const onEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setEditVisible(true);
  };

  return (
    <>
      <h1 className="text-base font-semibold mt-2 px-5 md:px-20">
        Order Summary
      </h1>
      <div className="p-2 flex flex-col md:flex md:flex-row  mb-2 justify-between px-5 md:px-20 w-full  mt-3 ">
        <div className=" w-full  md:w-7/12  ">
          {/* Product Image */}
          {motorsData.slice(0, 3).map((item) => (
            <>
              <div
                className="flex w-full gap-2 bg-white rounded-lg shadow-md p-2 mb-3 overflow-x-auto"
                key={item.id}
                style={{
                  scrollbarWidth: "thin",
                }}
              >
                {/* Product Image */}
                <div className="flex-shrink-0 w-4/12 md:w-2/12 min-w-[80px] md:min-w-[120px]">
                  <img
                    src={getValue(item, "image")}
                    alt="Product"
                    className="h-24 md:h-32 rounded-lg object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-grow min-w-[200px]">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-green-500">Python</span>
                    <span className="font-semibold text-base">
                      {getValue(item, "name")}
                    </span>

                    {/* Prices and Discounts */}
                    <div className="flex items-center mt-1">
                      <span className="font-bold text-blue-500 mr-2 text-lg">
                        {getValue(item, "price")}
                      </span>
                      <span className="line-through text-gray-400 text-xs">
                        {getValue(item, "discountPrice")}
                      </span>
                      <span className="px-2 py-1 bg-rose-500 text-white rounded-lg ml-2 text-[10px]">
                        20% off
                      </span>
                    </div>

                    {/* Size, Quantity, and Offer Details */}
                    <div className="flex items-center text-sm gap-5 mt-1">
                      <div className="font-bold">
                        <span className="font-medium">Size</span>{" "}
                        {getValue(item, "size")}
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center justify-between rounded-lg h-7 bg-gray-100 w-18 ">
                          <button className="px-2" onClick={incrementQuantity}>
                            +
                          </button>
                          <span className="px-2">{quantity}</span>
                          <button
                            className="px-2 text-xl"
                            onClick={decrementQuantity}
                          >
                            -
                          </button>
                        </div>
                      </div>
                      <div>
                        <FcFullTrash className="text-rose-500" size={20} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Details */}
                <div className="flex-shrink-0  min-w-[150px] flex-nowrap flex gap-2 mr-3">
                  <div>
                    <span className=" text-xs text-nowrap">
                      Delivery in 2 days, Sun
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-blue-500">Free</span>
                    <span className=" line-through text-xs text-rose-500 mt-1">
                      $100
                    </span>
                  </div>
                </div>
              </div>
            </>
          ))}
          {/* select address */}
          <div className="my-5  flex flex-col ">
            <h2 className="text-base font-semibold">Select Delivery Address</h2>
            {peopleData.map((item, index) => (
              <div
                className="bg-white rounded-lg p-5 my-2 flex flex-col gap-1 px-8"
                key={index}
              >
                <>
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-5 items-center ">
                        <span className="font-semibold text-base">
                          {getValue(item, "name")}
                        </span>
                        <span className=" bg-blue-900 px-2 py-1 text-white rounded-lg text-xs">
                          {getValue(item, "site")}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {getValue(item, "street")}
                      </span>
                      <span className="text-sm text-gray-500">
                        {getValue(item, "address")}
                      </span>
                      <span className="text-sm text-gray-500">
                        {getValue(item, "phone")}
                      </span>
                    </div>
                    <div className="flex gap-2 items-center text-sm text-blue-500 font-semibold  ">
                      <button onClick={onEdit}>
                        <FaEdit className="text-sm text-blue-500" />
                      </button>
                    </div>
                  </div>
                </>
              </div>
            ))}
            <div className="my-5 flex w-full justify-center">
              <ButtonLogin
                title="Add New Address"
                styles="w-full md:w-1/2 flex items-center justify-center gap-2 py-3 px-4"
                FaPlus={true}
                onClickLogin={onClick}
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden  p-3  gap-2 px-5   ">
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
            <span className="my-2 text-sm text-blue-900 font-semibold ">
              You will save $1,00,00 on this order
            </span>
          </div>
          <Link to={"/paymentmethod"}>
            <Button title="Total Price $10,00,00 Checkout >" styles="my-5 " />
          </Link>
        </div>
      </div>
      <AddressModal
        title="Add New Address"
        visible={visible}
        setVisible={setVisible}
        onClose={onClose}
      />

      <AddressModal
        title="Edit Address"
        visible={editVisible}
        setVisible={setEditVisible}
        onClose={onClose}
      />
    </>
  );
};

export default Cart;
