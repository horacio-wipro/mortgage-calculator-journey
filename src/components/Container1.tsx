import { FunctionComponent } from "react";
import TitleAndContent from "./TitleAndContent";
import FormQuestion from "./FormQuestion";
import styles from "./Container1.module.css";

export type Container1Type = {
  className?: string;
};

const Container1: FunctionComponent<Container1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <TitleAndContent
        className={styles.titleandcontent}
        title="Your outgoings"
        headerText="Mortgage Calculator"
      />
      <FormQuestion
        className={styles.formquestion}
        isHorizontal
        question="How many people rely on your income?"
        explanation="These can be children or adults of any age."
        questions={["0", "1", "2", "3 or more"]}
        error="Let us know how many people rely on your income."
      />
      <FormQuestion
        className={styles.formquestion1}
        isNumberInput
        question="Do you have any credit card balances?"
        explanation="If so, please tell us the total amount outstanding."
      />
      <FormQuestion
        className={styles.formquestion1}
        isNumberInput
        question="Do you have any loans you pay back monthly?"
        explanation="If so, please tell us the total amount you pay each month."
      />
      <FormQuestion
        className={styles.formquestion3}
        isNumberInput
        question="Do you have any other monthly expenses?"
        explanation="If so, please tell us how much you pay each month for things like childcare costs, electrical items, or furniture."
      />
    </div>
  );
};

export default Container1;
