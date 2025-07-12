/* eslint-disable tailwindcss/no-custom-classname */
import { selectTruck } from "../../DummyData";
import { Link } from "react-router-dom";
import { MoveLeft, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Auth/loginAuth/config/firebase";

export default function SelectTruck() {
  const [truckSelection, setTruckSelection] = useState("");

  const userCollectionRef = collection(db, "wasteTruck");

  const onSubmit = async () => {
    try {
      //BUTTON TO CREATE NEW MOVIE DATA IN DATABASE
      await addDoc(userCollectionRef, {
        truckSelection,
      });

      console.log("Succssful");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* Header */}
      <div className="flex items-center pl-6 pt-10 md:pl-48">
        {/* Back arrow icon */}
        <Link to="/dashboard/select-waste-type">
          <button>
            <MoveLeft />
          </button>
        </Link>

        <h1 className="pl-20 font-semibold text-gray-900 md:pl-20 md:text-xl lg:pl-48">
          SELECT TRUCK
        </h1>
      </div>

      <div className="mx-auto flex min-h-screen flex-col bg-white font-sans md:w-2/3">
        {/* Main Content */}
        <div className="space-y-4 p-6">
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
              ${truckSelection === truck.id ? "border-2 border-green-600" : "border border-gray-200"}
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
                value={[
                  `id: ${truck.id}, name: ${truck.name}, price: ${truck.price}, weight:${truck.weight}`,
                ]}
                onChange={(e) => setTruckSelection(e.target.value)}
                className="form-radio size-5 border-gray-300 text-green-600 focus:ring-green-500"
              />
            </label>
          ))}
        </div>

        {/* Fixed Bottom Section */}
        <div className="ml-5 w-[370px] md:hidden">
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
                onClick={onSubmit}
                className="w-full rounded-lg bg-adminPrimary py-3 font-semibold text-white transition-colors duration-200 hover:bg-green-800"
              >
                Confirm Pickup
              </button>
            </Link>
          </div>
        </div>

        <div className="hidden md:block">
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
                onClick={onSubmit}
                className="w-full rounded-lg bg-adminPrimary py-3 font-semibold text-white transition-colors duration-200 hover:bg-green-800"
              >
                Confirm Pickup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
