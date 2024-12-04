import { FunctionComponent } from "react";
import styles from "./Back.module.css";

export type BackType = {
  className?: string;
  iconRight?: boolean;
  text?: string;
  sVG?: string;
  sVG1?: string;
};

const Back: FunctionComponent<BackType> = ({
  className = "",
  iconRight = false,
  text = "Back",
  sVG,
  sVG1,
}) => {
  return (
    <div className={[styles.back, className].join(" ")}>
      <img className={styles.svgIcon} loading="lazy" alt="" src={sVG} />
      <a className={styles.back1}>{text}</a>
      {iconRight && <img className={styles.svgIcon1} alt="" src={sVG1} />}
    </div>
  );
};

export default Back;
