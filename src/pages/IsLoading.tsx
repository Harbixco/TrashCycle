export default function LoadingDashboard() {
  return (
    <div className="flex items-center justify-center bg-white p-6">
      <div className="flex w-full max-w-6xl animate-pulse flex-col gap-6 lg:flex-row">
        {/* Left Panel */}
        <div className="flex-1 space-y-4">
          {/* User Info Card */}
          <div className="rounded-lg bg-gray-100 p-6 shadow">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="mb-2 h-5 w-48 rounded bg-gray-300 blur-sm"></h2>
                <p className="mb-1 h-4 w-56 rounded bg-gray-200 blur-sm"></p>
                <p className="h-4 w-60 rounded bg-gray-200 blur-sm"></p>
              </div>
              <div className="size-16 rounded-full bg-gray-300 blur-sm"></div>
            </div>
          </div>

          {/* Scheduled Pickups Section */}
          <div className="space-y-2">
            <h3 className="h-5 w-40 rounded bg-gray-300 blur-sm"></h3>
            <p className="mb-2 h-4 w-48 rounded bg-gray-200 blur-sm"></p>

            {/* Address Card */}
            <div className="flex items-start justify-between rounded-lg bg-gray-100 p-4 shadow">
              <div>
                <p className="mb-2 h-5 w-40 rounded bg-gray-300 blur-sm"></p>
                <p className="h-4 w-80 rounded bg-gray-200 blur-sm"></p>
              </div>
              <button className="rounded-md bg-green-100 px-3 py-1 font-semibold text-green-700 blur-sm">
                Edit
              </button>
            </div>

            {/* Waste Type Card */}
            <div className="flex items-start justify-between rounded-lg bg-gray-100 p-4 shadow">
              <div>
                <p className="mb-2 h-5 w-32 rounded bg-gray-300 blur-sm"></p>
                <p className="mb-1 h-4 w-64 rounded bg-gray-200 blur-sm"></p>
                <p className="h-4 w-32 rounded bg-gray-200 blur-sm"></p>
              </div>
              <button className="rounded-md bg-green-100 px-3 py-1 font-semibold text-green-700 blur-sm">
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* Calendar Panel */}
        <div className="w-full rounded-lg bg-gray-100 p-4 shadow lg:w-72">
          <div className="mb-4 flex items-center justify-between">
            <div className="h-5 w-20 rounded bg-gray-300 blur-sm"></div>
            <div className="flex gap-2">
              <div className="size-5 rounded bg-gray-300 blur-sm"></div>
              <div className="size-5 rounded bg-gray-300 blur-sm"></div>
            </div>
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {Array.from({ length: 35 }).map((_, i) => (
              <div
                key={i}
                className="h-8 w-full rounded bg-gray-200 blur-sm"
              ></div>
            ))}
          </div>

          {/* Calendar Buttons */}
          <div className="mt-6 flex justify-between">
            <div className="h-10 w-24 rounded bg-gray-300 blur-sm"></div>
            <div className="h-10 w-20 rounded bg-gray-300 blur-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
