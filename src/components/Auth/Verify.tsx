import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Verify() {
  const [code, setCode] = useState(["", "", "", ""]);
  const [activeInput, setActiveInput] = useState(0);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9a-zA-Z]{0,1}$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 3) {
        setActiveInput(index + 1);
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      setActiveInput(index - 1);
    }
  };

  const handleVerify = () => {
    alert("Verifying code: " + code.join(""));
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 text-center ">
        <h2 className="mb-2 text-xl font-semibold">Verify your Email</h2>
        <p className="mb-6 text-sm text-gray-600">
          Verify your account using the code sent to your email
        </p>

        <div className="mb-6 flex justify-center gap-2">
          {code.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              value={digit}
              maxLength={1}
              autoFocus={idx === activeInput}
              onChange={(e) => handleChange(e.target.value, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className="size-12 rounded border border-gray-300 text-center text-xl focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          ))}
        </div>

        <Link to="/VerifySuccesful">
          <button
            onClick={handleVerify}
            className="w-full rounded bg-green-700 py-2 font-medium text-white hover:bg-green-800"
          >
            Verify
          </button>
        </Link>

        <p className="mt-4 text-sm text-gray-600">
          Didn’t receive the code?{" "}
          <button className="font-medium text-green-600 hover:underline">
            Resent code
          </button>
        </p>
      </div>
    </div>
  );
}
