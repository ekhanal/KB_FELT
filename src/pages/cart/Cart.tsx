import { useState, useEffect, MouseEvent } from "react";
import Button from "../../components/common/Button/Button";
import { getValue } from "../../utils/object";
import AddressModal from "../../components/popup/AddressModal";
import {
  useApplyCoupon,
  useDeleteAddres,
  useDeleteAllCart,
  useDeleteCartItem,
  useEditCart,
  useGetAllAddress,
  useGetAllCart,
} from "../../hooks/cart.hook";
import { showSuccessMessage } from "../../utils/toast";
import { FcFullTrash } from "react-icons/fc";
import ButtonLogin from "../../components/common/Button/ButtonLogin";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditAddressModal from "../../components/popup/EditAddressModal";
import { Link, useNavigate } from "react-router-dom";

interface CartItem {
  product: {
    id: string;
    image: string;
    product_name: string;
    current_price: number;
    previous_price: number;
    prod_slug: string;
  };
  stock: {
    id: string;
    attributes: { value: string }[];
  };
  quantity: number;
  cart_item_id: string;
}

interface CartMap {
  id: string;
  items: CartItem[];
  totalprice: number;
  discount: number;
}

const Cart = () => {
  // const { isLoggedIn } = useAuthContext();
  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [coupon, setCoupon] = useState("");
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const { data: cartItems, refetch: refetchData } = useGetAllCart();
  const { mutateAsync: updateCart } = useEditCart();
  const { mutateAsync: deleteCart } = useDeleteAllCart();
  const { mutateAsync: deleteCartItem } = useDeleteCartItem();
  const { mutateAsync: applyCoupon } = useApplyCoupon();
  const { data: address, refetch: refetchAddress } = useGetAllAddress();
  const { mutateAsync: deleteAddress } = useDeleteAddres();
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems) {
      const initialQuantities = cartItems.reduce(
        (acc: { [key: string]: number }, cartMap: CartMap) => {
          cartMap.items.forEach((item) => {
            acc[item.product.id] = item.quantity || 1;
          });
          return acc;
        },
        {}
      );
      setQuantities(initialQuantities);
    }
  }, [cartItems]);

  const onClose = () => {
    setVisible(false);
  };

  const onCloseEdit = () => {
    setEditVisible(false);
  };
  const incrementQuantity = async (productId: string, stockId: string) => {
    const newQuantity = (quantities[productId] || 0) + 1;
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));

    const body = {
      product_id: productId,
      quantity: newQuantity,
      stock_id: stockId,
    };

    try {
      await updateCart(body);
      showSuccessMessage("Cart updated successfully");
      refetchData();
    } catch (error) {
      console.error("Error updating cart", error);
    }
  };

  const decrementQuantity = async (productId: string, stockId: string) => {
    const newQuantity = Math.max((quantities[productId] || 0) - 1, 0);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));

    const body = {
      product_id: productId,
      quantity: newQuantity,
      stock_id: stockId,
    };

    try {
      await updateCart(body);
      showSuccessMessage("Cart updated successfully");
      refetchData();
    } catch (error) {
      console.error("Error updating cart", error);
    }
  };

  const handleDelete = async (cartItemId: any) => {
    try {
      await deleteCartItem(cartItemId);
      refetchData();
      showSuccessMessage("Item deleted from cart successfully");
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };

  const handleDeleteCart = async () => {
    try {
      await deleteCart({});
      refetchData();
    } catch (error) {
      console.error("Error deleting cart:", error);
    }
  };

  const handleCoupon = async () => {
    try {
      const body = {
        coupon_code: coupon,
      };
      await applyCoupon(body);
      refetchData();
    } catch (error) {
      console.error("Error applying coupon:", error);
    }
  };
  const onClickLogin = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setVisible(true);
  };
  const onEditAddress = (id: any, e: MouseEvent<SVGElement>) => {
    e.stopPropagation();
    setSelectedAddressId(id);
    setEditVisible(true);
  };

  const handleDeleteAddress = async (selectedAddressId: any) => {
    try {
      await deleteAddress(selectedAddressId);
      refetchAddress();
      showSuccessMessage("Deleted Address successfully");
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };
  console.log({ cart: cartItems });
  return (
    <>
      {!cartItems?.length ? (
        <div className="w-full flex justify-center items-center h-96 flex-col gap-5">
          <span className="text-gray-500 text-base">
            There are no items in this cart
          </span>
          <ButtonLogin
            title="Shop Now"
            onClickLogin={() => navigate("/")}
            styles="p-2 px-5"
          />
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center w-full md:w-7/12">
            <h1 className="text-base font-semibold mt-2 px-5 lg:px-20">
              Order Summary
            </h1>
            <div className="h-10 flex items-center mt-2 mr-5">
              <button
                onClick={handleDeleteCart}
                className="text-blue-900 font-semibold text-sm hover:text-rose-500"
              >
                Delete All
              </button>
            </div>
          </div>
          <div className="p-2 flex flex-col md:flex md:flex-row mb-2 justify-between px-5 lg:px-20 w-full mt-3">
            <div className="w-full md:w-7/12">
              {cartItems?.map((cartMap: CartMap) => (
                <div key={cartMap.id}>
                  {cartMap?.items.map((cartItem) => (
                    <div
                      key={cartItem.product.id}
                      className="flex w-full gap-2 bg-white rounded-lg shadow-md p-2 mb-3 overflow-x-auto"
                      style={{ scrollbarWidth: "thin" }}
                    >
                      <Link
                        to={`/productDetailsPage/${cartItem.product.prod_slug}`}
                        className="flex-shrink-0 w-4/12 md:w-2/12 min-w-[80px] md:min-w-[120px]"
                      >
                        <div>
                          <img
                            src={getValue(cartItem, "product.image")}
                            alt="Product"
                            className="h-24 md:h-[132px] rounded-lg object-cover w-full"
                          />
                        </div>
                      </Link>
                      <div className="flex-grow min-w-[200px]">
                        <div className="flex flex-col gap-1">
                          <span className="text-xs text-green-500">Python</span>
                          <span className="font-medium text-sm line-clamp-2">
                            {getValue(cartItem, "product.product_name")}
                          </span>
                          <div className="flex items-center mt-1">
                            <span className="font-semibold text-blue-500 mr-2 text-base">
                              ${getValue(cartItem, "price")}
                            </span>
                            <span className="line-through text-gray-400 text-xs">
                              ${getValue(cartItem, "product.previous_price")}
                            </span>
                            <span className="px-2 py-1 bg-rose-500 text-white rounded-lg ml-2 text-[10px]">
                              20% off
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center justify-between rounded-lg h-7 bg-gray-100 w-18">
                              <button
                                className="px-2 text-xl"
                                onClick={() =>
                                  decrementQuantity(
                                    cartItem.product.id,
                                    cartItem.stock.id
                                  )
                                }
                              >
                                -
                              </button>
                              <span className="px-2">
                                {quantities[cartItem.product.id]}
                              </span>
                              <button
                                className="px-2"
                                onClick={() =>
                                  incrementQuantity(
                                    cartItem.product.id,
                                    cartItem.stock.id
                                  )
                                }
                              >
                                +
                              </button>
                            </div>
                            <div className="flex gap-2">
                              {cartItem?.stock?.attributes?.map(
                                (attr, index) => (
                                  <div key={index}>
                                    <div className="text-xs px-2 py-1 font-medium rounded-lg cursor-pointer secondary-bg-colors text-[#6C68F0] border border-blue-800 text-nowrap">
                                      {getValue(attr, "value")}
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                            <button
                              onClick={() =>
                                handleDelete(cartItem.cart_item_id)
                              }
                            >
                              <FcFullTrash size={24} />
                            </button>
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
                          <span className="font-semibold text-blue-500">
                            Free
                          </span>
                          <span className="line-through text-xs text-rose-500 mt-1">
                            $100
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
              <div className="my-5 h-full flex flex-col w-96">
                <h2 className="text-sm font-semibold">
                  Select Delivery Address
                </h2>
                {address?.map((item: any, index: any) => (
                  <div
                    className="bg-white rounded-lg py-4 px-3 my-2 flex flex-col gap-1 shadow-lg"
                    key={index}
                  >
                    <div className="flex justify-between">
                      <div className="flex gap-2 items-center">
                        <span className="font-semibold text-base">
                          {getValue(item, "first_name")}
                        </span>
                        <span className="font-semibold text-base">
                          {getValue(item, "last_name")}
                        </span>
                        <span className="primary-bg-colors px-2 py-1 text-white rounded-lg text-xs">
                          {getValue(item, "company_name")}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center text-sm text-blue-500 font-semibold  ">
                        <FaEdit
                          className="text-sm text-blue-500"
                          onClick={(e) => onEditAddress(item.id, e)}
                        />
                        <div className="flex gap-2 items-center text-sm text-blue-500 font-semibold  ">
                          <FaTrash
                            className="text-sm text-red-500 cursor-pointer"
                            onClick={() => handleDeleteAddress(item.id)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <span className="text-sm text-gray-500">
                        {getValue(item, "street_address")},
                      </span>

                      <span className="text-sm text-gray-500">
                        {getValue(item, "town_city")}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-sm text-gray-500">
                        {getValue(item, "state")},
                      </span>
                      <span className="text-sm text-gray-500">
                        {getValue(item, "country_region")}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {getValue(item, "phone")}
                    </span>
                  </div>
                ))}
                <div className="my-5 flex w-full justify-center">
                  {/* <ButtonLogin
                title="Add New Address"
                styles="w-2/2 flex items-center justify-center gap-2 py-3 px-4"
                FaPlus={true}
                onClickLogin={onClickLogin}
              /> */}
                  <button
                    className="text-color font-semibold"
                    onClick={onClickLogin}
                  >
                    + Add New Address
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden p-3 gap-2 px-5">
                <div className="flex justify-between text-sm text-gray-900 font-semibold">
                  <span>Price ({cartItems?.[0]?.items.length} items)</span>
                  <span>${cartItems?.[0]?.totalprice}</span>
                </div>
                <div className="flex justify-between text-rose-500 text-xs">
                  <span>Discount Price</span>
                  <span>${cartItems?.[0]?.discount}</span>
                </div>
                <div className="flex justify-between text-base text-black my-2 py-2 font-bold border-y border-gray-400">
                  <span>Total Amount</span>
                  <span>${cartItems?.[0]?.totalprice}</span>
                </div>
              </div>
              <div className="flex gap-3 items-center mt-5">
                <input
                  className="w-3/4  h-10 px-2 border  rounded-lg bg-gray-100"
                  placeholder="Enter coupon code"
                  type="text"
                  name="coupon"
                  id="coupon"
                  onChange={(event) => setCoupon(event.target.value)}
                />
                <ButtonLogin
                  onClickLogin={handleCoupon}
                  title="Apply"
                  styles="w-1/4 h-10  items-center text-sm  gap-2  px-4"
                />
              </div>
              <a href="/paymentmethod">
                <Button
                  title={`Total Price $${cartItems?.[0]?.totalprice} checkout`}
                  styles="my-5"
                />
              </a>
            </div>
          </div>
        </>
      )}
      <AddressModal
        title="Add New Address"
        visible={visible}
        setVisible={setVisible}
        onClose={onClose}
      />
      <EditAddressModal
        title="Edit Address"
        visible={editVisible}
        setVisible={setEditVisible}
        onClose={onCloseEdit}
        addressId={selectedAddressId}
      />
    </>
  );
};

export default Cart;
