import { progressIcon } from "../../assets";
import { PickCalendar, Time } from "../../common";

export default function SchedulePickups() {
  return (
    <div>
      <div className="flex items-center justify-center bg-white px-4">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-2xl font-semibold">Schedule PickUps</div>
          <div className="pl-7">
            <img src={progressIcon} alt="" />
          </div>

          <div className="flex justify-between">
            <div>
              <PickCalendar />
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
