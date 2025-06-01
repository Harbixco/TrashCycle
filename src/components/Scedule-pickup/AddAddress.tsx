import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

export default function AddAddress() {
  const [formData, setFormData] = useState({
    street: "",
    apartment: "",
    city: "",
    landmark: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Address saved:", formData);
    // In a real application, you would send this data to a backend or state management
    alert("Address Saved! Check console for data.");
  };

  return (
    <>
      {/* Header */}
      <div className="flex items-center pl-48 pt-10">
        {/* Back arrow icon (using a simple SVG, you might use an icon library) */}

        <Link to="/dashboard/schedule-pickups">
          <button>
            <MoveLeft />
          </button>
        </Link>

        <h1 className="pl-48 text-xl font-semibold text-gray-900">
          ADD ADDRESS
        </h1>
      </div>
      <div className="mx-auto flex min-h-screen w-2/3 flex-col bg-white font-sans">
        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="grow space-y-6 p-6">
          {/* Input Field: Name & Number of Street */}
          <div className="relative">
            <label
              htmlFor="street"
              className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-500"
            >
              Name & Number of Street
            </label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Number 56 Golden Street"
            />
          </div>

          {/* Input Field: Apartment No. */}
          <div className="relative">
            <label
              htmlFor="apartment"
              className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-500"
            >
              Apartment No.
            </label>
            <input
              type="text"
              id="apartment"
              name="apartment"
              value={formData.apartment}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Flat 1, Block 8"
            />
          </div>

          {/* Input Field: City */}
          <div className="relative">
            <label
              htmlFor="city"
              className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-500"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Port Harcourt"
            />
          </div>

          {/* Input Field: Landmark */}
          <div className="relative">
            <label
              htmlFor="landmark"
              className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-500"
            >
              Landmark
            </label>
            <input
              type="text"
              id="landmark"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Chicken Republic Fast Food"
            />
          </div>

          {/* Spacer to push button to bottom, if form fields are few */}
          <div className="grow" />

          {/* Save Address Button */}
          <Link to="/dashboard/succesful-address">
            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-adminPrimary py-3 font-semibold text-white transition-colors duration-200 hover:bg-green-800"
            >
              Save Address
            </button>
          </Link>
        </form>
      </div>{" "}
    </>
  );
}
