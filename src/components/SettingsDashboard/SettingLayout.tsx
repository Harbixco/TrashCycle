/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function SettingLayout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const activeLink = "mb-2 flex items-center px-4 py-1 text-[#6BC049]";
  const inactiveLink =
    "mb-2 flex items-center bg-transparent px-4 py-1 text-black";
  return (
    <>
      <div className="hidden bg-[#f5f5f5] md:block">
        <div className="">
          <h2 className="pl-4 text-lg font-semibold md:text-xl">Settings</h2>
          <div className="mt-4 flex items-center">
            <NavLink
              to="/dashboard/setting"
              end
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }
            >
              {({ isActive }) => (
                <div>
                  <div>My profile</div>
                  {isActive && (
                    <div className="mt-1 h-0.5 w-full bg-[#6BC04A]"></div>
                  )}
                </div>
              )}
            </NavLink>

            <NavLink
              to="/dashboard/setting/change-password"
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }
            >
              {({ isActive }) => (
                <div>
                  <div> Change password</div>
                  {isActive && (
                    <div className="mt-1 h-0.5 w-full bg-[#6BC04A]"></div>
                  )}
                </div>
              )}
            </NavLink>
            <NavLink
              to="/dashboard/setting/notification"
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }
            >
              {({ isActive }) => (
                <div>
                  <div> Notification</div>
                  {isActive && (
                    <div className="mt-1 h-0.5 w-full bg-[#6BC04A]"></div>
                  )}
                </div>
              )}
            </NavLink>
          </div>
        </div>
        <div className="mt-1 w-full rounded-xl bg-white md:w-[75%] lg:w-[80%]">
          <Outlet />
        </div>
      </div>

      <div className="bg-[#f5f5f5] md:hidden">
        <div className="">
          <div className="mt-4  items-center">
            <div>
              <button
                onClick={toggleDropdown}
                className="inline-flex w-full px-4 py-2 text-sm font-semibold"
              >
                Settings
                <ChevronDown />
              </button>

              {isOpen && (
                <div
                  className="absolute right-0 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="dropdown-button"
                >
                  <div className="py-1">
                    <NavLink
                      to="/dashboard/setting"
                      end
                      className={({ isActive }) =>
                        isActive ? activeLink : inactiveLink
                      }
                    >
                      {({ isActive }) => (
                        <div>
                          <div>My profile</div>
                          {isActive && (
                            <div className="mt-1 h-0.5 w-full bg-[#6BC04A]"></div>
                          )}
                        </div>
                      )}
                    </NavLink>

                    <NavLink
                      to="/dashboard/setting/change-password"
                      className={({ isActive }) =>
                        isActive ? activeLink : inactiveLink
                      }
                    >
                      {({ isActive }) => (
                        <div>
                          <div> Change password</div>
                          {isActive && (
                            <div className="mt-1 h-0.5 w-full bg-[#6BC04A]"></div>
                          )}
                        </div>
                      )}
                    </NavLink>
                    <NavLink
                      to="/dashboard/setting/notification"
                      className={({ isActive }) =>
                        isActive ? activeLink : inactiveLink
                      }
                    >
                      {({ isActive }) => (
                        <div>
                          <div> Notification</div>
                          {isActive && (
                            <div className="mt-1 h-0.5 w-full bg-[#6BC04A]"></div>
                          )}
                        </div>
                      )}
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-1 w-full rounded-xl">
          <Outlet />
        </div>
      </div>
    </>
  );
}
