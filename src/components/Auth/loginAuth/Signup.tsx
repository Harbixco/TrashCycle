import { facebook, twitter } from "../../../assets/index.js";
import GoogleAuth from "./GoogleAuth.js";
import { Link } from "react-router-dom";
import PasswordEmailAuth from "./PasswordEmailAuth.js";

export default function Signup() {
  return (
    <div className="mt-8 flex items-center justify-center bg-white px-4 md:mt-0 md:min-h-screen">
      <div className="w-full max-w-sm space-y-6">
        <h2 className="text-center text-2xl font-semibold text-black">
          Create an Account
        </h2>
        <PasswordEmailAuth />
        <div className="text-center text-sm text-gray-500">
          Or Register with
        </div>
        <div className="flex justify-center space-x-6">
          <button>
            <img src={facebook} alt="Twitter" className="size-6" />
          </button>
          <button>
            <img src={twitter} alt="Twitter" className="size-6" />
          </button>
          <GoogleAuth />
        </div>

        <p className="text-center text-sm text-black">
          Have an Account?{" "}
          <Link
            to="/login"
            className="font-semibold text-green-700 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
