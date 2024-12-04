import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.link}>
            <div className={styles.container2}>
              <img className={styles.svgIcon} alt="" src="/svg-2.svg" />
            </div>
            <a className={styles.back}>Back</a>
          </div>
        </div>
        <div className={styles.container3}>
          <div className={styles.link1}>
            <div className={styles.link}>
              <div className={styles.link1}>
                <a className={styles.back}>Continue</a>
              </div>
              <div className={styles.container2}>
                <img className={styles.svgIcon} alt="" src="/svg-3.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
