/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
/* eslint-disable tailwindcss/no-custom-classname */
import { profile } from "../../assets";
import { useState } from "react";

export default function SettingNofitication() {
  // State for the toggle switch
  const [isToggled, setIsToggled] = useState(true);

  // Handle toggle switch
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  
  return (
    <div className="bg-[#f5f5f5] py-5 pl-5">
      <div className="mb-6 ">
        <img
          className="size-24 rounded-full"
          src={profile}
          alt="Profile Image"
        />
      </div>

      <div className="mt-5 rounded-lg bg-white">
        {/* Notification Form */}
        <div>
          <div className="grid grid-cols-2 gap-4 p-5">
            <div className="flex flex-col space-y-6 text-gray-700">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Notification
                </h2>
              </div>
              <span>New Notifications</span>
              <span>Email Notifications</span>
              <span>System Updates</span>
              <span>Security Alerts</span>
            </div>

            <div className="flex flex-col items-end space-y-6">
              {/* Toggle Switch */}
              <div>
                <label
                  className={`toggle-label relative block h-8 w-14 cursor-pointer rounded-full ${
                    isToggled ? "bg-[#6BC049]" : "bg-gray-200"
                  }`}
                  onClick={handleToggle}
                >
                  <span
                    className={`toggle-circle absolute left-1 top-1 size-6 rounded-full bg-white transition-transform ${
                      isToggled ? "translate-x-6" : "translate-x-0"
                    }`}
                  ></span>
                </label>
              </div>

              {/* Checkmarks */}
              {[...Array(4)].map((_, index) => (
                <div key={index} className="pr-5">
                  <label className="inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox size-6 rounded-md border-gray-300 text-[#6BC049]"
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-x-5 pb-4 pr-5 md:justify-end">
            <button
              className="rounded bg-[#1D2B53] px-6 text-white"
              type="button"
            >
              Save
            </button>
            <button
              className="rounded bg-[#D9D9D9] px-6 py-1 text-[#1D2B53]"
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
