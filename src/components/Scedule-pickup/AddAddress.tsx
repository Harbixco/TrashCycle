import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Auth/loginAuth/config/firebase";
interface StateData {
  name: string;
}

export default function AddAddress() {
  //CREATE NEW MOVIE DATA FOR DATABASE AND ALSO AUTHETICATE EMAIL AND PASSWORD
  const [venue, setVenue] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const [states, setStates] = useState<StateData[]>([]);
  const [searchStateTerm, setSearchStateTerm] = useState("");
  const [filteredStates, setFilteredStates] = useState<StateData[]>([]);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const [towns, setTowns] = useState<string[]>([]);
  const [searchTownTerm, setSearchTownTerm] = useState("");
  const [filteredTowns, setFilteredTowns] = useState<string[]>([]);

  const [loadingStates, setLoadingStates] = useState(true);
  const [loadingTowns, setLoadingTowns] = useState(false);
  const [error, setError] = useState("");

  const userCollectionRef = collection(db, "houseAddress");
  // const [data, setData] = useState(null);

  // Fetch all states on mount
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const res = await fetch(
          "https://countriesnow.space/api/v0.1/countries/states",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ country: "Nigeria" }),
          },
        );
        const data = await res.json();
        if (data?.data?.states) {
          setStates(data.data.states);
        } else {
          setError("Invalid API response for states.");
        }
      } catch {
        setError("Failed to fetch states.");
      } finally {
        setLoadingStates(false);
      }
    };
    fetchStates();
  }, []);

  // Filter states as user types
  useEffect(() => {
    if (searchStateTerm.trim() === "") {
      setFilteredStates([]);
    } else {
      const match = states.filter((state) =>
        state.name.toLowerCase().includes(searchStateTerm.toLowerCase()),
      );
      setFilteredStates(match);
    }
  }, [searchStateTerm, states]);

  // Fetch towns when state is selected
  const fetchTowns = async (stateName: string) => {
    setSelectedState(stateName);
    setSearchStateTerm("");
    setSearchTownTerm("");
    setFilteredTowns([]);
    setLoadingTowns(true);
    setError("");

    try {
      const res = await fetch(
        "https://countriesnow.space/api/v0.1/countries/state/cities",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ country: "Nigeria", state: stateName }),
        },
      );

      const data = await res.json();
      if (data?.data && Array.isArray(data.data)) {
        setTowns(data.data); // Don't show yet — wait for user to type
      } else {
        setError(`No towns found for ${stateName}`);
      }
    } catch {
      setError("Failed to fetch towns.");
    } finally {
      setLoadingTowns(false);
    }
  };

  // Filter towns only when user types
  useEffect(() => {
    if (!searchTownTerm.trim()) {
      setFilteredTowns([]); // don't show anything by default
    } else {
      const match = towns.filter((town) =>
        town.toLowerCase().includes(searchTownTerm.toLowerCase()),
      );
      setFilteredTowns(match);
    }
  }, [searchTownTerm, towns]);

  // SEND DATA TO FIREBASE
  const onSubmit = async () => {
    try {
      //BUTTON TO CREATE NEW MOVIE DATA IN DATABASE
      await addDoc(userCollectionRef, {
        venue,
        address,
        searchStateTerm,
        city,
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

        <h1 className="pl-20 font-semibold text-gray-900 md:pl-48 md:text-xl">
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

          <div className="mx-auto max-w-2xl p-6">
            <h1 className="mb-4 text-2xl font-bold">
              Search Nigerian States & Towns
            </h1>

            {error}

            {/* State Search */}
            {!selectedState && (
              <>
                <input
                  type="text"
                  placeholder="Search for a state..."
                  value={searchStateTerm}
                  onChange={(e) => setSearchStateTerm(e.target.value)}
                  className="mb-4 w-full rounded border border-gray-300 p-2"
                />
                {loadingStates && <p>Loading states...</p>}
                {filteredStates.length > 0 && (
                  <ul className="space-y-2">
                    {filteredStates.map((state, index) => (
                      <li
                        key={index}
                        onClick={() => fetchTowns(state.name)}
                        className="cursor-pointer rounded bg-gray-100 px-3 py-2 text-sm shadow hover:bg-blue-100"
                      >
                        {state.name}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}

            {/* Town Search */}
            {selectedState && (
              <div className="mt-4">
                <div className="mb-2 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">
                    Towns in {selectedState}
                  </h2>
                  <button
                    onClick={() => {
                      setSelectedState(null);
                      setTowns([]);
                      setFilteredTowns([]);
                    }}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Change State
                  </button>
                </div>

                <input
                  type="text"
                  placeholder="Start typing to search towns..."
                  value={searchTownTerm}
                  onChange={(e) => setSearchTownTerm(e.target.value)}
                  className="mb-4 w-full rounded border border-gray-300 p-2"
                />

                {loadingTowns && <p>Loading towns...</p>}
                {!loadingTowns &&
                  searchTownTerm &&
                  filteredTowns.length > 0 && (
                    <div className="grid grid-cols-2 gap-2">
                      {filteredTowns.map((town, index) => (
                        <div
                          key={index}
                          className="rounded bg-green-100 p-2 text-center text-sm shadow"
                        >
                          {town}
                        </div>
                      ))}
                    </div>
                  )}

                {!loadingTowns &&
                  searchTownTerm &&
                  filteredTowns.length === 0 && (
                    <p className="text-gray-500">No towns match your search.</p>
                  )}
              </div>
            )}
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
              onChange={(e) => setCity(e.target.value)}
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
