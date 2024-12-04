import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Alert1.module.css";

export type Alert1Type = {
  className?: string;
  text?: string;

  /** Style props */
  alertAlignSelf?: CSSProperties["alignSelf"];
  alertHeight?: CSSProperties["height"];
};

const Alert1: FunctionComponent<Alert1Type> = ({
  className = "",
  text = "Error message",
  alertAlignSelf,
  alertHeight,
}) => {
  const alertStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: alertAlignSelf,
      height: alertHeight,
    };
  }, [alertAlignSelf, alertHeight]);

  return (
    <div className={[styles.alert, className].join(" ")} style={alertStyle}>
      <img className={styles.svgIcon} loading="lazy" alt="" src="/svg-3.svg" />
      <div className={styles.alert1}>{text}</div>
    </div>
  );
};

export default Alert1;
