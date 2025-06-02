/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
/* eslint-disable tailwindcss/no-custom-classname */
import { profile } from "../../assets";

export default function Setting() {
  return (
    <div className="mx-auto bg-[#f5f5f5] px-3 md:pl-5">
      <div className="mb-6 ">
        <img
          className="size-24 rounded-full"
          src={profile}
          alt="Profile Image"
        />
      </div>

      <form>
        <div className="mb-4 grid  gap-4 md:grid-cols-2">
          <div>
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border bg-[#f5f5f5] px-3 py-2"
              id="username"
              type="text"
              placeholder="Adedejs"
            />
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border bg-[#f5f5f5] px-3 py-2"
              id="email"
              type="email"
              placeholder="adedejlalli123@gmail.com"
            />
          </div>
        </div>

        <div className="mb-4 grid gap-4 md:grid-cols-2">
          <div>
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="first-name"
            >
              First name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border bg-[#f5f5f5] px-3 py-2"
              id="first-name"
              type="text"
              placeholder="Adedeji"
            />
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="last-name"
            >
              Last name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border bg-[#f5f5f5] px-3 py-2"
              id="last-name"
              type="text"
              placeholder="Alli"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="phone"
          >
            Phone number
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border bg-[#f5f5f5] px-3 py-2"
            id="phone"
            type="tel"
            placeholder="+234 (70) 123 133 1212"
          />
        </div>

        <div className="mt-6 flex justify-center gap-x-5 pb-4 md:justify-end">
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
      </form>
    </div>
  );
}
