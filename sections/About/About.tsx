"use client";

import Image from "next/image";
import styles from "./About.module.css";
import { DecorativeLink } from "@/components/ui/Link/DecorativeLink";

export const AboutSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.topStripe} aria-hidden="true" />
      <div className={styles.bottomStripe} aria-hidden="true" />

      <div className={styles.inner}>
        <h2 className={styles.title}>О художнике</h2>

        <div className={styles.text}>
          <p>
            Мария Волкова — молодая художница. Обучается в Санкт-
            Петербургской Академии Художеств на факультете живописи, пробует
            смотреть через призму традиционной школы, впрочем, не стесняя себя
            излишне косностью догматов.
          </p>
        </div>


        <div className={styles.imageBlock}>
          <div className={styles.image}>
            <Image
              src="/images/masha-main-photo.png"
              alt="Волкова Мария"
              fill
              className={styles.imageMedia}
              sizes="(min-width: 1024px) 30vw, 80vw"
            />
          </div>

          <figure className={styles.quote}>
            <span className={styles.quoteDecorLeft} aria-hidden="true" />
            <span className={styles.quoteDecorRight} aria-hidden="true" />

            <blockquote className={styles.quoteText}>
              «В работах я стараюсь запечатлеть момент перед глазами — именно
              так, как я его почувствовала»
            </blockquote>
          </figure>
        </div>

        <div className={styles.linkWrapper}>
          <DecorativeLink href="/gallery">Подробнее →</DecorativeLink>
        </div>
      </div>
    </section>
  );
};