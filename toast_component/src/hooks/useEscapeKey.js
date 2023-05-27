import React from "react";
const useEscapeKey = (callback) => {
  console.log(`React`);
  React.useEffect(() => {
    // add the event listener
    const handleEventListener = (event) => {
      if (event.code === "Escape") {
        callback(event);
      }
    };

    window.addEventListener("keydown", handleEventListener);

    return () => {
      window.removeEventListener("keydown", handleEventListener);
    };
  }, [callback]);
};

export default useEscapeKey;
