import { FunctionComponent } from "react";
import GloablNav from "./GloablNav";
import styles from "./Headermargin.module.css";

export type HeadermarginType = {
  className?: string;
};

const Headermargin: FunctionComponent<HeadermarginType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.headermargin, className].join(" ")}>
      <GloablNav className={styles.header} logo="/logo.svg" />
    </div>
  );
};

export default Headermargin;
