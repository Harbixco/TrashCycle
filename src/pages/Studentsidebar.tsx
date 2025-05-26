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
  ChevronDown,
  ChevronUp,
  Music2,
  Tv,
} from "lucide-react";
import { useState } from "react";

const Studentsidebar = () => {
  const [isCoursesActive, setIsCoursesActive] = useState(false);

  const active =
    "bg-adminPrimary flex w-full items-center gap-x-3 py-1 pl-2 text-white mb-2";
  const inactive =
    "bg-white flex w-full items-center gap-x-3 py-1 pl-2 text-black mb-2";
  const dropactive =
    "bg-adminPrimary flex w-full items-center gap-x-3 py-1 pl-7 text-white mb-2";
  const dropinactive =
    "bg-white flex w-full items-center gap-x-3 py-1 pl-7 text-black mb-2";

  const toggleCoursesActive = () => {
    setIsCoursesActive(!isCoursesActive);
  };

  return (
    <div className="h-screen w-full shadow">
      <div className="mx-auto w-[92%] py-4">
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
          to="/dashboard/assignment"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <ClipboardList size={18} />
          Assignment
        </NavLink>
        <NavLink
          to="/dashboard/learning"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <ChartLine size={18} />
          My Learning
        </NavLink>
        <NavLink
          to="/dashboard/practice"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <Music2 size={18} />
          Quick Practice
        </NavLink>

        <div>
          <NavLink
            to="/dashboard/project"
            end
            onClick={toggleCoursesActive}
            className={({ isActive }) => (isActive ? active : inactive)}
          >
            <Tv size={18} />
            Project Hub
            <span className="">
              {isCoursesActive ? (
                <ChevronUp size={18} color="green" />
              ) : (
                <ChevronDown size={18} color="green" />
              )}
            </span>
          </NavLink>
          {isCoursesActive && (
            <ul className="mt-2 list-disc space-y-2">
              <li>
                <NavLink
                  to="/dashboard/project/submit-project"
                  className={({ isActive }) =>
                    isActive ? dropactive : dropinactive
                  }
                >
                  Submit Project
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/project/project-result"
                  className={({ isActive }) =>
                    isActive ? dropactive : dropinactive
                  }
                >
                  Result
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        <NavLink
          to="/dashboard/schedule"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <Clock5 size={18} />
          Schedule
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
