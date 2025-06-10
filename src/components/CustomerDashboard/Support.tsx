/* eslint-disable tailwindcss/no-custom-classname */
export default function Support() {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-4 pt-5 md:pt-0">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Help & Support
          </h1>

          <div className="grid justify-items-center">
            <h2 className="mb-6 mt-4 text-2xl font-semibold">
              How can we help
            </h2>

            <div className="mb-10 w-[300px] md:w-[400px]">
              <input
                type="text"
                placeholder="Find anything"
                className="mx-auto w-full max-w-md rounded-lg border border-gray-300 p-3 focus:ring-gray-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <p className="font-semibold text-gray-800">Why Choose Ecolife?</p>
              <p className="pt-1.5 text-sm">
                Sustainable solutions, eco-friendly products, healthier living,
                save the planet today.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <p className="font-semibold text-gray-800">What is Dustbin?</p>
              <p className="pt-1.5 text-sm">
                Dustbin a large container for rubbish from a house or other
                building, usually made of strong plastic or metal and kept
                outside
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <p className="font-semibold text-gray-800">Why Choose Ecolife?</p>
              <p className="pt-1.5 text-sm">
                Sustainable solutions, eco-friendly products, healthier living,
                save the planet today.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <p className="font-semibold text-gray-800">
                Is Dustbin app free to use?
              </p>
              <p className="pt-1.5 text-sm">
                Yes, the Dustbin app is free to use! We are committed to
                providing everyone with easy access to effective waste
                management tools and resources.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <p className="font-semibold text-gray-800">
                How do I make a request on Dustbin?
              </p>
              <p className="pt-1.5 text-sm">
                Making a request on the Dustbin app is simple and
                straightforward. Follow these steps to report a waste issue or
                request a service:
                <div>1.Open the Dustbin Website</div>
                <div>2.Log In to Your Account</div>
                <div>3.Navigate to the Reporting Tool</div>
                <div>4.Select the Type of Request</div>
                <div>5.Fill Out the Request Form</div>
                <div>6.Submit Your Request</div>
                <div>7.Track Your Request</div>
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <p className="font-semibold text-gray-800">Why Choose Ecolife?</p>
              <p className="pt-1.5 text-sm">
                Sustainable solutions, eco-friendly products, healthier living,
                save the planet today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
