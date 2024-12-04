import { FunctionComponent } from "react";
import GloablNav from "./GloablNav";
import Button from "./Button";
import Footer from "../components/Footer";
import Back from "../components/Back";
import Container1 from "../components/Container1";
import styles from "./MortgageScreen4Final.module.css";

const MortgageScreen4Final: FunctionComponent = () => {
  return (
    <div className={styles.mortgageScreen4Final}>
      <main className={styles.container}>
        <GloablNav className={styles.gloablNav} logo="/logo.svg" />
        <section className={styles.main}>
          <Back
            iconRight={false}
            text="Back"
            sVG="/svg-2.svg"
            sVG1="/svg2.svg"
          />
          <Container1 />
          <div className={styles.backParent}>
            <Back
              iconRight={false}
              text="Back"
              sVG="/svg-2.svg"
              sVG1="/svg2.svg"
            />
            <Button className={styles.button} property1="" />
          </div>
        </section>
      </main>
      <Footer className={styles.gloablNav} />
    </div>
  );
};

export default MortgageScreen4Final;
