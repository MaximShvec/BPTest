import Link from "next/link";
import { ExchangeChips } from "./ExchangeChips";
import type { Common } from "@/schemas/common";
import type { Nav } from "@/schemas/nav";
import styles from "./Footer.module.css";

function FooterLink({ href, children, external }: { href: string; children: string; external?: boolean }) {
  if (external || href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  if (href.startsWith("#")) {
    return <a href={href}>{children}</a>;
  }
  return <Link href={href}>{children}</Link>;
}

export function Footer({ nav, common }: { nav: Nav; common: Common }) {
  const year = new Date().getFullYear();
  const copyright = common.copyright.replaceAll("{year}", String(year));

  return (
    <div className={styles.slot}>
      <footer className={styles.footer}>
        <div className={styles.cols}>
          {nav.footer.columns.map((column) => (
            <dl key={column.title} className={styles.col}>
              <dt>{column.title}</dt>
              {column.links.map((link) => (
                <dd key={`${column.title}-${link.href}-${link.label}`}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </dd>
              ))}
            </dl>
          ))}
        </div>

        <ExchangeChips exchange={nav.footer.exchange} />

        <div className={styles.bottom}>
          <div className={styles.meta}>
            <nav className={styles.legalNav}>
              {nav.footer.legalLinks.map((link) => (
                <FooterLink key={link.label} href={link.href} external={link.external}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
            <p className={styles.legal}>{common.legalText}</p>
            <p className={styles.copy}>{copyright}</p>
            <ul className={styles.badges}>
              {nav.footer.paymentBadges.map((badge) => (
                <li key={badge.placeholder} className={styles.badge}>
                  <span className="visually-hidden">{badge.placeholder}</span>
                </li>
              ))}
            </ul>
          </div>
          <ul className={styles.socials}>
            {nav.footer.socials.map((social) => (
              <li key={social.name}>
                <a href={social.href} className={styles.social} aria-label={social.name} />
                <span className={styles.count}>{social.count}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.wordmarkWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.wordmark} src="/media/footer-name.svg" alt="" width={1760} height={313} aria-hidden="true" />
        </div>
      </footer>
    </div>
  );
}
