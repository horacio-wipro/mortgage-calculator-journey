import { FunctionComponent } from "react";
import styles from "./Back.module.css";

export type BackType = {
  className?: string;
  text?: string;
  iconRight?: boolean;
  sVG?: string;
  sVG1?: string;
  onClick?: () => void;
};

const Back: FunctionComponent<BackType> = ({
  className = "",
  text = "Back",
  iconRight = false,
  sVG,
  sVG1,
  onClick,
}) => {
  return (
    <button className={[styles.back, className].join(" ")} onClick={onClick}>
      {!iconRight && sVG && <img className={styles.icon} alt="" src={sVG} />}
      <span>{text}</span>
      {iconRight && sVG1 && <img className={styles.icon} alt="" src={sVG1} />}
    </button>
  );
};

export default Back;
