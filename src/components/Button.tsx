import { FunctionComponent } from "react";
import styles from "./Button.module.css";

export type ButtonType = {
  className?: string;
  text?: string;
  showIcon?: boolean;
  chevron?: string;

  /** Variant props */
  property1?: "Default" | "Secondary";

  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  property1 = "Default",
  text = "Continue",
  showIcon = true,
  chevron = "/chevron.svg",
  onClick,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`${text} Button clicked update works!`);
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={[styles.root, className].join(" ")}
      data-property1={property1}
      onClick={handleClick}
    >
      <div className={styles.continue}>{text}</div>
      {showIcon && <img className={styles.chevronIcon} alt="" src={chevron} />}
    </button>
  );
};

export default Button;
