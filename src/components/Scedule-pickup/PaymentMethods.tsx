/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

export default function PaymentMethods() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null); // e.g., 'google-pay', 'card-4657', 'cash-money'

  const handlePaymentMethodSelect = (methodId) => {
    setSelectedPaymentMethod(methodId);
  };

  const handleGoBack = () => {
    console.log("Navigating back...");
    // Implement your actual navigation logic here
  };

  const handleAddDebitCard = () => {
    console.log("Opening Add Debit Card screen...");
    // Implement navigation to a new screen for adding a card
  };

  const handleMakePayment = () => {
    if (selectedPaymentMethod) {
      console.log("Making payment with:", selectedPaymentMethod);
      alert(`Payment initiated with ${selectedPaymentMethod}!`);
      // Implement your payment processing logic here
    } else {
      alert("Please select a payment method.");
    }
  };

  return (
    <>
      <div className="flex items-center pl-48 pt-10">
        {/* Header */}
        <div className="flex items-center border-gray-200 p-4">
          {/* Back arrow icon */}
          <Link to="/dashboard/booking-summary">
            <button>
              <MoveLeft />
            </button>
          </Link>

          <h1 className="pl-48 text-xl font-semibold text-gray-900">
            PAYMENT METHODS
          </h1>
        </div>
      </div>

      <div className="mx-auto flex min-h-screen w-2/3 flex-col bg-white font-sans">
        {/* Main Content Area */}
        <div className="grow space-y-4 p-6">
          <p className="mb-4 text-base text-gray-600">
            Select the payment method you want to use
          </p>

          {/* Add Debit Card Section */}
          <div
            className="flex w-full cursor-pointer items-center justify-center space-x-2 rounded-lg border-2 border-dashed border-gray-300 p-4 font-semibold text-blue-600 transition-all duration-200 hover:border-blue-400 hover:text-blue-700"
            onClick={handleAddDebitCard}
          >
            <span className="text-2xl">+</span>
            <span>Add Debit Card</span>
          </div>

          {/* Payment Methods List */}
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            {/* Google Pay */}
            <label
              htmlFor="googlePay"
              className={`
              flex cursor-pointer items-center justify-between border-b border-gray-100 p-4
              ${selectedPaymentMethod === "google-pay" ? "bg-blue-50" : ""}
              transition-colors duration-200 hover:bg-gray-50
            `}
            >
              <div className="flex items-center space-x-3">
                {/* Google Pay Icon (simple placeholder, use actual logo if available) */}
                <img
                  src="https://img.icons8.com/color/48/google-pay.png"
                  alt="Google Pay"
                  className="size-6"
                />
                <span className="font-medium text-gray-900">Google Pay</span>
              </div>
              <input
                type="radio"
                id="googlePay"
                name="paymentMethod"
                value="google-pay"
                checked={selectedPaymentMethod === "google-pay"}
                onChange={() => handlePaymentMethodSelect("google-pay")}
                className="form-radio size-5 border-gray-300 text-green-600 focus:ring-green-500"
              />
            </label>

            {/* Saved Card */}
            <label
              htmlFor="card4657"
              className={`
              flex cursor-pointer items-center justify-between border-b border-gray-100 p-4
              ${selectedPaymentMethod === "card-4657" ? "bg-blue-50" : ""}
              transition-colors duration-200 hover:bg-gray-50
            `}
            >
              <div className="flex items-center space-x-3">
                {/* Card Icon (simple placeholder, use actual icon) */}
                <img
                  src="https://img.icons8.com/color/48/mastercard.png"
                  alt="Mastercard"
                  className="size-6"
                />
                <span className="font-medium text-gray-900">.... 4657</span>
              </div>
              <input
                type="radio"
                id="card4657"
                name="paymentMethod"
                value="card-4657"
                checked={selectedPaymentMethod === "card-4657"}
                onChange={() => handlePaymentMethodSelect("card-4657")}
                className="form-radio size-5 border-gray-300 text-green-600 focus:ring-green-500"
              />
            </label>

            {/* Cash Money */}
            <label
              htmlFor="cashMoney"
              className={`
              flex cursor-pointer items-center justify-between p-4
              ${selectedPaymentMethod === "cash-money" ? "bg-blue-50" : ""}
              transition-colors duration-200 hover:bg-gray-50
            `}
            >
              <div className="flex items-center space-x-3">
                {/* Cash Icon (simple placeholder, use actual icon) */}
                <img
                  src="https://img.icons8.com/fluency/48/money.png"
                  alt="Cash Money"
                  className="size-6"
                />
                <span className="font-medium text-gray-900">Cash Money</span>
              </div>
              <input
                type="radio"
                id="cashMoney"
                name="paymentMethod"
                value="cash-money"
                checked={selectedPaymentMethod === "cash-money"}
                onChange={() => handlePaymentMethodSelect("cash-money")}
                className="form-radio size-5 border-gray-300 text-green-600 focus:ring-green-500"
              />
            </label>
          </div>
        </div>

        {/* Fixed Bottom Button */}
        <div className="sticky bottom-0 w-full bg-white p-4">
          <Link to="/dashboard/succesful-payment">
            <button
              // onClick={handleMakePayment}
              className="w-full rounded-lg bg-adminPrimary py-3 font-semibold text-white transition-colors duration-200 hover:bg-green-800"
            >
              Make Payment
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
