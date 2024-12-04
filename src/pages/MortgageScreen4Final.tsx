import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import Back from "../components/Back";
import Button from "../components/Button";
import Footer from "../components/Footer";
import FormQuestion from "../components/FormQuestion";
import GloablNav from "../components/GloablNav";
import TitleAndContent from "../components/TitleAndContent";
import styles from "./MortgageScreen4Final.module.css";

const MortgageScreen4Final: FunctionComponent = () => {
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate("/mortgage-screen-5-final");
  };

  return (
    <div className={styles.mortgageScreen4Final}>
      <main className={styles.container}>
        <GloablNav className={styles.gloablNav} logo="/logo.svg" />
        <section className={styles.main}>
          <Back
            iconRight={false}
            text="Back"
            sVG="/svg-2.svg"
            onClick={() => navigate("/mortgage-screen-3-final")}
          />
          <hr className={styles.horizontalRule} />
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
          <div className={styles.backParent}>
            <Back
              iconRight={false}
              text="Back"
              sVG="/svg-2.svg"
              onClick={() => navigate("/mortgage-screen-3-final")}
            />
            <Button
              className={styles.button}
              property1="Default"
              onClick={handleContinue}
            />
          </div>
        </section>
      </main>
      <Footer className={styles.gloablNav} />
    </div>
  );
};

export default MortgageScreen4Final;
