import { useEffect, useState } from "react";

interface StateData {
  name: string;
}

export default function SearchForStates() {
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

  return (
    <>
      <div>
        {error}

        {/* State Search */}
        {!selectedState && (
          <>
            <div className="relative">
              <label
                htmlFor="State"
                className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-500"
              >
                Search for states
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={searchStateTerm}
                onChange={(e) => setSearchStateTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search for a state..."
              />
            </div>

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
          <div className="">
            <div className="mb-4 flex w-full items-center justify-between rounded-lg border border-gray-300 p-3 text-gray-900">
              <h2 className="text-sm">{selectedState}</h2>

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

            <div className="relative">
              <label
                htmlFor="city"
                className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-500"
              >
                Search for Towns
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={searchTownTerm}
                onChange={(e) => setSearchTownTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search for a towns..."
              />
            </div>

            {loadingTowns && <p>Loading towns...</p>}
            {!loadingTowns && searchTownTerm && filteredTowns.length > 0 && (
              <ul className="space-y-2">
                {filteredTowns.map((town, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setSearchTownTerm(town); // set input to selected town
                      setFilteredTowns([]); // hide suggestions
                    }}
                    className="cursor-pointer rounded bg-gray-100 px-3 py-2 text-sm shadow hover:bg-blue-100"
                  >
                    {town}
                  </li>
                ))}
              </ul>
            )}
            {/* 
            {!loadingTowns && searchTownTerm && filteredTowns.length === 0 && (
              <p className="text-gray-500">No towns match your search.</p>
            )} */}
          </div>
        )}
      </div>
    </>
  );
}
