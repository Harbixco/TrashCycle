/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SelectAddress() {
  const [selectedAddress, setSelectedAddress] = useState("home"); // 'home' or 'office'

  return (
    <>
      <div className="text-x1 pt-8 text-center font-semibold md:text-lg">
        SELECT YOUR LOCATION
      </div>
      <div className="min-h-screen w-full p-4 font-sans sm:p-6 md:pl-72">
        {/* Add Address Button */}

        <Link to="/dashboard/add-address">
          <button className="mb-8 flex w-80 items-center justify-center space-x-2 rounded-lg border-2 border-green-700 py-3 font-semibold text-green-700 md:w-96">
            <span className="text-2xl">+</span>
            <span>Add Address</span>
          </button>
        </Link>

        {/* Saved Addresses Section */}
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Saved address
        </h2>

        <div className="space-y-4">
          {/* Home Address Card */}
          <label
            htmlFor="homeAddress"
            className={`
            block w-80 cursor-pointer rounded-lg bg-white p-4 shadow-sm md:w-96
            ${selectedAddress === "home" ? "border-2 border-green-600" : "border border-gray-200"}
            transition-all duration-200 ease-in-out hover:shadow-md
          `}
          >
            <div className="flex items-center space-x-3">
              <input
                type="radio"
                id="homeAddress"
                name="address"
                value="home"
                checked={selectedAddress === "home"}
                onChange={() => setSelectedAddress("home")}
                className="form-radio size-5 border-gray-300 text-green-600 focus:ring-green-500"
              />
              <div>
                <p className="text-lg font-medium text-gray-900">Home</p>
                <p className="text-sm text-gray-600">
                  11b Ligali Ayorinde St, Victoria Island, Lagos, Nigeria
                </p>
              </div>
            </div>
          </label>

          {/* Office Address Card */}
          <label
            htmlFor="officeAddress"
            className={`
            block w-80 cursor-pointer rounded-lg bg-white p-4 shadow-sm md:w-96
            ${selectedAddress === "office" ? "border-2 border-green-600" : "border border-gray-200"}
            transition-all duration-200 ease-in-out hover:shadow-md
          `}
          >
            <div className="flex items-center space-x-3">
              <input
                type="radio"
                id="officeAddress"
                name="address"
                value="office"
                checked={selectedAddress === "office"}
                onChange={() => setSelectedAddress("office")}
                className="form-radio size-5 border-gray-300 text-green-600 focus:ring-green-500"
              />
              <div>
                <p className="text-lg font-medium text-gray-900">Office</p>
                <p className="text-sm text-gray-600">
                  Sustainable Resources Ltd, 78 Environment Avenue, Lagos
                </p>
              </div>
            </div>
          </label>
        </div>

        <div className="mt-8">
          <Link to="/dashboard/select-waste-type">
            <button className="w-80 rounded-lg bg-adminPrimary py-3 font-semibold text-white transition-colors duration-200 hover:bg-green-800 md:w-96">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
