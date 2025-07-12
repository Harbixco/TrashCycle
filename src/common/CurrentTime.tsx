import { useEffect, useState } from "react";

export default function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000); // updates every second

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  return (
    <div className="text-sm font-semibold md:text-base">
      Current Time: {time.toLocaleTimeString()}
    </div>
  );
}
