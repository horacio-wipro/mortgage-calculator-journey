import { FunctionComponent } from "react";
import styles from "./TitleAndContent.module.css";

export type TitleAndContentType = {
  className?: string;
  headerText?: string;
  content?: string;
  secondaryContent?: string;
  title?: string;
};

const TitleAndContent: FunctionComponent<TitleAndContentType> = ({
  className = "",
  headerText,
  content,
  title,
  secondaryContent,
}) => {
  const hasContent = content || secondaryContent;

  return (
    <div className={[styles.titleandcontent, className].join(" ")}>
      {headerText && <div className={styles.strongMortgage}>{headerText}</div>}
      {title && <h1 className={styles.heading1}>{title}</h1>}
      {hasContent && (
        <div className={styles.copy}>
          {content && <div className={styles.content}>{content}</div>}
          {secondaryContent && (
            <div className={styles.secondaryContent}>{secondaryContent}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default TitleAndContent;
