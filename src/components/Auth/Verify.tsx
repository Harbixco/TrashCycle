export default function Verify() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-white p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-6 text-center shadow-lg sm:p-8 md:p-10">
          <div className="mb-6 flex justify-center">
            <img
              src="https://placehold.co/100x100/27662A/ffffff?text=✔"
              alt="Success Icon"
              className="rounded-full"
            />
          </div>

          <h1 className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl">
            Thank You for Registering!
          </h1>

          <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
            A verification email has been sent to your inbox. Please check your
            email and click on the link to activate your account.
          </p>

          <p className="mt-6 text-xs text-gray-500 sm:text-sm">
            Didn't receive the email?{" "}
            <a
              href="#"
              className="font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800"
            >
              Resend verification email
            </a>
          </p>
          <div className="pt-3">
            <span>Verified?</span>
            <span>
              <a href="/login" className="pl-2 text-blue-600">
                login
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
