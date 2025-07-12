import { profileDetail, selectDetails } from "../DummyData";
import { CalendarCompo } from "../common";
import CurrentTime from "../common/CurrentTime";

export default function Dashboard() {
  return (
    <div className="flex w-full flex-col items-start justify-between gap-y-6 md:flex-row md:gap-y-0 ">
      <div className="w-full rounded-xl  md:w-[70%]">
        <div className="mx-auto flex max-w-2xl items-center justify-between rounded-lg bg-white p-6 shadow">
          <div>
            <div className="pb-3">
              <span className="mb-1 text-xl font-bold">
                Hello {profileDetail.name}
              </span>

              <span className="mb-1 pl-2 text-sm font-medium">
                {" "}
                ({profileDetail.mail}){" "}
              </span>
            </div>

            <p className="text-gray-700">{profileDetail.firstText}</p>
            <p className="text-gray-700">{profileDetail.secondText}</p>
          </div>
          <img
            className="size-16 rounded-full border-2 border-green-500 object-cover"
            src={profileDetail.profile}
            alt="Profile"
          />
        </div>

        <div className="mt-2 rounded-lg border bg-white px-2 py-1">
          <div className="pl-2">
            <div className="pb-2 text-[14px] font-semibold md:text-[18px]">
              Scheduled Pickups
            </div>
            <div className="pb-2">
              <CurrentTime />
            </div>
          </div>

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
        </div>
      </div>

      <div className="h-screen w-full rounded-xl md:ml-4 md:w-[30%]">
        <CalendarCompo />
      </div>
    </div>
  );
}
