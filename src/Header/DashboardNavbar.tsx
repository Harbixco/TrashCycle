import { useState, useEffect } from "react";
import { Search, Settings, Bell, AlignJustify } from "lucide-react";
import { profile } from "../assets";
import { useNavigate } from "react-router-dom";
import { DashboardMobileSidebar } from "../pages";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../components/Auth/loginAuth/config/firebase";

interface UserData {
  fullName: string;
}

export default function DashboardNavbar() {
  const [toggler, setToggler] = useState(false);
  const [notify, setNotify] = useState(false);
  const navigate = useNavigate();

  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const user = auth.currentUser;
      if (!user) return;

      try {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setUserData(userSnap.data() as UserData);
        } else {
          console.error("User document not found");
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="flex  w-full items-center justify-between">
      <div className="relative w-full">
        <div
          className="mb-3 block md:hidden"
          onClick={() => setToggler(!toggler)}
        >
          <AlignJustify />
        </div>
        {toggler && (
          <div className="absolute left-[-13px] top-[-10px] z-10 h-screen w-screen bg-white">
            <DashboardMobileSidebar setToggler={setToggler} />
          </div>
        )}
        <div className="relative w-full ">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
            <Search size={20} color="#222" />
          </div>
          <input
            type="text"
            className="block w-full rounded-lg border border-[#dadada] bg-inherit px-2.5 py-[6px] ps-10 text-base text-black shadow-none outline-none focus:border-[#dadada] focus:ring-0 md:w-[85%] lg:w-[70%]"
            placeholder="Search for anything"
          />
        </div>
      </div>
      <div className="hidden w-full items-center justify-end gap-x-16 md:flex ">
        <div className="flex items-center gap-x-5">
          <div
            className="cursor-pointer"
            onClick={() => navigate("/dashboard/setting")}
          >
            <Settings size={20} color="#222" />
          </div>
          <div
            className="relative cursor-pointer "
            onClick={() => setNotify(!notify)}
          >
            <Bell size={20} color="#222" />
            {Notification.length > 0 && (
              <div className="absolute right-[-2px] top-[-4px] size-[10px] rounded-full bg-red-600"></div>
            )}
          </div>
          {notify && (
            <div className="absolute right-[70px] top-[65px] z-10 w-[320px] shadow">
              <div className="bg-primary text-white">
                <h3 className="py-2 pl-2">Notification</h3>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-x-3">
          <div className="size-12 rounded-full ">
            <img src={profile} alt="profile" className="w-full rounded-full" />
          </div>
          <div className="">
            <h2 className="font-bold">{userData?.fullName}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
