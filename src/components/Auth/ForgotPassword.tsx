export default function ForgotPassword() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-semibold text-black">Reset Password</h2>
        </div>

        {/* Input fields */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-md border border-green-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button className="w-full rounded-md bg-green-800 py-2 text-white hover:bg-green-700">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}
