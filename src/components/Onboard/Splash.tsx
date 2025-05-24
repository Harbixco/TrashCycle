import { slide1 } from "../../assets";
import { Link } from "react-router-dom";

export default function Splash() {
  return (
    <div className=" min-h-screen w-full  bg-[#27662A]">
      <div className="flex justify-center pt-40">
        <img src={slide1} alt="slide1" />
      </div>

      <div className="my-5 flex justify-center">
        <div className="text-white">
          <div className="pl-5">
            Schedule trash pickup with just a few clicks.
          </div>

          <div className="pr-10">
            {" "}
            We collect your waste quickly, cleanly, and on time.
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-10">
        <button
          type="button"
          className="rounded-lg bg-[#79AD27] px-5 py-2 text-sm font-semibold text-white hover:bg-green-800 hover:text-white"
        >
          <Link to="/educate">Get Started</Link>
        </button>
      </div>
    </div>
  );
}
