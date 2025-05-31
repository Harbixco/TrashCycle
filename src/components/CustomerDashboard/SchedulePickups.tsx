import { progressIcon } from "../../assets";
import { PickCalendar, Time } from "../../common";

export default function SchedulePickups() {
  return (
    <div>
      <div className="bg-white px-4">
        <div className="w-full max-w-sm space-y-6">
          <div className="">
            <div className="text-2xl font-semibold">Schedule PickUps</div>
            <div className="pl-7">
              <img src={progressIcon} alt="" />
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <div>Pick a Day</div>
              <div>
                <PickCalendar />
              </div>
            </div>

            <div>
              <Time />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
