import React, { useEffect } from "react";
import format from "date-fns/format";

function Clock() {
  const [time, setTime] = React.useState(new Date());
  useEffect(() => {
    const timeIntervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000 * 1);

    return () => {
      window.clearInterval(timeIntervalId);
    };
  }, []);
  return (
    <>
      <p className="clock">{format(time, "hh:mm:ss a")}</p>
    </>
  );
}

export default Clock;
