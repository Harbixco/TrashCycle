 import { useEffect, useState } from "react";

export default function GetUserLocation() {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (err) => {
        setError("Unable to retrieve location: " + err.message);
      }
    );
  }, []);

  return (
    <div>
      {location ? (
        <p>
          Your location: Latitude {location.lat}, Longitude {location.lon}
        </p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p>Getting your location...</p>
      )}
    </div>
  );
}
