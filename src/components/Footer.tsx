import { FunctionComponent, type CSSProperties } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
  style?: CSSProperties;
};

const Footer: FunctionComponent<FooterType> = ({ className = "", style }) => {
  const handleLinkClick = (linkName: string) => {
    console.log(`Footer link clicked: ${linkName}`);
  };

  return (
    <div className={[styles.footer, className].join(" ")} style={style}>
      <div
        className={styles.footerLinks}
        onClick={() => handleLinkClick("Legal information")}
      >
        Legal information
      </div>
      <div
        className={styles.footerLinks}
        onClick={() => handleLinkClick("Accessibility and disability")}
      >
        Accessibility and disability
      </div>
      <div
        className={styles.footerLinks}
        onClick={() => handleLinkClick("Cookies")}
      >
        Cookies
      </div>
      <div
        className={styles.footerLinks}
        onClick={() => handleLinkClick("Privacy")}
      >
        Privacy
      </div>
      <div
        className={styles.footerLinks}
        onClick={() => handleLinkClick("Sitemap")}
      >
        Sitemap
      </div>
    </div>
  );
};

export default Footer;
