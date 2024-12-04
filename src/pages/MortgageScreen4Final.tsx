import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import Back from "../components/Back";
import Button from "../components/Button";
import Container1 from "../components/Container1";
import Footer from "../components/Footer";
import GloablNav from "../components/GloablNav";
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
          <Container1 />
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
