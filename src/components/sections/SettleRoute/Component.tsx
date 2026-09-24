import type { SettleRouteData } from "./schema";
import styles from "./styles.module.css";

export function SettleRoute(data: SettleRouteData) {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <div className={styles.copy}>
          <span className={styles.caption}>{data.caption}</span>
          <h2 className="h2">{data.title}</h2>
        </div>
        <p className={styles.aside}>{data.aside}</p>
      </div>
      <svg className={styles.diagram} viewBox="0 0 1300 320" fill="none" role="img" aria-label={data.title}>
        <defs>
          <marker id="inv-ar" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <path d="M0 0l6 3-6 3z" fill="#8C6E00" />
          </marker>
          <marker id="inv-arg" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <path d="M0 0l6 3-6 3z" fill="#939393" />
          </marker>
        </defs>
        <rect x="0" y="116" width="250" height="88" rx="20" fill="#fff" stroke="#e3e3e3" />
        <text x="24" y="150" fill="#939393" fontSize="10" letterSpacing="1">{data.payerCaption}</text>
        <text x="24" y="180" fill="#272727" fontSize="22" fontFamily="Space Grotesk, sans-serif" fontWeight="500">{data.payerTitle}</text>
        <path d="M270 160 H400" stroke="#8C6E00" strokeWidth="2" markerEnd="url(#inv-ar)" />
        <rect x="420" y="100" width="230" height="120" rx="20" fill="#141414" />
        <text x="444" y="136" fill="#FFD400" fontSize="10" letterSpacing="1">{data.choiceCaption}</text>
        <text x="444" y="168" fill="#f3f5f5" fontSize="22" fontFamily="Space Grotesk, sans-serif" fontWeight="500">{data.choiceTitle}</text>
        <text x="444" y="194" fill="#939393" fontSize="13">{data.choiceNote}</text>
        <path d="M670 160 V70 H800" stroke="#8C6E00" strokeWidth="2" markerEnd="url(#inv-ar)" />
        <path d="M670 160 V250 H800" stroke="#939393" strokeWidth="2" markerEnd="url(#inv-arg)" />
        <rect x="820" y="26" width="300" height="88" rx="20" fill="#dae8ee" stroke="#b6c1c6" />
        <text x="844" y="60" fill="#5d7580" fontSize="10" letterSpacing="1">{data.fundingCaption}</text>
        <text x="844" y="90" fill="#1f3a48" fontSize="22" fontFamily="Space Grotesk, sans-serif" fontWeight="500">{data.fundingTitle}</text>
        <rect x="820" y="206" width="300" height="88" rx="20" fill="#fff" stroke="#e3e3e3" />
        <text x="844" y="240" fill="#939393" fontSize="10" letterSpacing="1">{data.spotCaption}</text>
        <text x="844" y="270" fill="#272727" fontSize="22" fontFamily="Space Grotesk, sans-serif" fontWeight="500">{data.spotTitle}</text>
        <text x="1140" y="66" fill="#646464" fontSize="14">{data.fundingNote.split("\n")[0]}</text>
        <text x="1140" y="86" fill="#646464" fontSize="14">{data.fundingNote.split("\n")[1]}</text>
        <text x="1140" y="246" fill="#646464" fontSize="14">{data.spotNote.split("\n")[0]}</text>
        <text x="1140" y="266" fill="#646464" fontSize="14">{data.spotNote.split("\n")[1]}</text>
      </svg>
      <div className={styles.cards}>
        {data.cards.map((card) => (
          <article key={card.caption} className={styles.card}>
            <span className={styles.cardCaption}>{card.caption}</span>
            {card.options?.map((option) => (
              <span key={option.label} className={option.mark ? styles.optionOn : styles.option}>
                {option.label}
                {option.mark ? <span className={styles.mark}>{option.mark}</span> : null}
              </span>
            ))}
            {card.text ? <p className={styles.cardText}>{card.text}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
