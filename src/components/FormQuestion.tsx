import { FunctionComponent, useState } from "react";
import Alert1 from "./Alert1";
import styles from "./FormQuestion.module.css";
import Selection1 from "./Selection1";

export type FormQuestionType = {
  className?: string;
  question?: string;
  explanation?: string;
  error?: string;
  isError?: boolean;
  questions?: string[];
  onPress?: (question: string) => void;
  isHorizontal?: boolean;
  isNumberInput?: boolean;
  onNumberChange?: (value: string) => void;
};

const FormQuestion: FunctionComponent<FormQuestionType> = ({
  className = "",
  question = "",
  explanation = "",
  error = "Error message",
  isError = false,
  questions = [],
  onPress,
  isHorizontal = false,
  isNumberInput = false,
  onNumberChange,
}) => {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [numberValue, setNumberValue] = useState<string>("");

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNumberValue(value);
    onNumberChange?.(value);
  };

  return (
    <div className={[styles.formquestion, className].join(" ")}>
      <div className={styles.questionWrapper}>
        {question && <b className={styles.headingFirstly}>{question}</b>}
        {explanation && <p className={styles.explanation}>{explanation}</p>}
      </div>
      <section className={styles.alertParent}>
        <div className={styles.frameParent}>
          {isError && (
            <div className={styles.alertWrapper}>
              <Alert1 alertAlignSelf="unset" alertHeight="24px" text={error} />
            </div>
          )}
          {isNumberInput ? (
            <div className={styles.numberInputWrapper}>
              <input
                type="number"
                value={numberValue}
                onChange={handleNumberChange}
                className={styles.numberInput}
                placeholder="Enter number"
              />
            </div>
          ) : (
            <div
              className={[
                styles.selection,
                isHorizontal ? styles.horizontal : "",
              ].join(" ")}
            >
              {questions.map((question) => (
                <Selection1
                  key={question}
                  buttonState={isError ? "Error" : "Default"}
                  text={question}
                  isSelected={selectedQuestion === question}
                  onPress={(text) => {
                    setSelectedQuestion(text);
                    onPress?.(text);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FormQuestion;
