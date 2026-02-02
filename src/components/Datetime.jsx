import React, { useEffect, useState } from "react";

const Datetime = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const day = now.toLocaleDateString("en-US", { weekday: "short" });
  const date = now.getDate();
  const month = now.toLocaleDateString("en-US", { month: "short" });
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="datetime">
      {day} {date} {month} {time}
    </div>
  );
};

export default Datetime;
