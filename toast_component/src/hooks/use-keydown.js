import React from "react";
const useKeyDown = (key, callback) => {
  React.useEffect(() => {
    // add the event listener
    const handleEventListener = (event) => {
      if (event.code === key) {
        callback(event);
      }
    };

    window.addEventListener("keydown", handleEventListener);

    return () => {
      window.removeEventListener("keydown", handleEventListener);
    };
  }, [key, callback]);
};

export default useKeyDown;
