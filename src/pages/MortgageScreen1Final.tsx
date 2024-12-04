import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import FormQuestion from "../components/FormQuestion";
import GloablNav from "../components/GloablNav";
import TitleAndContent from "../components/TitleAndContent";
import styles from "./MortgageScreen1Final.module.css";

const MortgageScreen1Final: FunctionComponent = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/mortgage-screen-2-final");
  };

  return (
    <div className={styles.mortgageScreen1Final}>
      <main className={styles.screen}>
        <GloablNav className={styles.gloablNav} logo="/logo.svg" />
        <section className={styles.screenInner}>
          <div className={styles.containerParent}>
            <div className={styles.container}>
              <TitleAndContent
                className={styles.titleandcontent}
                title="Let's get started..."
                headerText="Mortgage Calculator"
                content="Already have a Lloyds Bank mortgage and want to switch your product or borrow more?  Please visit our Existing customer tools."
                secondaryContent="Already have a Lloyds Bank mortgage and want to move home? Please select ‘I want to buy a home’."
              />
            </div>
            <div className={styles.existingMortgageMessage}>
              <div className={styles.mortgageForm}>
                <FormQuestion
                  className={styles.formquestion}
                  question="Firstly, what would you like to do?"
                  questions={[
                    "I want to buy a home",
                    "Move my mortgage to Lloyds Bank",
                    "Discuss Buy to Let mortgages",
                  ]}
                  error="Let us know if you are employed"
                />
                <div className={styles.privacyInfo}>
                  <div
                    className={styles.forHowWe}
                  >{`For how we use your personal information read our `}</div>
                  <div className={styles.fullPrivacyNotice}>
                    Full Privacy Notice.
                  </div>
                </div>
              </div>
              <div className={styles.continueButton}>
                <Button
                  text="Continue"
                  property1="Default"
                  onClick={handleContinue}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer className={styles.gloablNav} />
    </div>
  );
};

export default MortgageScreen1Final;
