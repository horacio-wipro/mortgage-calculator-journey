import { FunctionComponent } from "react";
import AlertBox from "../components/AlertBox";
import Button from "../components/Button";
import Footer from "../components/Footer";
import FormQuestion from "../components/FormQuestion";
import GloablNav from "../components/GloablNav";
import TitleAndContent from "../components/TitleAndContent";
import styles from "./MortgageScreen2Final.module.css";

const MortgageScreen2Final: FunctionComponent = () => {
  return (
    <div className={styles.mortgageScreen2Final}>
      <section className={styles.container}>
        <GloablNav className={styles.gloablNav} logo="/logo.svg" />
        <div className={styles.mainParent}>
          <div className={styles.main}>
            <div className={styles.container1}>
              <TitleAndContent
                className={styles.titleandcontent}
                title="Mortgage Calculator"
                content="Find out what you could borrow and how much it might cost in just a couple of minutes."
                secondaryContent="We can help you understand how much you can afford to borrow, and your interest rate and monthly payment costs."
              />
              <FormQuestion
                className={styles.gloablNav}
                isHorizontal
                questions={[
                  "See how much I could borrow",
                  "See mortgage rates and costs",
                  "Both",
                ]}
                error="Tell us what you would like to find out."
              />
            </div>
            <Button
              className={styles.button}
              showIcon
              text="Continue"
              property1="Default"
              chevron="/chevron.svg"
            />
          </div>
          <AlertBox
            className={styles.alertbox}
            primaryContent="The first step towards buying your home is getting an Agreement in Principle (AIP).
This will give you an idea of how much you could borrow before you apply for a mortgage with no impact to your credit score.
It should take around 15 mins to complete."
            icon="https://d1xzdqg8s8ggsr.cloudfront.net/2nshCpwTDuJzEeiStSS3PUUTOG6/360585b8-2ddf-4e7e-b750-411b9b563d93_1732706002259317820?Expires=-62135596800&Signature=kSgYIvYh1mm9ZdoS0lHhS7KQ-nYWCNksrmm6yR8s2EO-EB1Ui~h-pxcWC0ipcNeP0E56Wy593snlFV1HxxSbVQu8BIWrXa85n7RWmXQLLhdIEBZ3bdpruLaV0Noh7IxdreSe1FHkZ14WclLrNtWBQYDCY6rolsjCsF6Jt9Yj6FgYcmV~eWbE-4ZvSRTiwkTTSzwQYbAam5GWAdb-Y8CuwXAR-2dda0fBgpxHLC-7FLZosxbQaoOhcysWsCzZTwk~xg-Mlk3fpXb51F7eeLb12oyyuDYjd3ZvIhRedLxjqzpv5jBnsLDha2Cxh8KRVy6arSJ5JSBBaWRy9VaIueN-Kw__&Key-Pair-Id=K1P54FZWCHCL6J"
            heading="Already done your sums?"
          />
        </div>
      </section>
      <Footer className={styles.gloablNav} />
    </div>
  );
};

export default MortgageScreen2Final;
