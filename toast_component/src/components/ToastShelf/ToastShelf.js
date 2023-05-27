import React, { useContext } from "react";
import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { allToasts, handleToastDismiss } = useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {allToasts.map(({ id, message, variant }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast
              handleToastDismiss={() => handleToastDismiss(id)}
              message={message}
              variant={variant}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
