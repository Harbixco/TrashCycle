import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { slide2 } from "../../assets";

export default function LocationSuccesful() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="mt-16 flex flex-col items-center justify-center px-4">
      <div>
        <img src={slide2} alt="slide2" className="size-52" />
      </div>

      <div className="pb-5 text-2xl font-semibold">Hurray!</div>

      <div>Location has been successfully enabled</div>
    </div>
  );
}
