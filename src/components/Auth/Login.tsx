import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../Auth/loginAuth/config/firebase";
import { Eye, EyeOff } from "lucide-react";
import { facebook, twitter, google } from "../../assets";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email || !password) {
      setErrorMsg("Please enter both email and password.");
      return;
    }

    try {
      // Step 1: Firebase login
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      // Step 2: Get the full user details from Firestore by UID
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();

        // Optional check: approval
        if (userData.approved === false) {
          setErrorMsg("Your account is not approved.");
          return;
        }

        // Redirect to dashboard
        navigate("/dashboard");
      } else {
        setErrorMsg("User data not found in database.");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      if (
        err.code === "auth/user-not-found" ||
        err.code === "auth/wrong-password"
      ) {
        setErrorMsg("Email or password incorrect.");
      } else {
        setErrorMsg("Email or password incorrect.");
      }
    }
  };

  return (
    <div className="mt-12 flex items-center justify-center bg-white px-4 md:mt-0 md:min-h-screen">
      <div className="w-full max-w-sm space-y-6">
        <h2 className="text-center text-2xl font-semibold text-black">
          Log in
        </h2>

        <form onSubmit={handleLogin}>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-md border border-green-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />

            <div className="relative mx-auto w-full max-w-md">
              <input
                type={visible ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-md border border-green-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                type="button"
                onClick={toggleVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              >
                {visible ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {errorMsg && <p className="text-red-500">{errorMsg}</p>}

            <div className="pb-2 text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-red-500 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-adminPrimary py-2 text-white hover:bg-green-700"
            >
              Log In
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center space-x-4">
          <span className="text-sm text-gray-500">Or Log in with</span>
        </div>
        <div className="flex justify-center space-x-6">
          <button>
            <img src={facebook} alt="Facebook" className="size-6" />
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
