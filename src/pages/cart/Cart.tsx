import { useState } from "react";
import { motorsData } from "../../components/data/Data";
import Button from "../../components/common/Button/Button";
import { getValue } from "../../utils/object";
import { Link } from "react-router-dom";
import AddressModal from "../../components/popup/AddressModal";
import { FcFullTrash } from "react-icons/fc";
import { IoMdPricetag } from "react-icons/io";

const Cart = () => {
  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [quantity, setQuantity] = useState(0);

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

  const onClick = (e) => {
    e.stopPropagation();
    setVisible(true);
  };

  const onEdit = (e) => {
    e.stopPropagation();
    setEditVisible(true);
  };

  return (
    <>
      <h1 className="text-base font-semibold mt-2 px-5 md:px-20 text-pink-400">
        SHOPPING CART
      </h1>
      <div className="p-2 flex flex-col md:flex-row mb-2 justify-between px-5 md:px-20 w-full mt-3">
        <div className="w-full md:w-7/12">
          {motorsData.slice(0, 3).map((item) => (
            <div
              className="flex w-full gap-2 bg-white rounded-lg shadow-md p-2 mb-3 overflow-x-auto"
              key={item.id}
              style={{
                scrollbarWidth: "thin",
              }}
            >
              <div className="flex-shrink-0 w-4/12 md:w-2/12 min-w-[80px] md:min-w-[120px]">
                <img
                  src={getValue(item, "image")}
                  alt="Product"
                  className="h-24 md:h-32 rounded-lg object-cover"
                />
              </div>
              <div className="flex-grow min-w-[200px]">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-base">
                    {getValue(item, "name")}
                  </span>
                  <div className="flex items-center mt-1">
                    <span className="font-bold text-[#22787f] mr-2 text-lg">
                      {getValue(item, "price")}
                    </span>
                    <span className="line-through text-gray-400 text-xs">
                      {getValue(item, "discountPrice")}
                    </span>
                    <span className="px-2 py-1 bg-pink-400 text-white rounded-lg ml-2 text-[10px]">
                      20% off
                    </span>
                  </div>
                  <div className="flex items-center text-sm gap-5 mt-1">
                    <div className="font-bold">
                      <span className="font-medium">Size</span>{" "}
                      {getValue(item, "size")}
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center justify-between rounded-lg h-7 bg-gray-100 w-18">
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
                      <FcFullTrash className="text-pink-400" size={20} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 min-w-[150px] flex-nowrap flex gap-2 mr-3">
                <div>
                  <span className="text-xs text-nowrap">
                    Delivery in 2 days, Sun
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold text-[#22787f]">Free</span>
                  <span className="line-through text-xs text-pink-400 mt-1">
                    $100
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-4/12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-3 gap-2 px-5">
            <div className="flex justify-between text-sm text-[#22787f] font-semibold">
              <span className="">Price (6 items)</span>
              <span>$1,00,00</span>
            </div>
            <div className="flex justify-between text-pink-400 text-xs">
              <span className="">Discount Price</span>
              <span>$1,00,00</span>
            </div>
            <div className="flex justify-between text-xs text-[#22787f]">
              <span>Buy more 7 save more</span>
              <span>$1,00,00</span>
            </div>
            <div className="flex justify-between text-xs text-[#22787f]">
              <span>Delivery Charges</span>
              <span>$1,00,00</span>
            </div>
            <div className="flex justify-between text-base text-[#22787f] my-2 py-2 font-bold border-y border-gray-400">
              <span>Total Amount</span>
              <span>$10,00,00</span>
            </div>
            <span className="my-2 text-sm text-[#22787f] font-semibold">
              You will save $1,00,00 on this order
            </span>
            {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-2 my-4">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <IoMdPricetag className="text-[#22787f] text-2xl" />
                <input
                  type="text"
                  placeholder="Promo code"
                  className="border px-2 py-1 outline-none w-full sm:w-56 md:w-72"
                />
              </div>
              <button className="bg-pink-400 rounded-full px-4 py-2 text-white w-full sm:w-auto">
                Add
              </button>
            </div> */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 my-4 w-full">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <IoMdPricetag className="text-[#22787f] text-2xl" />
                <input
                  type="text"
                  placeholder="Promo code"
                  className="border px-2 py-1 outline-none w-full sm:w-40 md:w-56"
                />
              </div>
              <button className="bg-pink-400 rounded-full px-4 py-2 text-white w-full sm:w-auto">
                Add
              </button>
            </div>
          </div>
          <Link to="/Payment">
            <Button
              title="Total Price $10,00,00 Checkout >"
              styles="my-5 w-full md:w-auto"
            />
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
