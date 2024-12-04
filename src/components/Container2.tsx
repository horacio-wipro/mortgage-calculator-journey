import { FunctionComponent } from "react";
import TitleAndContent from "./TitleAndContent";
import FormQuestion from "./FormQuestion";
import styles from "./Container2.module.css";

export type Container2Type = {
  className?: string;
};

const Container2: FunctionComponent<Container2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <TitleAndContent
        className={styles.titleandcontent}
        title="Your income"
        headerText="Mortgage Calculator"
      />
      <FormQuestion
        className={styles.formquestion}
        isNumberInput
        question="In your main job, are you employed or self-employed?"
        questions={["Employed", "Self-employed"]}
        error="Let us know if you're employed or self-employed."
      />
      <FormQuestion
        className={styles.formquestion}
        isNumberInput
        question="How much do you earn each year, before tax?"
        explanation="Just tell us your basic income for now."
        questions={["Yes", "No"]}
        error="Let us know your income."
      />
      <FormQuestion
        className={styles.formquestion2}
        isHorizontal
        question="Do you have any additional income?"
        explanation="This could be income from a second or part-time job, property, pensions, bonuses, overtime, commission or any benefits and allowances you receive from the government or your employer."
        questions={["Yes", "No"]}
        error="Let us know if you have any additional income."
      />
      <FormQuestion
        className={styles.formquestion}
        isNumberInput
        question="Are you paid any bonuses?"
        explanation="If so, please tell us your yearly bonus amount before tax."
      />
      <FormQuestion
        className={styles.formquestion}
        isNumberInput
        question="Are you paid any commission?"
        explanation="If so, please tell us your yearly bonus amount before tax."
      />
      <FormQuestion
        className={styles.formquestion5}
        isNumberInput
        question="Are you paid overtime?"
        explanation="If so, please tell us your yearly overtime amount before tax. If your overtime isn't always the same, please tell us the average amount received over the year."
      />
      <FormQuestion
        className={styles.formquestion5}
        isNumberInput
        question="Apart from the payments you’ve just told us about, are you paid any other money?"
        explanation="If so, please tell us the total yearly amount of other payments before tax. If your payments aren’t always the same, please tell us the average amount received over the year."
      />
    </div>
  );
};

export default Container2;
