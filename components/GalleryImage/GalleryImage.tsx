"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./GalleryImage.module.css";

type GalleryImageProps = {
  imageSrc: string;
  imageAlt: string;

  title: string;
  size: string;
  medium: string;
  year: string;

  href?: string;
  columnSpan?: 1 | 2 | 3;
  variant?: "portrait" |"vertical"| "square";
  gridClass?: string;
};

export const GalleryImage = ({
  imageSrc,
  imageAlt,
  title,
  size,
  medium,
  year,
  href,
  columnSpan = 1,
  variant,
  gridClass = "",
}: GalleryImageProps) => {
  const colClass =
    columnSpan === 3
      ? styles.span3
      : columnSpan === 2
      ? styles.span2
      : styles.span1;

  const className = `${styles.imageCard} ${colClass}`;
    const variantClass =
    variant === "square"
      ? styles.square
      : variant === "vertical"
      ? styles.vertical
      : styles.portrait;
  const rootClassName = `${styles.imageCard} ${colClass} ${gridClass}`;
  const content = (
    <div className={`${styles.image} ${variantClass}`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className={styles.imageMedia}
        loading="lazy"
      />

      <div className={styles.overlay}>
        <div className={styles.imageInfo}>
          <p className={styles.description}>{size}</p>
          <p className={styles.description}>{medium}</p>
          <p className={styles.description}>{year}</p>
          <p className={styles.title}>{title}</p>
        </div>
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className={rootClassName}>
      {content}
    </Link>
  ) : (
    <div className={rootClassName}>{content}</div>
  );
};
