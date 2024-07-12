import React, { useState } from "react";
const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("bank");

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };
  return (
    <>
      <div className="bg-white md:flex">
        
        <div className="w-full md:w-2/3 p-6">
          <h2 className="text-2xl font-bold text-left">Billing Details</h2>
  
          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First name"
                className="border p-2 flex-1 outline-none sm:w-1/2"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                className="border p-2 flex-1 outline-none sm:w-1/2"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Company name (optional)"
              className="border p-2 w-full outline-none"
            />
            <select className="border p-2 w-full" required>
              <option value="">Select Country / Region</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
            </select>
            <input
              type="text"
              placeholder="Street address"
              className="border p-2 w-full outline-none"
              required
            />
            <input
              type="text"
              placeholder="Town / City"
              className="border p-2 w-full outline-none"
              required
            />
            <select className="border p-2 w-full" required>
              <option value="">State / Zone</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
            </select>
            <input
              type="text"
              placeholder="Postcode/zip"
              className="border p-2 w-full outline-none"
            />
            <input
              type="text"
              placeholder="phone"
              className="border p-2 w-full outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border p-2 w-full outline-none"
            />
            <label className="text-4xl font-semibold">
              Additional information
            </label>
            <h3 className="text-xs text-[#404769]">Orders notes (Optional)</h3>
            <textarea
              placeholder="Additional Information (optional)"
              className="border p-2 w-full outline-none"
            />
          </form>
        </div>
        <div className="w-full p-4 md:w-1/3">
          <h2 className="font-semibold text-xl">Your Order</h2>
          <div className="bg-gray-300 px-5">
            <table className="px-5">
              <thead>
                <tr className="">
                  <th className="text-start">Product</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    V Neck Short Sleeve Combed Cotton Men's Coat - L, Blue × 2
                  </td>
                  <td>Rs 26.00</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th className="text-start">Subtotal</th>
                  <td>Rs 26.00</td>
                </tr>
                <tr className="">
                  <th className="text-start">Total</th>
                  <td>Rs 26.00</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="bg-[#eef0f3] rounded-md shadow-md p-4 mt-2">
          <div className="mb-4">
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="paymentMethod"
                value="bank"
                checked={paymentMethod === "bank"}
                onChange={handlePaymentChange}
                className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2">Direct bank transfer</span>
            </label>
            {paymentMethod === "bank" && (
              <p className="ml-6 text-gray-600">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={handlePaymentChange}
                className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2">Cash on delivery</span>
            </label>
          </div>
          <div className="mb-4 text-sm text-gray-700 ">
            <p>Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our{" "} 
            <a href="/privacy-policy" className="text-red-600">
              privacy policy
            </a>
            .</p>
          </div>
          <button className="w-full bg- py-2 rounded-md bg-[#313549] text-white hover:bg-gray-700 transition duration-150 ease-in-out">
            Place order
          </button>
        </div>
        </div>
       
      </div>
    </>
  );
};

export default Payment;
