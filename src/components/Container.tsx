import { FunctionComponent } from "react";
import Button from "./Button";
import styles from "./Container.module.css";

export type ContainerType = {
  className?: string;
};

const Container: FunctionComponent<ContainerType> = ({ className = "" }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.background}>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <div className={styles.margin}>
              <div className={styles.container3}>
                <div className={styles.container4}>
                  <img className={styles.svgIcon} alt="" src="/svg-4.svg" />
                </div>
              </div>
            </div>
            <div className={styles.container5}>
              <div className={styles.container6}>
                <div className={styles.container7}>
                  <div className={styles.heading}>
                    <div className={styles.youCouldBorrow}>
                      You could borrow up to £157,150 over a term of 25 years.
                    </div>
                  </div>
                  <div className={styles.container8}>
                    <div className={styles.ifYourCircumstances}>
                      If your circumstances change you might be able to borrow
                      more.
                    </div>
                  </div>
                  <div className={styles.link}>
                    <div className={styles.editMyDetails}>Edit my details</div>
                    <div className={styles.container9}>
                      <img
                        className={styles.svgIcon1}
                        alt=""
                        src="/svg-5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.background1}>
        <div className={styles.container6}>
          <div className={styles.container11}>
            <div className={styles.heading}>
              <div className={styles.nowLetsFind}>
                Now, let's find you some mortgage deals...
              </div>
            </div>
            <div className={styles.container12}>
              <div className={styles.ifYourCircumstances}>
                The amount you can borrow could change if your Loan to Value
                (LTV) amount goes up or down.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container13}>
          <div className={styles.container14}>
            <div className={styles.background2}>
              <div className={styles.container15}>
                <form className={styles.container16}>
                  <div className={styles.form}>
                    <div className={styles.container17}>
                      <b className={styles.propertyValue}>Property value</b>
                      <div className={styles.container18}>
                        <div className={styles.input}>
                          <input
                            className={styles.input1}
                            placeholder="£"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.container19}>
                      <b className={styles.depositAmount}>Deposit amount</b>
                      <div className={styles.container18}>
                        <div className={styles.input}>
                          <input
                            className={styles.input1}
                            placeholder="£"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.container21}>
                      <div className={styles.heading}>
                        <div className={styles.labelmargin}>
                          <div className={styles.heading}>
                            <b className={styles.propertyValue}>
                              Mortgage term (years)
                            </b>
                          </div>
                        </div>
                        <div className={styles.input4}>
                          <input
                            className={styles.container23}
                            placeholder="25"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className={styles.button}
                    text="Search and recalculate"
                    property1="Default"
                  />
                </form>
                <div className={styles.container24}>
                  <div className={styles.container25}>
                    <div className={styles.container26}>
                      <div className={styles.container27}>
                        <div className={styles.container28}>
                          <div className={styles.container29}>
                            <div className={styles.margin1}>
                              <div className={styles.container30}>
                                <div className={styles.container31}>
                                  <b className={styles.loanToValue}>
                                    Loan to Value
                                  </b>
                                </div>
                                <div className={styles.button1}>
                                  <div className={styles.whatIsThis}>
                                    What is this?
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.container32}>
                              <div className={styles.background3}>
                                <div className={styles.background4}>
                                  <div className={styles.container33}>
                                    <b className={styles.b}>0%</b>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
