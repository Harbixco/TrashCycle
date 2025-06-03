import { google } from "../../../assets";
import { auth, googleProvider } from "./config/firebase";
import { signInWithPopup } from "firebase/auth";

export default function GoogleAuth() {
  //SIGN IN WITH GOOGLE BUTTON FUNCTION
  const signinWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("succesfully Login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button>
        <img
          src={google}
          alt="Google"
          className="size-6"
          onClick={signinWithGoogle}
        />
      </button>
    </div>
  );
}
