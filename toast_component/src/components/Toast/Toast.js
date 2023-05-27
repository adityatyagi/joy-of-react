import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, message, handleToastDismiss }) {
  const [showToast, setShowToast] = React.useState(true);

  const handleDismissToast = () => {
    setShowToast(false);
    handleToastDismiss();
  };
  const Icon = ICONS_BY_VARIANT[variant];
  return (
    <>
      {showToast && (
        <div className={`${styles.toast} ${styles[variant]}`}>
          <div className={styles.iconContainer}>
            <Icon size={24} />
          </div>
          <p className={styles.content}>
            <VisuallyHidden>{variant + " - "}</VisuallyHidden>
            {message}
          </p>
          <button
            className={styles.closeButton}
            onClick={handleDismissToast}
            aria-label="Dismiss message"
            aria-live="off"
          >
            <X size={24} />
            {/* <VisuallyHidden>Dismiss message</VisuallyHidden> */}
          </button>
        </div>
      )}
    </>
  );
}

export default Toast;
