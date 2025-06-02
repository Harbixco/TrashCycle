import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

export default function AddAddress() {
  const [formData, setFormData] = useState({
    sector: "",
    street: "",
    state: "",
    city: "",
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

  const [wasteType, setWasteType] = useState("");

  const handleWasteTypeChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setWasteType(e.target.value);
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
          ADD RESIDENT DETAILS
        </h1>
      </div>
      <div className="mx-auto flex min-h-screen w-2/3 flex-col bg-white font-sans">
        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="grow space-y-6 p-6">
          {/* Input Field: Name & Number of Street */}

          <div className="relative">
            <label
              htmlFor="wasteType"
              className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-500"
            >
              Select Venue
            </label>
            <select
              id="wasteType"
              name="wasteType"
              value={wasteType}
              onChange={handleWasteTypeChange}
              className="w-full cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white p-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                -Select
              </option>
              <option value="residential">Home</option>
              <option value="commercial">Office</option>
            </select>
            {/* Custom dropdown arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="size-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="street"
              className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-500"
            >
              Address
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
              State
            </label>
            <input
              type="text"
              id="apartment"
              name="apartment"
              value={formData.state}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Ekiti"
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
              placeholder="e.g. Ilawe Ekiti"
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
