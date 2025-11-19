"use client";

import styles from "./SendButton.module.css";

type SendButtonProps = {
  disabled?: boolean;
};

export const SendButton = ({ disabled }: SendButtonProps) => {
  return (
    <button type="submit" className={styles.button} disabled={disabled}>
      <svg className={styles.icon} aria-hidden="true">
        <use href={`/images/sprite.svg#${'long-arrow'}`} />
      </svg>
    </button>
  );
};
