import { FunctionComponent } from "react";
import styles from "./AlertBox.module.css";
import Button from "./Button";

export type AlertBoxType = {
  className?: string;
  icon?: string;
  heading?: string;
  primaryContent?: string;
  secondaryContent?: string;
  tertiaryContent?: string;
  showButton?: boolean;
};

const AlertBox: FunctionComponent<AlertBoxType> = ({
  className = "",
  icon = "/svg-5.svg",
  heading,
  primaryContent,
  secondaryContent,
  tertiaryContent,
  showButton = true,
}) => {
  return (
    <div className={[styles.alertbox, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            className={styles.svgIcon}
            alt="Info icon"
            src={icon}
            onError={(e) => {
              console.error("Icon failed to load:", icon);
              e.currentTarget.style.display = "none";
            }}
          />
          <div className={styles.heading3}>{heading}</div>
        </div>
        <div className={styles.content}>
          {primaryContent && (
            <p className={styles.paragraph}>{primaryContent}</p>
          )}
          {secondaryContent && (
            <p className={styles.paragraph}>{secondaryContent}</p>
          )}
          {tertiaryContent && (
            <p className={styles.paragraph}>{tertiaryContent}</p>
          )}
          {showButton && (
            <Button text="Start Agreement in Principle" property1="Secondary" />
          )}
        </div>
      </div>
    </div>
  );
};

export default AlertBox;
