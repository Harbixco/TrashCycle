import { selectDetails } from "../../DummyData";
import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

export default function BookingSummary() {
  // const handleGoBack = () => {
  //   console.log("Navigating back...");
  //   // Implement your navigation logic here (e.g., history.goBack())
  // };

  const handleEditAddress = () => {
    console.log("Editing Pickup Address...");
    // Implement navigation to the address editing screen
  };

  const handleEditWasteType = () => {
    console.log("Editing Waste Type...");
    // Implement navigation to the waste type selection screen
  };

  const handleGoToPayment = () => {
    console.log("Proceeding to Payment...");
    // Implement navigation to the payment screen
  };

  return (
    <>
      <div className="flex items-center pl-48 pt-10">
        {/* Header */}
        <div className="flex items-center border-gray-200 p-4">
          {/* Back arrow icon */}
          <Link to="/dashboard/select-truck">
            <button>
              <MoveLeft />
            </button>
          </Link>

          <h1 className="pl-48 text-xl font-semibold text-gray-900">
            BOOKING SUMMARY
          </h1>
        </div>
      </div>
      <div className="mx-auto flex min-h-screen w-2/3 flex-col bg-white font-sans">
        {/* Main Content Area */}
        <div className="grow space-y-4 p-6">
          {/* Pickup Address Card */}
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">
                Pickup Address
              </h2>
              <button
                onClick={handleEditAddress}
                className="rounded-md bg-green-100 px-3 py-1 text-sm font-semibold text-green-700 transition-colors duration-200 hover:bg-green-200"
              >
                Edit
              </button>
            </div>
            <p className="text-sm text-gray-700">
              {selectDetails.address}
              105102.
            </p>
          </div>

          {/* Waste Type Card */}
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Waste Type</h2>
              <button
                onClick={handleEditWasteType}
                className="rounded-md bg-green-100 px-3 py-1 text-sm font-semibold text-green-700 transition-colors duration-200 hover:bg-green-200"
              >
                Edit
              </button>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-700">
                {selectDetails.name}{" "}
                <span className="ml-2 font-semibold">{selectDetails.kg}</span>
              </p>
              <p className="text-sm text-gray-700">
                {selectDetails.truck}{" "}
                <span className="ml-2 font-semibold">
                  {selectDetails.amount}
                </span>
              </p>
            </div>
          </div>

          {/* Add more summary items here if needed */}
        </div>

        {/* Fixed Bottom Button */}
        <div className="sticky bottom-0 w-full bg-white p-4">
          <Link to="/dashboard/payment-methods">
            <button
              onClick={handleGoToPayment}
              className="w-full rounded-lg bg-adminPrimary py-3 font-semibold text-white transition-colors duration-200 hover:bg-green-800"
            >
              Go to Payment
            </button>
          </Link>
        </div>
      </div>{" "}
    </>
  );
}
