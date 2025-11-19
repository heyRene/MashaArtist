"use client";
import styles from "./FooterTop.module.css";
import { FooterNav } from "../FooterNav/FooterNav";
import { EmailForm } from "../ui/EmailForm/EmailForm";

export const FooterTop = () => {
  return (
    <div className={styles.top}>
      <div className={styles.inner}>
        <div className={styles.nav}>
          <FooterNav />
        </div>
        <div className={styles.form}>
          <div className={styles.heading}>
            <h2 className={styles.title}>Связаться с Марией</h2>
            <span className={styles.decor}></span>
          </div>
          <EmailForm />
        </div>
      </div>
    </div>
  );
};
