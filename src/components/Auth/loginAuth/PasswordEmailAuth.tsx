/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth } from "./config/firebase.ts";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "./config/firebase.ts";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordEmailAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

  const navigate = useNavigate();

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email || !password || !fullName || !phoneNumber) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      // Save user details in Firestore using UID
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email,
        fullName,
        phoneNumber,
        createdAt: new Date().toISOString(),
      });

      const timer = setTimeout(() => {
        navigate("/verify");
      }, 2000);

      return () => clearTimeout(timer);
    } catch (err: any) {
      setErrorMsg(err.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        onChange={(e) => setFullName(e.target.value)}
        className="w-full rounded-md border border-green-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
      />
      <input
        type="email"
        placeholder="Email Address"
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-md border border-green-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
      />
      <input
        type="number"
        placeholder="Phone Number"
        onChange={(e) => setPhoneNumber(Number(e.target.value))}
        className="w-full rounded-md border border-green-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
      />
      <div className="relative mx-auto w-full max-w-md">
        <input
          type={visible ? "text" : "password"}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
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

      <button
        className="mt-5 w-full rounded-md bg-adminPrimary py-2 text-white hover:bg-green-700"
        onClick={onSubmit}
      >
        Register
      </button>
    </div>
  );
}
