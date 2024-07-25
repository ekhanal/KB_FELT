
import React, { useState } from "react";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("bank");
  const [isCouponFormVisible, setIsCouponFormVisible] =
    useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<string>("");

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    let hasError = false;
    let errorMessage = "";

    const requiredFields = [
      "firstName",
      "lastName",
      "country",
      "streetAddress",
      "city",
      "state",
      "email",
    ];

    requiredFields.forEach((field) => {
      if (!formData.get(field)) {
        hasError = true;
        errorMessage = "All required fields must be filled up.";
      }
    });

    if (hasError) {
      setFormErrors(errorMessage);
    } else {
      setFormErrors("");
      // Proceed with form submission
      console.log("Form submitted successfully");
    }
  };

  return (
    <>
      <div className="bg-white px-4 py-6 md:py-12 md:px-8 lg:px-16">
        {/* Coupon Section */}
        <div className="w-full p-6 border-b md:border-none">
          <div className="flex items-center mb-4">
            <h2 className="text-sm pr-4">Have a coupon?</h2>
            <div
              className="text-red-500 cursor-pointer"
              onClick={() => setIsCouponFormVisible(!isCouponFormVisible)}
            >
              Click here to enter your code
            </div>
          </div>
          {isCouponFormVisible && (
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="If you have a coupon code, please apply it below."
                className="border p-2 w-full md:w-3/4 outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 rounded-md"
              >
                Apply coupon
              </button>
            </form>
          )}
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-6">
          {/* Billing Details Section */}
          <div className="w-full lg:w-2/3 p-6">
            <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {formErrors && (
                <div className="text-red-500 mb-4">{formErrors}</div>
              )}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="border p-2 flex-1 outline-none"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="border p-2 flex-1 outline-none"
                  required
                />
              </div>
              <input
                type="text"
                name="companyName"
                placeholder="Company name (optional)"
                className="border p-2 w-full outline-none"
              />
              <select name="country" className="border p-2 w-full" required>
                <option value="">Select Country / Region</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
              </select>
              <input
                type="text"
                name="streetAddress"
                placeholder="Street address"
                className="border p-2 w-full outline-none"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="Town / City"
                className="border p-2 w-full outline-none"
                required
              />
              <select name="state" className="border p-2 w-full" required>
                <option value="">State / Zone</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
              </select>
              <input
                type="text"
                name="postcode"
                placeholder="Postcode/zip"
                className="border p-2 w-full outline-none"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="border p-2 w-full outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="border p-2 w-full outline-none"
                required
              />
              <label className="text-xl font-semibold">
                Additional information
              </label>
              <h3 className="text-xs text-[#404769]">Order notes (Optional)</h3>
              <textarea
                name="orderNotes"
                placeholder="Additional Information (optional)"
                className="border p-2 w-full outline-none"
              />
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="w-full lg:w-1/3 p-6 lg:p-6 lg:pt-0">
            <h2 className="font-semibold text-xl mb-4">Your Order</h2>
            <div className="bg-gray-100 p-4 rounded-md shadow-md">
              <table className="w-full mb-4">
                <thead>
                  <tr>
                    <th className="text-left">Product</th>
                    <th className="text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pr-4">
                      Wool accents that access you to stay a while
                    </td>
                    <td className="text-right">Rs 26.00</td>
                  </tr>
                  <tr>
                    <td className="pr-4">
                      Wool accents that access you to stay a while
                    </td>
                    <td className="text-right">Rs 12.00</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th className="text-left">Subtotal</th>
                    <td className="text-right">Rs 38.00</td>
                  </tr>
                  <tr>
                    <th className="text-left">Total</th>
                    <td className="text-right">Rs 38.00</td>
                  </tr>
                </tfoot>
              </table>
              <div className="bg-[#eef0f3] rounded-md p-4 mb-4">
                <div className="mb-4">
                  <label className="flex items-center">
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
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="flex items-center">
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
                <div className="text-sm text-gray-700 mb-4">
                  <p>
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our{" "}
                    <a href="/privacy-policy" className="text-red-600">
                      privacy policy
                    </a>
                    .
                  </p>
                </div>
                <button
                  type="button"
                  className="w-full py-2 rounded-md bg-[#313549] text-white hover:bg-gray-700 transition duration-150 ease-in-out"
                  onClick={() => {
                    const form = document.querySelector("form");
                    if (form) form.requestSubmit();
                  }}
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
