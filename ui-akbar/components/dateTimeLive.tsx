import { useEffect, useState } from "react";

export function DateTimeLive() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // update setiap 1 detik

    return () => clearInterval(timer); // bersihkan interval saat unmount
  }, []);

  const formattedDate = dateTime.toLocaleDateString("en-GB", {
    weekday: "long", // Senin, Selasa, dst.
    day: "2-digit",
    month: "short",  // Jan, Feb, dst.
    year: "numeric",
  });

  const formattedTime = dateTime.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <span className="text-sm text-muted-foreground">
      {formattedDate} | {formattedTime}
    </span>
  );
}
