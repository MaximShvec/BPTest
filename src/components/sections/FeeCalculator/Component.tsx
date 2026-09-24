"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cx } from "@/lib/cx";
import type { FeeCalculatorData } from "./schema";
import styles from "./styles.module.css";

function money(value: number) {
  return `${Math.round(value).toLocaleString("ru-RU")} EUR`;
}

export function FeeCalculator(data: FeeCalculatorData) {
  const [profile, setProfile] = useState(0);
  const [values, setValues] = useState(data.profiles[0]?.values ?? data.sliders.map((slider) => slider.start));
  const [live, setLive] = useState(false);

  const amounts = data.sliders.map((slider, index) => slider.min + ((slider.max - slider.min) * (values[index] ?? slider.start)) / 100);
  const parts = [
    data.rates.service,
    amounts[0] * data.rates.incoming,
    amounts[1] * data.rates.payment,
    amounts[2] * data.rates.exchange,
    amounts[3] * data.rates.card,
  ];
  const total = parts.reduce((sum, part) => sum + part, 0);

  function pick(index: number) {
    setProfile(index);
    setValues(data.profiles[index].values);
    setLive(true);
  }

  return (
    <section id={data.id} className={styles.section}>
      <div className={styles.copy}>
        <span className={styles.caption}>{data.caption}</span>
        <h2 className="h2">{data.title}</h2>
        <p className={styles.text}>{data.text}</p>
        <Button href={data.action.href} variant={data.action.variant ?? "dark"} size={data.action.size ?? "lg"} className={styles.ink}>
          {data.action.label}
        </Button>
      </div>
      <div className={styles.panel}>
        <div className={styles.profiles}>
          {data.profiles.map((item, index) => (
            <button key={item.label} type="button" className={cx(styles.profile, index === profile && styles.profileOn)} onClick={() => pick(index)}>
              {item.label}
            </button>
          ))}
        </div>
        {data.sliders.map((slider, index) => (
          <label key={slider.label} className={styles.slider}>
            <span className={styles.sliderHead}>
              <span>{slider.label}</span>
              <span className={styles.sliderValue}>{live ? (slider.unit === "eur" ? money(amounts[index]) : String(Math.round(amounts[index]))) : slider.display}</span>
            </span>
            <span className={styles.track}>
              <span className={styles.fill} style={{ width: `${values[index]}%` }} />
              <span className={styles.thumb} style={{ left: `calc(${values[index]}% - 12px)` }} />
              <input
                type="range"
                min={0}
                max={100}
                value={values[index]}
                aria-label={slider.label}
                onChange={(event) => {
                  const next = values.slice();
                  next[index] = Number(event.target.value);
                  setValues(next);
                  setLive(true);
                }}
              />
            </span>
          </label>
        ))}
      </div>
      <div className={styles.result}>
        <span className={styles.resultCaption}>{data.resultCaption}</span>
        <div>
          {data.lines.map((line, index) => (
            <div key={line} className={index === data.lines.length - 1 ? styles.lineLast : styles.line}>
              <span>{line}</span>
              <span>{live ? money(parts[index]) : data.lineDisplay}</span>
            </div>
          ))}
        </div>
        <div className={styles.total}>
          <span className={styles.totalLabel}>{data.totalLabel}</span>
          <span className={styles.totalValue}>{live ? money(total) : data.totalDisplay}</span>
        </div>
      </div>
    </section>
  );
}
