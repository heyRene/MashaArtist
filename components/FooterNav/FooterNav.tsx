"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./FooterNav.module.css";

const leftNav = [
  { label: "Главная", href: "/" },
  { label: "Каталог", href: "/catalog" },
  { label: "О художнике", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];
const rightNav = [
  { label: "Галерея", href: "/gallery" },
];

const gallerySubNav = [
  { label: "Живопись", href: "/gallery/painting" },
  { label: "Графика", href: "/gallery/graphics" },
];

export const FooterNav = () => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <nav className={styles.nav}>
      <div className={styles.column}>
        {leftNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.link}
            aria-current={isActive(item.href) ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className={styles.column}>
       {rightNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={styles.link}
              >
                {item.label}
              </Link>
            ))}

        <div className={styles.gallery}>
          <span className={styles.brush} aria-hidden="true" />

          <div className={styles.galleryList}>
            {gallerySubNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={styles.link}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
