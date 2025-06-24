import { auth } from "./config/firebase.ts";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./config/firebase.ts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordEmailAuth() {
  //CREATE NEW MOVIE DATA FOR DATABASE AND ALSO AUTHETICATE EMAIL AND PASSWORD
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

  const userCollectionRef = collection(db, "users");
  const navigate = useNavigate();

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setErrorMsg("");

    if (email == "" || password == "" || fullName == "") {
      setErrorMsg("Fill the whole field correctly");
    } else {
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
        }, 2000);

        return () => clearTimeout(timer);
      } catch (err) {
        setErrorMsg("");
      }
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

        {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
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
