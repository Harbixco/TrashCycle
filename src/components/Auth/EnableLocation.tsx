import { Link } from "react-router-dom";
import { slide3 } from "../../assets";

export default function EnableLocation() {
  return (
    <div className="mt-16 flex flex-col items-center justify-center px-4">
      <div>
        <img src={slide3} alt="slide2" className="size-52" />
      </div>

      <div className="py-3 text-2xl font-semibold">Enable your location</div>

      <div>We need to know your location in </div>

      <div>order to know nearby center</div>
      <div>
        <button
          type="button"
          className="mt-4 w-48 rounded-md bg-adminPrimary py-1.5 text-white hover:bg-green-700"
        >
          <Link to="/get-user-location">Enable</Link>
        </button>
      </div>

      <div>
        <button
          type="button"
          className="mt-5 rounded-lg px-5 py-2 text-sm font-semibold"
        >
          <Link to="/">Not Now</Link>
        </button>
      </div>
    </div>
  );
}
