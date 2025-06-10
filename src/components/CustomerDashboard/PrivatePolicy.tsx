export default function PrivatePolicy() {
  return (
    <>
      <div className="py-5 text-center text-lg font-semibold md:text-2xl">
        Privacy Policy
      </div>

      <div className="mx-auto flex min-h-screen w-5/6 flex-col bg-white font-sans text-xs md:text-sm">
        <div>
          At TrashCycle, we care about your privacy. When you use our service to
          book trash pickups and make payments, we collect necessary information
          like your name, address, contact details, and payment info.
        </div>

        <div className="py-3">We use this to:</div>

        <div>
          <ol className="list-decimal pl-5">
            <li>Process your orders and payments.</li>
            <li>Communicate with you about your service.</li>
            <li>Improve how our service works.</li>
          </ol>
        </div>

        <div className="py-3">
          <div className="pb-2 font-semibold md:text-lg">
            Brief Privacy Policy At TrashCycle
          </div>
          we care about your privacy. When you use our service to book trash
          pickups and make payments, we collect necessary information like your
          name, address, contact details, and payment info. We use this to:
          Process your orders and payments. Communicate with you about your
          service. Improve how our service works. We share your data only with
          trusted partners (like our payment processor and truck operators) to
          deliver the service you requested. We protect your information with
          reasonable security measures.
        </div>

        <div>
          You have rights over your data; contact us at [Your Contact Email] if
          you have questions.
        </div>

        <div className="pt-3">Thanks</div>
      </div>
    </>
  );
}
