import { Link } from "react-router-dom";
import { facebook, twitter, google } from "../../assets";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm space-y-6">
        <h2 className="text-center text-2xl font-semibold text-black">
          Log in
        </h2>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-md border border-green-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full rounded-md border border-green-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <div className="pb-2 text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-red-500 hover:underline"
            >
              Forget Password?
            </Link>
          </div>

          <Link to="/dashboard">
            <button className="w-full rounded-md bg-green-800 py-2 text-white hover:bg-green-700">
              Log In
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <span className="text-sm text-gray-500">Or Log in with</span>
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
          Don’t have an Account? &nbsp;
          <Link
            to="/signup"
            className="font-semibold text-green-700 hover:underline"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
}
