import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import UploadWaste from "./UploadWaste";

export default function SelectWasteType() {
  const [wasteType, setWasteType] = useState("");
  const [wasteKg, setWasteKg] = useState("");

  const handleWasteTypeChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setWasteType(e.target.value);
  };

  const handleWasteKgChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setWasteKg(e.target.value);
  };

  // const handleGoBack = () => {
  //   console.log("Navigating back...");
  //   // Implement your navigation logic here, e.g., using React Router's history.goBack()
  // };

  // const handleUploadImage = () => {
  //   console.log("Open image upload dialog...");
  //   // Implement your image upload logic here
  // };

  // const handleSaveAddress = (e) => {
  //   e.preventDefault();
  //   const formData = {
  //     wasteType,
  //     wasteKg,
  //     // You might add image data here if uploaded
  //   };
  //   console.log("Form data submitted:", formData);
  //   alert("Form Submitted! Check console for data.");
  //   // In a real application, you would send this data to a backend or state management
  // };

  return (
    <>
      {/* Header */}
      <div className="flex items-center pl-48 pt-10">
        {/* Back arrow icon (using a simple SVG, you might use an icon library) */}

        <Link to="/dashboard/add-address">
          <button>
            <MoveLeft />
          </button>
        </Link>

        <h1 className="pl-48 text-xl font-semibold text-gray-900">
          SELECT WASTE TYPE
        </h1>
      </div>

      <div className="mx-auto flex min-h-screen w-2/3 flex-col bg-white font-sans">
        {/* Main Content */}
        <div className="grow space-y-6 p-6">
          <p className="mb-4 text-base font-bold text-gray-600">
            Select the truck type you want
          </p>

          {/* Select Waste Type Dropdown */}
          <div className="relative">
            <label
              htmlFor="wasteType"
              className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-500"
            >
              Select waste type
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
              <option value="residential">Residential Waste</option>
              <option value="commercial">Commercial Waste</option>
              <option value="industrial">Industrial Waste</option>
              <option value="hazardous">Hazardous Waste</option>
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

          {/* Waste Kg Dropdown */}
          <div className="relative">
            <label
              htmlFor="wasteKg"
              className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-500"
            >
              Waste Kg
            </label>
            <select
              id="wasteKg"
              name="wasteKg"
              value={wasteKg}
              onChange={handleWasteKgChange}
              className="w-full cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white p-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                -Select
              </option>
              <option value="100">100 Kg</option>
              <option value="250">250 Kg</option>
              <option value="500">500 Kg</option>
              <option value="1000">1000 Kg (1 Ton)</option>
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

          <UploadWaste />
        </div>

        {/* Save Address Button (at the bottom) */}
        <Link to="/dashboard/select-truck">
          <button
            type="button"
            // onClick={handleSaveAddress}
            className="mt-6 w-full rounded-lg bg-adminPrimary py-3 font-semibold text-white transition-colors duration-200 hover:bg-green-800"
          >
            Continue
          </button>
        </Link>
      </div>
    </>
  );
}
