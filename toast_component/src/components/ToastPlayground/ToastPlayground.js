import React from "react";

import Button from "../Button";

import ToastShelf from "../ToastShelf/ToastShelf";
import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [allToasts, setAllToasts] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newAllToasts = [...allToasts];
    newAllToasts.push({
      id: crypto.randomUUID(), // this id does not change on subsequent re-renders
      message,
      variant,
    });
    setAllToasts(newAllToasts);
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  };

  const handleMessageOnChange = (event) => {
    setMessage(event.target.value);
  };

  const handleVariantOnChange = (event) => {
    setVariant(event.target.value);
  };

  const handleToastDismiss = (id) => {
    const newAllToasts = allToasts.filter((item) => item.id !== id);
    setAllToasts(newAllToasts);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf
        allToasts={allToasts}
        setAllToasts={setAllToasts}
        handleToastDismiss={handleToastDismiss}
      />
      {JSON.stringify(allToasts)}
      <div className={styles.controlsWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                value={message}
                onChange={handleMessageOnChange}
                id="message"
                className={styles.messageInput}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((item, index) => {
                return (
                  <label key={index} htmlFor={item}>
                    <input
                      id={item}
                      type="radio"
                      name="variant"
                      value={item}
                      checked={variant === item}
                      onChange={handleVariantOnChange}
                    />
                    {item}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button type="submit">Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
