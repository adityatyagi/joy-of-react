import React from "react";
import useKeyDown from "../../hooks";

const initialState = [];
export const ToastContext = React.createContext(initialState);
const ToastProvider = ({ children }) => {
  const [allToasts, setAllToasts] = React.useState([]);

  const addToasts = ({ message, variant }) => {
    const newAllToasts = [
      ...allToasts,
      {
        id: crypto.randomUUID(), // this id does not change on subsequent re-renders
        message,
        variant,
      },
    ];
    setAllToasts(newAllToasts);
  };
  const handleToastDismiss = (id) => {
    const newAllToasts = allToasts.filter((item) => item.id !== id);
    setAllToasts(newAllToasts);
  };

  const resetAll = React.useCallback(() => {
    setAllToasts([]);
  }, []);

  useKeyDown("Escape", resetAll);

  const toastProviderValue = {
    allToasts,
    resetAll,
    addToasts,
    handleToastDismiss,
  };
  return (
    <ToastContext.Provider value={toastProviderValue}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
