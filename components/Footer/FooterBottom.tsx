import styles from "./FooterBottom.module.css";
import { Logo } from "@/components/ui/Logo/Logo";

type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

const socialLinks: SocialLink[] = [
  { label: "telegram", href: "https://t.me/...", icon: "arrow-link" },
  {
    label: "instagram",
    href: "https://instagram.com/...",
    icon: "arrow-link",
  },
];

export const FooterBottom = () => {
  return (
    <div className={styles.bottom}>
      <span className={styles.line}></span>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo />
        </div>

        <div className={styles.info}>
          <span className={styles.year}>2025</span>
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {item.label}

              <svg className={styles.icon} aria-hidden="true">
                <use href={`/images/sprite.svg#${item.icon}`} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
