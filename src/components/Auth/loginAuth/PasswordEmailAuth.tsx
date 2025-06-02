import { auth } from "../../../config/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../config/firebase.js";
import { useNavigate } from "react-router-dom";

export default function PasswordEmailAuth() {
  //CREATE NEW MOVIE DATA FOR DATABASE AND ALSO AUTHETICATE EMAIL AND PASSWORD
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);

  const userCollectionRef = collection(db, "users");
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      //BUTTON TO CREATE NEW MOVIE DATA IN DATABASE
      await addDoc(userCollectionRef, {
        email,
        password,
        fullName,
        phoneNumber,
      });

      const timer = setTimeout(() => {
        navigate("/verify");
      }, 2000); // 3 seconds delay

      return () => clearTimeout(timer);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
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
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border border-green-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <button
          className="mt-5 w-full rounded-md bg-adminPrimary py-2 text-white hover:bg-green-700"
          onClick={onSubmit}
        >
          Register
        </button>
      </div>
    </>
  );
}
