"use client";

import { useState } from "react";
import styles from "./EmailForm.module.css";
import { SendButton } from "../SendButon/SendButton";

export const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    setIsSending(true);

    setTimeout(() => {
      alert("Форма отправлена!");
      setIsSending(false);
      setEmail("");
    }, 800);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="email"
        required
        placeholder="Ваш email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <SendButton
        disabled={isSending}
      />
    </form>
  );
};