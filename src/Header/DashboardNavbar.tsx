import { useState } from "react";
import { Search, Settings, Bell, AlignJustify } from "lucide-react";
import { profile } from "../assets";
import { useNavigate } from "react-router-dom";
import { DashboardMobileSidebar } from "../pages";
// import { Notification } from "../../DummyData/AdminDummy";

export default function DashboardNavbar() {
  const [toggler, setToggler] = useState(false);
  const [notify, setNotify] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex  w-full items-center justify-between">
      <div className="relative w-full">
        <div
          className="mb-3 block md:hidden"
          onClick={() => setToggler(!toggler)}
        >
          <AlignJustify />
        </div>
        {toggler && (
          <div className="absolute left-[-13px] top-[-10px] z-10 h-screen w-screen bg-white">
            <DashboardMobileSidebar setToggler={setToggler} />
          </div>
        )}
        <div className="relative w-full ">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
            <Search size={20} color="#222" />
          </div>
          <input
            type="text"
            className="block w-full rounded-lg border border-[#dadada] bg-inherit px-2.5 py-[6px] ps-10 text-base text-black shadow-none outline-none focus:border-[#dadada] focus:ring-0 md:w-[85%] lg:w-[70%]"
            placeholder="Search for anything"
          />
        </div>
      </div>
      <div className="hidden w-full items-center justify-end gap-x-16 md:flex ">
        <div className="flex items-center gap-x-5">
          <div
            className="cursor-pointer"
            onClick={() => navigate("/admin/settings")}
          >
            <Settings size={20} color="#222" />
          </div>
          <div
            className="relative cursor-pointer "
            onClick={() => setNotify(!notify)}
          >
            <Bell size={20} color="#222" />
            {Notification.length > 0 && (
              <div className="absolute right-[-2px] top-[-4px] size-[10px] rounded-full bg-red-600"></div>
            )}
          </div>
          {notify && (
            <div className="absolute right-[70px] top-[65px] z-10 w-[320px] shadow">
              <div className="bg-primary text-white">
                <h3 className="py-2 pl-2">Notification</h3>
              </div>
              {/* <div className=" w-full bg-white py-3">
                {SlicedNotification.map((data) => (
                  <div
                    className="mx-auto flex w-[94%] cursor-pointer items-start justify-between border-b pb-3 pt-2"
                    key={data.id}
                    onClick={() => handleNotificationClick(data.id)} // Handle click for navigation and close notification
                  >
                    <div className="flex items-center gap-x-1">
                      <div className="size-[34px] rounded-full">
                        <img
                          src={data.avatar}
                          alt="profile"
                          className="w-full rounded-full"
                        />
                      </div>
                      <div>
                        <p className="text-[13px]">
                          <span className="font-semibold">{data.name}</span>{" "}
                          {data.message}
                        </p>
                        <p className="text-[12px] text-[#B9B1B1]">
                          {data.time}
                        </p>
                      </div>
                    </div>
                    <div className="mt-1 size-2 rounded-full bg-secondary"></div>
                  </div>
                ))}

                <div className="flex items-center justify-center pb-2 pt-3">
                  <button
                    className="text-[12px] font-semibold text-primary  md:text-sm "
                    onClick={handleClick}
                  >
                    View all
                  </button>
                </div>
              </div> */}
            </div>
          )}
        </div>
        <div className="flex items-center gap-x-3">
          <div className="size-12 rounded-full ">
            <img src={profile} alt="profile" className="w-full rounded-full" />
          </div>
          <div className="">
            <h2 className="font-bold">ADEDEJI ALLI</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
