import { progressIcon } from "../../assets";
import DateAndTime from "../Scedule-pickup/DateAndTime";
import SelectAddress from "../Scedule-pickup/SelectAddress";

export default function SchedulePickups() {
  return (
    <div>
      <div className="bg-white px-4">
        <div className="flex items-center justify-center">
          <div className="mb-5 w-full">
            <p className="pb-2 text-center text-2xl font-semibold">
              Schedule PickUps
            </p>
            <div className="mx-auto block w-20">
              <img src={progressIcon} alt="" />
            </div>
          </div>
        </div>
        <div>
          <DateAndTime />
        </div>

        <div>
          <SelectAddress />
        </div>
      </div>
    </div>
  );
}
