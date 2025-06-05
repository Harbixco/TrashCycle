import { useState } from "react";
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
  CircleX,
} from "lucide-react";

interface AdminMobileSidebarProps {
  setToggler: (state: boolean) => void;
}

const DashboardMobileSidebar: React.FC<AdminMobileSidebarProps> = ({
  setToggler,
}) => {
  const [isCoursesActive] = useState(false);

  const active =
    "bg-adminPrimary flex w-full items-center gap-x-3 py-1 pl-2 text-white mb-2";
  const inactive =
    "bg-white flex w-full items-center gap-x-3 py-1 pl-2 text-black mb-2";

  const handleLinkClick = () => {
    setToggler(false); // Close the sidebar
  };

  return (
    <div className="h-screen w-full shadow">
      <div className="mx-auto flex w-[92%] items-center justify-between bg-adminPrimary py-4">
        <Link to="/" onClick={handleLinkClick}>
          <img src={slide1} alt="logo" />
        </Link>
        <div
          className="cursor-pointer pr-5 text-white"
          onClick={handleLinkClick}
        >
          <CircleX className="size-7 " />
        </div>
      </div>
      <div className="mt-4 w-full ">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) => (isActive ? active : inactive)}
          onClick={handleLinkClick}
        >
          <LayoutDashboard size={18} />
          Home
        </NavLink>

        <NavLink
          to="/dashboard/schedule-pickups"
          className={({ isActive }) => (isActive ? active : inactive)}
          onClick={handleLinkClick}
        >
          <ClipboardList size={18} />
          Schedule Pickups
        </NavLink>

        <NavLink
          to="/dashboard/past-pickups"
          className={({ isActive }) => (isActive ? active : inactive)}
          onClick={handleLinkClick}
        >
          <ChartLine size={18} />
          Past Pickups
        </NavLink>
        <NavLink
          to="/dashboard/payment"
          className={({ isActive }) => (isActive ? active : inactive)}
          onClick={handleLinkClick}
        >
          <Music2 size={18} />
          Payment
        </NavLink>

        <NavLink
          to="/dashboard/private-policy"
          className={({ isActive }) => (isActive ? active : inactive)}
          onClick={handleLinkClick}
        >
          <Clock5 size={18} />
          Private Policy
        </NavLink>
        <div className={`${isCoursesActive ? "mt-1" : "mt-24"} py-1`}>
          <NavLink
            to="/dashboard/setting"
            className={({ isActive }) => (isActive ? active : inactive)}
            onClick={handleLinkClick}
          >
            <Settings size={18} />
            Settings
          </NavLink>
          <NavLink
            to="/dashboard/Support"
            className={({ isActive }) => (isActive ? active : inactive)}
            onClick={handleLinkClick}
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

export default DashboardMobileSidebar;
