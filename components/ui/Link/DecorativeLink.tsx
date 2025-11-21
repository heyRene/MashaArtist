"use client";

import Link from "next/link";
import styles from './DecorativeLink.module.css'

type DecorativeLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const DecorativeLink = ({ href, children, className }: DecorativeLinkProps) => {
  return (
    <Link href={href} className={`${styles.link} ${className ?? ""}`}>
      {children}
    </Link>
  );
};