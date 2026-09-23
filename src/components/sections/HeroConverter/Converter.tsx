"use client";

import { useId, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { getQuote } from "@/lib/rates";
import type { ConverterMode, ConverterWidget } from "./schema";
import styles from "./styles.module.css";

function otherAsset(list: string[], current: string, avoid: string) {
  if (current !== avoid) return current;
  return list.find((asset) => asset !== avoid) ?? current;
}

export function resolveSelection(modes: ConverterMode[], side: string | null, asset: string | null) {
  const funding = modes.find((mode) => mode.id === "funding") ?? modes[0];
  const spot = modes.find((mode) => mode.id === "spot");
  const inMode = (mode: ConverterMode | undefined) => Boolean(mode && asset && (mode.from.includes(asset) || mode.to.includes(asset)));
  let mode = funding;
  if (asset && !inMode(funding) && inMode(spot) && spot) mode = spot;

  let from = mode.from[0];
  let to = mode.to[0];
  if (asset && mode.from.includes(asset) && mode.to.includes(asset)) {
    if (side === "sell") {
      from = asset;
      to = otherAsset(mode.to, to, from);
    } else {
      to = asset;
      from = otherAsset(mode.from, from, to);
    }
  } else if (asset && side === "sell" && mode.from.includes(asset)) {
    from = asset;
  } else if (asset && mode.to.includes(asset)) {
    to = asset;
  } else if (asset && mode.from.includes(asset)) {
    from = asset;
  }
  if (from === to) to = otherAsset(mode.to, to, from);
  return { modeId: mode.id, from, to };
}

function ConverterView({
  widget,
  modeId,
  from,
  to,
  give,
  receive,
  onMode,
  onFrom,
  onTo,
  onGive,
  onReceive,
}: {
  widget: ConverterWidget;
  modeId: string;
  from: string;
  to: string;
  give: string;
  receive: string;
  onMode: (id: string) => void;
  onFrom: (asset: string) => void;
  onTo: (asset: string) => void;
  onGive: (value: string) => void;
  onReceive: (value: string) => void;
}) {
  const baseId = useId();
  const mode = widget.modes.find((item) => item.id === modeId) ?? widget.modes[0];
  const quote = getQuote({ mode: mode.id, from, to, amount: give }, widget.quote);

  return (
    <div className={styles.widget}>
      <div className={styles.modes} role="group">
        {widget.modes.map((item) => {
          const selected = item.id === mode.id;
          return (
            <button key={item.id} type="button" className={selected ? styles.modeOn : styles.mode} aria-pressed={selected} onClick={() => onMode(item.id)}>
              {item.label}
            </button>
          );
        })}
      </div>
      <div className={styles.block}>
        <label className={styles.fieldLabel} htmlFor={`${baseId}-give`}>
          {widget.giveLabel}
        </label>
        <div className={styles.row}>
          <input
            id={`${baseId}-give`}
            className={styles.amount}
            type="text"
            inputMode="decimal"
            autoComplete="off"
            placeholder={widget.amountPlaceholder}
            value={give}
            onChange={(event) => onGive(event.target.value)}
          />
          <div className={styles.asset}>
            <span>{from}</span>
            <span aria-hidden="true">▾</span>
            <select className={styles.select} aria-label={widget.giveAssetLabel} value={from} onChange={(event) => onFrom(event.target.value)}>
              {mode.from.map((asset) => (
                <option key={asset} value={asset}>
                  {asset}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className={styles.block}>
        <label className={styles.fieldLabel} htmlFor={`${baseId}-receive`}>
          {widget.receiveLabel}
        </label>
        <div className={styles.row}>
          <input
            id={`${baseId}-receive`}
            className={`${styles.amount} ${styles.receive}`}
            type="text"
            inputMode="decimal"
            autoComplete="off"
            placeholder={widget.amountPlaceholder}
            value={receive}
            onChange={(event) => onReceive(event.target.value)}
          />
          <div className={styles.asset}>
            <span>{to}</span>
            <span aria-hidden="true">▾</span>
            <select className={styles.select} aria-label={widget.receiveAssetLabel} value={to} onChange={(event) => onTo(event.target.value)}>
              {mode.to.map((asset) => (
                <option key={asset} value={asset}>
                  {asset}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className={styles.quote}>
        <div className={styles.line}>
          <span>{widget.rateLabel}</span>
          <span>{quote.rate}</span>
        </div>
        <div className={styles.line}>
          <span>{widget.feeLabel}</span>
          <span>{quote.fee}</span>
        </div>
        <div className={styles.line}>
          <span>{widget.lockLabel}</span>
          <span>{quote.lock}</span>
        </div>
      </div>
      <Button className={styles.submit} href={widget.submit.href} variant={widget.submit.variant ?? "primary"} size={widget.submit.size ?? "lg"} fullWidth>
        {widget.submit.label}
      </Button>
    </div>
  );
}

export function ConverterFallback({ widget }: { widget: ConverterWidget }) {
  const mode = widget.modes[0];
  return (
    <ConverterView
      widget={widget}
      modeId={mode.id}
      from={mode.from[0]}
      to={mode.to[0]}
      give=""
      receive=""
      onMode={() => undefined}
      onFrom={() => undefined}
      onTo={() => undefined}
      onGive={() => undefined}
      onReceive={() => undefined}
    />
  );
}

export function ExchangeConverter({ widget }: { widget: ConverterWidget }) {
  const params = useSearchParams();
  const side = params.get("side");
  const asset = params.get("asset");
  const presetKey = `${side ?? ""}:${asset ?? ""}`;
  const preset = resolveSelection(widget.modes, side, asset);
  const [draft, setDraft] = useState<{ key: string; modeId: string; from: string; to: string } | null>(null);
  const [give, setGive] = useState("");
  const [receive, setReceive] = useState("");
  const active = draft?.key === presetKey ? draft : { key: presetKey, modeId: preset.modeId, from: preset.from, to: preset.to };
  const mode = widget.modes.find((item) => item.id === active.modeId) ?? widget.modes[0];

  return (
    <ConverterView
      widget={widget}
      modeId={active.modeId}
      from={active.from}
      to={active.to}
      give={give}
      receive={receive}
      onMode={(id) => {
        const next = widget.modes.find((item) => item.id === id) ?? mode;
        setDraft({
          key: presetKey,
          modeId: next.id,
          from: next.from[0],
          to: otherAsset(next.to, next.to[0], next.from[0]),
        });
      }}
      onFrom={(nextFrom) => {
        setDraft({
          key: presetKey,
          modeId: active.modeId,
          from: nextFrom,
          to: otherAsset(mode.to, active.to, nextFrom),
        });
      }}
      onTo={(nextTo) => {
        setDraft({
          key: presetKey,
          modeId: active.modeId,
          from: otherAsset(mode.from, active.from, nextTo),
          to: nextTo,
        });
      }}
      onGive={setGive}
      onReceive={setReceive}
    />
  );
}
