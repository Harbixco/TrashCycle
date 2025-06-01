import { PickCalendar, Time } from "../../common";

export default function DateAndTime() {
  return (
    <div className="flex justify-around text-lg font-semibold">
      <div>
        <div className="pb-2">Pick a Day</div>
        <div>
          <PickCalendar />
        </div>
      </div>

      <div>
        <div className="pb-2">Select time</div>
        <div>
          <Time />
        </div>
      </div>
    </div>
  );
}
