
import styles from "./Footer.module.css";

import { FooterTop } from "./FooterTop";
import { FooterBottom } from "./FooterBottom";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};