import { facebook, twitter, google } from "../../assets"; 
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm space-y-6">
        <h2 className="text-center text-2xl font-semibold text-black">
          Create an Account
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-md border border-green-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-md border border-green-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-md border border-green-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full rounded-md border border-green-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <Link to="/verify">
            <button className="mt-5 w-full rounded-md bg-adminPrimary py-2 text-white hover:bg-green-700">
              Register
            </button>
          </Link>
        </div>

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
          <button>
            <img src={google} alt="Google" className="size-6" />
          </button>
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
