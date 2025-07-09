import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Auth/loginAuth/config/firebase";
import { useState } from "react";
import SearchForStates from "./SearchForStates";

export default function AddAddress() {
  //CREATE NEW MOVIE DATA FOR DATABASE AND ALSO AUTHETICATE EMAIL AND PASSWORD
  const [venue, setVenue] = useState("");
  const [address, setAddress] = useState("");

  const [searchStateTerm] = useState("");

  const userCollectionRef = collection(db, "houseAddress");

  // SEND DATA TO FIREBASE
  const onSubmit = async () => {
    try {
      //BUTTON TO CREATE NEW MOVIE DATA IN DATABASE
      await addDoc(userCollectionRef, {
        venue,
        address,
        searchStateTerm,
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
        {/* Back arrow icon (using a simple SVG, you might use an icon library) */}

        <Link to="/dashboard/schedule-pickups">
          <button>
            <MoveLeft />
          </button>
        </Link>

        <h1 className="pl-20 font-semibold text-gray-900 md:pl-20 md:text-xl lg:pl-48">
          ADD RESIDENT DETAILS
        </h1>

        <div>{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}</div>
      </div>
      <div className="mx-auto flex min-h-screen flex-col bg-white font-sans md:w-2/3">
        {/* Form Fields */}
        <form className="grow space-y-6 p-6">
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
              onChange={(e) => setVenue(e.target.value)}
              className="w-full cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white p-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                -Select
              </option>
              <option value="Home">Home</option>
              <option value="Office">Office</option>
              <option value="Open space">Open space</option>
              <option value="Others">Others</option>
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

          <div>
            <SearchForStates />
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
              onChange={(e) => setAddress(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Number 56 Golden Street"
            />
          </div>

          {/* Spacer to push button to bottom, if form fields are few */}
          <div className="grow" />

          {/* Save Address Button */}
          <Link to="/dashboard/succesful-address">
            <button
              type="submit"
              onClick={onSubmit}
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
