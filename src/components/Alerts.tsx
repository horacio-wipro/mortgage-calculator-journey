import { FunctionComponent } from "react";
import styles from "./Alerts.module.css";

export type AlertsType = {
  className?: string;
  text?: string;
};

const Alerts: FunctionComponent<AlertsType> = ({
  className = "",
  text = "If there's more than one applicant and anyone is a first time buyer, select 'Yes'.",
}) => {
  return (
    <div className={[styles.alerts, className].join(" ")}>
      <img className={styles.svgIcon} loading="lazy" alt="" src="/svg-5.svg" />
      <div className={styles.ifTheresMore}>{text}</div>
    </div>
  );
};

export default Alerts;
