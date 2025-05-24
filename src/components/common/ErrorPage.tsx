import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <div className="mb-10 mt-40 text-center text-xl font-semibold md:mt-20 md:text-3xl">
        Error 404! Page not found.
      </div>

      <div className="mb-20 text-center md:text-2xl">
        <Link to="/">
          <span className="text-[#174568] underline">
            {" "}
            Go back to home page
          </span>
        </Link>
      </div>
    </>
  );
}
