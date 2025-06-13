import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Auth/loginAuth/config/firebase";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      // Step 1: Check Firestore for user approval
      const testEmail = query(
        collection(db, "users"),
        where("email", "==", email),
      );

      const querySnapshot = await getDocs(testEmail);

      if (querySnapshot.empty) {
        setErrorMsg("incorrect email");
        return;
      }
    } catch (err) {
      setErrorMsg("");
    }
  };
  return (
    <div className="mt-16 flex items-center justify-center bg-white px-4 md:mt-0 md:min-h-screen">
      <div className="w-full max-w-sm space-y-6">
        <h2 className="text-center text-xl font-semibold text-black">
          Reset Password
        </h2>

        {/* Input fields */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-green-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
          <button
            onClick={handleSubmit}
            className="w-full rounded-md bg-adminPrimary py-2 text-white hover:bg-green-700"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}
