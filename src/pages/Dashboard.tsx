import { profileDetail } from "../DummyData";
import { CalendarCompo, Time } from "../common";
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
      </div>

      <div className="h-screen w-full rounded-xl md:ml-4 md:w-[30%]">
        <CalendarCompo />
      </div>
    </div>
  );
}
