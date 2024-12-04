import { FunctionComponent } from "react";
import styles from "./Selection1.module.css";

export type Selection1Type = {
  className?: string;
  text?: string;
  onPress?: (text: string) => void;
  /** Variant props */
  buttonState?: "Default" | "Error";
  isSelected?: boolean;
};

const Selection1: FunctionComponent<Selection1Type> = ({
  className = "",
  buttonState = "Default",
  text = "I want to buy a home",
  onPress,
  isSelected = false,
}) => {
  return (
    <button
      className={[styles.root, className].join(" ")}
      data-buttonstate={buttonState}
      data-selected={isSelected}
      onClick={() => {
        console.log("Selection1 clicked:", text);
        onPress?.(text);
      }}
      type="button"
      aria-pressed={isSelected}
      role="radio"
    >
      <div className={styles.selection}>{text}</div>
    </button>
  );
};

export default Selection1;
