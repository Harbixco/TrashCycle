import { Link } from "react-router-dom";
import { facebook, twitter, google } from "../../assets";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../Auth/loginAuth/config/firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setErrorMsg("");

    if (email == "" || password == "") {
      setErrorMsg("Fill the email and password");
    } else {
      try {
        // Step 1: Check Firestore for user approval
        const testEmail = query(
          collection(db, "users"),
          where("email", "==", email),
          where("password", "==", password),
        );

        const querySnapshot = await getDocs(testEmail);

        if (querySnapshot.empty) {
          setErrorMsg("Email or password incorrect");
          return;
        }

        // Step 2: Proceed with login
        await signInWithEmailAndPassword(auth, email, password);
        // Redirect or handle successful login
      } catch (err) {
        setErrorMsg("");
      }
    }
  };

  return (
    <>
      <div className="mt-12 flex items-center justify-center bg-white px-4 md:mt-0 md:min-h-screen">
        <div className="w-full max-w-sm space-y-6">
          <h2 className="text-center text-2xl font-semibold text-black">
            Log in
          </h2>

          <form>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-md border border-green-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-md border border-green-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <div>
                {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
              </div>
              <div className="pb-2 text-right">
                <Link
                  to="/forgot-password"
                  className="text-sm text-red-500 hover:underline"
                >
                  Forget Password?
                </Link>
              </div>

              <Link
                // to="/dashboard"
                to="#"
              >
                <button
                  type="submit"
                  onClick={handleLogin}
                  className="w-full rounded-md bg-adminPrimary py-2 text-white hover:bg-green-700"
                >
                  Log In
                </button>
              </Link>
            </div>
          </form>

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
    </>
  );
}
