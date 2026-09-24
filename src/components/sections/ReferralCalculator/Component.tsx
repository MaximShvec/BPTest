"use client";

import { Button } from "@/components/ui/Button";
import { cx } from "@/lib/cx";
import { useState } from "react";
import type { ReferralCalculatorData } from "./schema";
import styles from "./styles.module.css";

function money(value: number) {
  return `${new Intl.NumberFormat("ru-RU").format(Math.round(value))} $`;
}

export function ReferralCalculator({
  caption,
  title,
  text,
  action,
  presets,
  referrals,
  turnover,
  feeRate,
  tiers,
  monthLabel,
  monthPlaceholder,
  yearLabel,
  yearPlaceholder,
  note,
}: ReferralCalculatorData) {
  const [live, setLive] = useState(false);
  const [preset, setPreset] = useState(0);
  const [count, setCount] = useState(presets[0]?.value ?? referrals.min);
  const [volume, setVolume] = useState(turnover.min);

  const countFill = live ? ((count - referrals.min) / (referrals.max - referrals.min)) * 100 : referrals.fill;
  const volumeFill = live ? ((volume - turnover.min) / (turnover.max - turnover.min)) * 100 : turnover.fill;
  const base = count * volume * feeRate;
  const amounts = tiers.map((tier) => (tier.share == null ? null : base * tier.share));
  const month = amounts.every((amount) => amount != null) ? amounts.reduce((sum, amount) => sum + (amount ?? 0), 0) : null;

  return (
    <section className={styles.section}>
      <div className={styles.copy}>
        <span className={styles.caption}>{caption}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <Button href={action.href} variant={action.variant ?? "primary"} size={action.size ?? "lg"}>
          {action.label}
        </Button>
      </div>
      <div className={styles.panel}>
        <div className={styles.presets}>
          {presets.map((item, index) => (
            <button
              key={item.label}
              type="button"
              className={cx(styles.chip, index === preset && styles.chipOn)}
              onClick={() => {
                setPreset(index);
                setCount(item.value);
                setLive(true);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className={styles.sliders}>
          <label className={styles.slider}>
            <span className={styles.sliderHead}>
              <span className={styles.sliderLabel}>{referrals.label}</span>
              <span className={styles.sliderValue}>{live ? String(count) : referrals.placeholder}</span>
            </span>
            <span className={styles.track}>
              <span className={styles.fill} style={{ width: `${countFill}%` }} />
              <span className={styles.thumb} style={{ left: `${countFill}%` }} />
              <input
                type="range"
                min={referrals.min}
                max={referrals.max}
                value={count}
                aria-label={referrals.label}
                onChange={(event) => {
                  setCount(Number(event.target.value));
                  setLive(true);
                }}
              />
            </span>
            <span className={styles.bounds}>
              <span>{referrals.minLabel}</span>
              <span>{referrals.maxLabel}</span>
            </span>
          </label>
          <label className={styles.slider}>
            <span className={styles.sliderHead}>
              <span className={styles.sliderLabel}>{turnover.label}</span>
              <span className={styles.sliderValue}>{live ? money(volume) : turnover.placeholder}</span>
            </span>
            <span className={styles.track}>
              <span className={styles.fill} style={{ width: `${volumeFill}%` }} />
              <span className={styles.thumb} style={{ left: `${volumeFill}%` }} />
              <input
                type="range"
                min={turnover.min}
                max={turnover.max}
                value={volume}
                aria-label={turnover.label}
                onChange={(event) => {
                  setVolume(Number(event.target.value));
                  setLive(true);
                }}
              />
            </span>
            <span className={styles.bounds}>
              <span>{turnover.minLabel}</span>
              <span>{turnover.maxLabel}</span>
            </span>
          </label>
        </div>
        <div className={styles.tiers}>
          {tiers.map((tier, index) => (
            <div key={tier.name} className={styles.tier}>
              <span className={styles.tierName}>{tier.name}</span>
              <span className={styles.tierValue}>{live && amounts[index] != null ? money(amounts[index]) : tier.placeholder}</span>
            </div>
          ))}
        </div>
        <div className={styles.totals}>
          <div>
            <span className={styles.totalLabel}>{monthLabel}</span>
            <span className={styles.month}>{live && month != null ? money(month) : monthPlaceholder}</span>
          </div>
          <div className={styles.yearBlock}>
            <span className={styles.totalLabel}>{yearLabel}</span>
            <span className={styles.year}>{live && month != null ? money(month * 12) : yearPlaceholder}</span>
          </div>
        </div>
        <p className={styles.note}>{note}</p>
      </div>
    </section>
  );
}
