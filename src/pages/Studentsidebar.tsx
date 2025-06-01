import { Link, NavLink } from "react-router-dom";
import { slide1 } from "../assets";
import {
  LayoutDashboard,
  ChartLine,
  ClipboardList,
  Clock5,
  Settings,
  LogOut,
  CircleHelp,
  Music2,
} from "lucide-react";
import { useState } from "react";

const Studentsidebar = () => {
  const [isCoursesActive, setIsCoursesActive] = useState(false);

  const active =
    "bg-adminPrimary flex w-full items-center gap-x-3 py-1 pl-2 text-white mb-2";
  const inactive =
    "bg-white flex w-full items-center gap-x-3 py-1 pl-2 text-black mb-2";

  return (
    <div className="h-screen w-full shadow">
      <div className="mx-auto w-[92%] bg-adminPrimary py-4">
        <Link to="/">
          <img src={slide1} alt="logo" />
        </Link>
      </div>
      <div className="mt-6 w-full ">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <LayoutDashboard size={18} />
          Home
        </NavLink>

        <NavLink
          to="/dashboard/schedule-pickups"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <ClipboardList size={18} />
          Schedule Pickups
        </NavLink>
        
        <NavLink
          to="/dashboard/past-pickups"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <ChartLine size={18} />
          Past Pickups
        </NavLink>
        <NavLink
          to="/dashboard/payment"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <Music2 size={18} />
          Payment
        </NavLink>

        <NavLink
          to="/dashboard/private-policy"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <Clock5 size={18} />
          Private Policy
        </NavLink>
        <div className={`${isCoursesActive ? "mt-1" : "mt-24"} py-1`}>
          <NavLink
            to="/dashboard/setting"
            className={({ isActive }) => (isActive ? active : inactive)}
          >
            <Settings size={18} />
            Settings
          </NavLink>
          <NavLink
            to="/dashboard/Support"
            className={({ isActive }) => (isActive ? active : inactive)}
          >
            <CircleHelp size={18} />
            Support & Help
          </NavLink>
          <button className=" flex w-full items-center gap-x-3 py-1 pl-2 text-black">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Studentsidebar;
