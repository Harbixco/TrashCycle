import { slide1 } from "../../assets";
import { Link } from "react-router-dom";

export default function Splash() {
  return (
    <div className=" min-h-screen w-full  bg-adminPrimary">
      <div className="flex justify-center pt-40">
        <img src={slide1} alt="slide1" />
      </div>

      <div className="md:block">
        <div className="my-5 hidden md:flex md:justify-center">
          <div className="text-white">
            <div className="md:pl-5">
              Schedule trash pickup with just a few clicks.
            </div>

            <div className="pr-10">
              {" "}
              We collect your waste quickly, cleanly, and on time.
            </div>
          </div>
        </div>
      </div>

      <div className="mx-6 my-4 text-center text-white md:hidden">
        Schedule trash pickup with just a few clicks. We collect your waste
        quickly, cleanly, and on time.
      </div>

      <div className="flex justify-center pt-10">
        <button
          type="button"
          className="rounded-lg bg-[#79AD27] px-5 py-2 text-sm font-semibold text-white hover:bg-green-800 hover:text-white"
        >
          <Link to="/login">Get Started</Link>
        </button>
      </div>
    </div>
  );
}
