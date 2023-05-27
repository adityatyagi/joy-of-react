import React from "react";
import "./uselessMachine.style.css";

function UselessMachine() {
  const id = React.useId();
  const [isOn, setIsOn] = React.useState(true);

  React.useEffect(() => {
    // ignore the render when the switch is on
    if (isOn) {
      return;
    }
    const interval = setTimeout(() => {
      setIsOn(true);
    }, 500);
    return () => clearTimeout(interval);
  }, [isOn]);

  return (
    <>
      <input
        id={id}
        type="checkbox"
        checked={isOn}
        onChange={(event) => {
          setIsOn(event.target.checked);
        }}
      />
    </>
  );
}

export default UselessMachine;
