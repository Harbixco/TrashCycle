import { selectDetails } from "../../DummyData";
import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Auth/loginAuth/config/firebase";
import { useEffect, useState } from "react";

export default function BookingSummary() {
  const userCollectionRef = collection(db, "users");
  // GET USER DATA FROM BACKEND
  const [userList, setUserList] = useState<
    {
      id: string;
      email?: string;
      password?: string;
      fullName?: string;
      phoneNumber?: number;
    }[]
  >([]);

  useEffect(() => {
    const getUsersList = async () => {
      try {
        const data = await getDocs(userCollectionRef);
        const filteredData = data.docs.map((docs) => ({
          id: docs.id,
          ...docs.data(),
        }));
        setUserList(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    getUsersList();
  }, []);

  return (
    <>
      <div>
        {userList.map((data) => (
          <div key={data.id}>
            <p>{data.fullName}</p>
            <p>{data.email}</p>
            <p>{data.phoneNumber}</p>
            <p className="pb-4">{data.password}</p>
          </div>
        ))}
      </div>
      {/* Header */}
      <div className="flex items-center pl-6 pt-10 md:pl-48">
        {/* Back arrow icon */}
        <Link to="/dashboard/select-truck">
          <button>
            <MoveLeft />
          </button>
        </Link>

        <h1 className="pl-20 font-semibold text-gray-900 md:pl-20 md:text-xl lg:pl-48">
          BOOKING SUMMARY
        </h1>
      </div>
      <div className="mx-auto flex min-h-screen flex-col bg-white font-sans md:w-2/3">
        {/* Main Content Area */}
        <div className="space-y-4 p-6">
          {/* Pickup Address Card */}
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">
                Pickup Address
              </h2>
              <button className="rounded-md bg-green-100 px-3 py-1 text-sm font-semibold text-green-700 transition-colors duration-200 hover:bg-green-200">
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
              <button className="rounded-md bg-green-100 px-3 py-1 text-sm font-semibold text-green-700 transition-colors duration-200 hover:bg-green-200">
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
            <button className="w-full rounded-lg bg-adminPrimary py-3 font-semibold text-white transition-colors duration-200 hover:bg-green-800">
              Go to Payment
            </button>
          </Link>
        </div>
      </div>{" "}
    </>
  );
}
