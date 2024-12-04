import { FunctionComponent, type CSSProperties } from "react";
import styles from "./GloablNav.module.css";

export type GloablNavType = {
  className?: string;
  logo?: string;
  style?: CSSProperties;
};

const GloablNav: FunctionComponent<GloablNavType> = ({
  className = "",
  logo,
  style,
}) => {
  return (
    <div className={[styles.gloablNav, className].join(" ")} style={style}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img className={styles.logoIcon} loading="lazy" alt="" src={logo} />
          <img
            className={styles.logoIcon1}
            loading="lazy"
            alt=""
            src="/logo1.svg"
          />
        </div>
        <div className={styles.items}>
          <div className={styles.safeSecure}>{`Safe & Secure`}</div>
          <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
        </div>
      </div>
    </div>
  );
};

export default GloablNav;
