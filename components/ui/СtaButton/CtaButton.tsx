


"use client";

import Link from "next/link";
import styles from "./CtaButton.module.css";

type CtaButtonProps = {
  title?: string; 
};

export const CtaButton = ({ title = "Перейти в каталог" }: CtaButtonProps) => {
  return (
    <Link href="/catalog" className={styles.button}>
      {title}
    </Link>
  );
};