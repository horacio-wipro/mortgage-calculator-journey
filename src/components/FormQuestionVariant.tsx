import { FunctionComponent } from "react";
import Alert1 from "./Alert1";
import Selection1 from "./Selection1";
import styles from "./FormQuestionVariant.module.css";

export type FormQuestionVariantType = {
  className?: string;
};

const FormQuestionVariant: FunctionComponent<FormQuestionVariantType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.formquestionvariant1, className].join(" ")}>
      <Alert1
        className={styles.alert}
        text="Tell us what you would like to find out."
      />
      <div className={styles.selection}>
        <Selection1
          className={styles.selection1}
          text="See how much I could borrow"
        />
        <Selection1
          className={styles.selection1}
          text="See mortgage rates and costs"
        />
        <Selection1 className={styles.selection1} text="Both" />
      </div>
    </div>
  );
};

export default FormQuestionVariant;
