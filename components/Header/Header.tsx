"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo/Logo";
import styles from "./Header.module.css";

type NavItem = {
  label: string;
  href: string;
  exact?: boolean;
};

const nav: NavItem[] = [
  { label: "Главная", href: "/" },
  { label: "Каталог", href: "/catalog" },
  { label: "Галерея", href: "/gallery" },
  { label: "О художнице", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

export const Header = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo />
        </div>
        <nav className={styles.nav}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={styles.link}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
