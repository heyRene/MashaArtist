"use client";

import { CtaButton } from "@/components/ui/СtaButton/CtaButton";

import styles from "./Intro.module.css";
import { GalleryImage } from "@/components/GalleryImage/GalleryImage";
import { DecorativeLink } from "@/components/ui/Link/DecorativeLink";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.heading}>
        <h1 className={styles.title}>
          <span className={styles.span}>Мгновения,</span> застывшие на холсте
        </h1>
        <CtaButton />
      </div>
      <div className={styles.grid}>
        <GalleryImage
          imageSrc="/images/art/paintings/IMG_8820.jpg"
          imageAlt="Последний день лета"
          title="Последний день лета"
          size="90×60"
          medium="Холст, масло"
          year="2024"
          variant="square"
          gridClass={styles.pic1}
          //   href="/works/last-summer-day"
          columnSpan={3}
        />
        <GalleryImage
          imageSrc="/images/art/paintings/IMG_8077 (2).jpg"
          imageAlt="Последний день лета"
          title="Последний день лета"
          size="90×60"
          medium="Холст, масло"
          year="2024"
          variant="portrait"
          gridClass={styles.pic2}
          //   href="/works/last-summer-day"
          columnSpan={2}
        />
        <GalleryImage
          imageSrc="/images/art/paintings/IMG_9349.jpg"
          imageAlt="Последний день лета"
          title="Последний день лета"
          size="90×60"
          medium="Холст, масло"
          year="2024"
          variant="vertical"
          gridClass={styles.pic3}
          //   href="/works/last-summer-day"
          columnSpan={1}
        />
        <GalleryImage
          imageSrc="/images/art/paintings/IMG_2322_jpg.jpg"
          imageAlt="Последний день лета"
          title="Последний день лета"
          size="90×60"
          medium="Холст, масло"
          year="2024"
          variant="square"
          gridClass={styles.pic4}
          columnSpan={1}
        />
        <GalleryImage
          imageSrc="/images/art/paintings/IMG_6465.jpg"
          imageAlt="Последний день лета"
          title="Последний день лета"
          size="90×60"
          medium="Холст, масло"
          year="2024"
          variant="vertical"
          gridClass={styles.pic5}
          columnSpan={2}
        />
        <GalleryImage
          imageSrc="/images/art/paintings/IMG_2007.jpg"
          imageAlt="Последний день лета"
          title="Последний день лета"
          size="90×60"
          medium="Холст, масло"
          year="2024"
          variant="square"
          gridClass={styles.pic6}
          columnSpan={3}
        />
        <DecorativeLink href="/gallery" className={styles.pic7}>Перейти в галерею →</DecorativeLink>
      </div>
    </section>
  );
}
