import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const cancelLogout = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          Are you sure you want to logout?
        </h2>
        <p className="mb-6 text-gray-600">
          You will be signed out of your account.
        </p>

        <div className="flex justify-center gap-4">
          <button
            className="rounded bg-red-600 px-6 py-2 text-white transition hover:bg-red-700"
            onClick={handleLogout}
          >
            Yes, Logout
          </button>
          <button
            className="rounded bg-gray-200 px-6 py-2 text-gray-800 transition hover:bg-gray-300"
            onClick={cancelLogout}
          >
            No, Stay
          </button>
        </div>
      </div>
    </div>
  );
}
