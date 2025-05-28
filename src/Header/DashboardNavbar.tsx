import { Search, Settings, Bell, AlignJustify } from "lucide-react";
import { profile } from "../assets";

const DashboardNavbar = () => {
  return (
    <div className="flex  w-full items-center justify-between">
      <div className="relative w-full">
        <div className="mb-3 block md:hidden">
          <AlignJustify />
        </div>
        <div className="relative w-full ">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
            <Search size={20} color="#222" />
          </div>
          <input
            type="text"
            className="block w-full rounded-lg border border-black bg-inherit px-2.5 py-[6px] ps-10 text-base text-black shadow-none outline-none focus:border-black focus:ring-0 md:w-[85%] lg:w-[70%]"
            placeholder="Search for Location"
          />
        </div>
      </div>
      <div className="hidden w-full items-center justify-end gap-x-16 md:flex ">
        <div className="flex items-center gap-x-5">
          <Settings size={20} color="#222" />
          <Bell size={20} color="#222" />
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
};

export default DashboardNavbar;
