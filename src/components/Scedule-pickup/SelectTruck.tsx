/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from "react";
import { selectTruck } from "../../DummyData";
import { Link } from "react-router-dom";
import { MoveLeft, MapPin, Clock } from "lucide-react";

export default function SelectTruck() {
  const [selectedTruck, setSelectedTruck] = useState(null); // 'small', 'lorry', 'compact'

  const handleTruckSelection = (truckType) => {
    setSelectedTruck(truckType);
  };

  // const handleGoBack = () => {
  //   console.log("Navigating back...");
  //   // Implement your navigation logic here, e.g., using React Router's history.goBack()
  // };

  // const handleConfirmPickup = () => {
  //   if (selectedTruck) {
  //     console.log("Pickup Confirmed for:", selectedTruck);
  //     alert(`Pickup Confirmed for ${selectedTruck} truck!`);
  //     // You would typically send this data to a backend or state management
  //   } else {
  //     alert("Please select a truck type.");
  //   }
  // };

  return (
    <>
      <div className="flex items-center pl-48 pt-10">
        {/* Header */}
        <div className="flex items-center border-gray-200 p-4">
          {/* Back arrow icon */}
          <Link to="/dashboard/select-waste-type">
            <button>
              <MoveLeft />
            </button>
          </Link>

          <h1 className="pl-48 text-xl font-semibold text-gray-900">
            SELECT TRUCK
          </h1>
        </div>
      </div>

      <div className="mx-auto flex min-h-screen w-2/3 flex-col bg-white font-sans">
        {/* Main Content */}
        <div className="grow space-y-4 p-6">
          <p className="mb-4 text-base text-gray-600">
            Select the truck type you want
          </p>

          {/* Truck Type Cards */}
          {selectTruck.map((truck) => (
            <label
              key={truck.id}
              htmlFor={truck.id}
              className={`
              flex cursor-pointer items-center justify-between rounded-lg bg-white p-4 shadow-sm
              ${selectedTruck === truck.id ? "border-2 border-green-600" : "border border-gray-200"}
              transition-all duration-200 ease-in-out hover:shadow-md
            `}
            >
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-green-100 p-2">
                  <img src={truck.icon} alt="icon" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900">
                    {truck.name}
                  </p>
                  <div className="flex items-baseline space-x-2">
                    <p className="font-semibold text-green-700">
                      {truck.price}
                    </p>
                    <p className="text-sm text-gray-600">{truck.weight}</p>
                  </div>
                </div>
              </div>
              <input
                type="radio"
                id={truck.id}
                name="truckType"
                value={truck.id}
                checked={selectedTruck === truck.id}
                onChange={() => handleTruckSelection(truck.id)}
                className="form-radio size-5 border-gray-300 text-green-600 focus:ring-green-500"
              />
            </label>
          ))}
        </div>

        {/* Fixed Bottom Section */}
        <div className="sticky bottom-0 w-full bg-white">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-700">
              <MapPin />
              <span>4.5Km</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Clock />
              <span>5 Mins</span>
            </div>
          </div>

          <Link to="/dashboard/succesful-upload">
            <button
              // onClick={handleConfirmPickup}
              className="w-full rounded-lg bg-adminPrimary py-3 font-semibold text-white transition-colors duration-200 hover:bg-green-800"
            >
              Confirm Pickup
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
