"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type FormEvent, type MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { LockIcon } from "@/components/icons/lock";
import { LogoIcon } from "@/components/icons/logo";
import { MailIcon } from "@/components/icons/mail";
import { LangSwitcher } from "@/components/layout/Header/LangSwitcher";
import { mockLogin } from "@/lib/auth";
import type { Auth, AuthLang } from "@/schemas/auth";
import type { NavLanguage } from "@/schemas/nav";
import styles from "./AuthPage.module.css";

const langListeners = new Set<() => void>();

function subscribeLang(onStoreChange: () => void) {
  langListeners.add(onStoreChange);
  return () => langListeners.delete(onStoreChange);
}

function readLang(): AuthLang {
  try {
    return localStorage.getItem("bp_lang") === "ru" ? "ru" : "en";
  } catch {
    return "en";
  }
}

function getServerLang(): AuthLang {
  return "en";
}

function persistLang(next: AuthLang) {
  try {
    localStorage.setItem("bp_lang", next);
  } catch {
    /* storage can be unavailable */
  }
  langListeners.forEach((listener) => listener());
}

export function AuthPage({
  mode,
  copy,
  languages,
}: {
  mode: "signin" | "signup";
  copy: Record<AuthLang, Auth>;
  languages: NavLanguage[];
}) {
  const router = useRouter();
  const lang = useSyncExternalStore(subscribeLang, readLang, getServerLang);
  const text = copy[lang];
  const langRef = useRef<HTMLDivElement>(null);
  const langButton = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [picked, setPicked] = useState<string | null>(null);
  const [canHover, setCanHover] = useState(true);
  const [noteVisible, setNoteVisible] = useState(false);
  const signup = mode === "signup";
  const year = new Date().getFullYear();

  useEffect(() => {
    const previous = document.documentElement.lang;
    const nextTitle = `Balance Pay — ${signup ? text.titleSignup : text.title}`;
    document.documentElement.lang = lang;
    const applyTitle = () => {
      if (document.title !== nextTitle) document.title = nextTitle;
    };
    applyTitle();
    // Metadata writes the route title after hydration; keep the active language.
    const titleEl = document.querySelector("title");
    const observer = titleEl ? new MutationObserver(applyTitle) : null;
    if (titleEl) observer?.observe(titleEl, { childList: true, subtree: true, characterData: true });
    return () => {
      observer?.disconnect();
      document.documentElement.lang = previous;
    };
  }, [lang, signup, text.title, text.titleSignup]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const play = video.play();
    if (play) play.catch(() => undefined);
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!langRef.current?.contains(event.target as Node)) setLangOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setLangOpen((open) => {
        if (open) langButton.current?.focus();
        return false;
      });
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    mockLogin();
    router.push("/");
  }

  function toggleMode(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    router.replace(signup ? "/login" : "/signup");
  }

  return (
    <>
      <section className={styles.left}>
        <div className={styles.leftTop}>
          <a className={styles.brand} href="/login" aria-label={text.brand}>
            <LogoIcon width={42} height={42} />
          </a>
          <div className={styles.langWrap} ref={langRef}>
            <LangSwitcher
              inline
              languages={languages}
              open={langOpen}
              current={picked ?? lang}
              canHover={canHover}
              onOpen={() => setLangOpen(true)}
              onClose={() => setLangOpen(false)}
              onToggle={() => setLangOpen((open) => !open)}
              onSelect={(code) => {
                if (code === "en" || code === "ru") persistLang(code);
                setPicked(code);
                setLangOpen(false);
              }}
              buttonRef={(node) => {
                langButton.current = node;
              }}
            />
          </div>
        </div>

        <div className={styles.formBlock}>
          <h1 className={styles.title}>{signup ? text.titleSignup : text.title}</h1>
          <form id="auth-form" autoComplete="on" onSubmit={onSubmit}>
            <div className={styles.fields}>
              <label className={styles.field}>
                <MailIcon />
                <input name="email" type="text" placeholder={text.email} autoComplete="username" />
              </label>
              <label className={styles.field}>
                <LockIcon />
                <input name="password" type="password" placeholder={text.password} autoComplete="current-password" />
              </label>
            </div>
            <a
              className={styles.forgot}
              href="#forgot"
              onClick={(event) => {
                event.preventDefault();
                setNoteVisible(true);
              }}
            >
              {text.forgot}
            </a>
            <p className={`${styles.note} ${noteVisible ? styles.show : ""}`}>{text.forgotNote}</p>
          </form>
        </div>

        <div className={styles.bottom}>
          <p className={styles.signupLine}>
            <span>{signup ? text.haveAccount : text.noAccount}</span>{" "}
            <a href={signup ? "/login" : "/signup"} onClick={toggleMode}>
              {signup ? text.signin : text.signup}
            </a>
          </p>
          <button className={styles.submit} type="submit" form="auth-form">
            {signup ? text.submitSignup : text.submit}
          </button>
          <div className={styles.fineprint}>
            <nav>
              {text.links.map((link, index) => (
                <a
                  key={link.key}
                  className={index === 0 ? undefined : styles.dot}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {text[link.key]}
                </a>
              ))}
            </nav>
            <p className={styles.copy}>{text.copyright.replace("{year}", String(year))}</p>
          </div>
        </div>
      </section>

      <aside className={styles.right}>
        <div className={styles.panel}>
          <video className={styles.video} ref={videoRef} autoPlay muted loop playsInline preload="metadata">
            <source src={text.video} type="video/mp4" />
          </video>
          <div className={styles.shade} aria-hidden="true" />
          <div className={styles.promo}>
            <h2 className={styles.headline}>
              {text.headline.split("\n").map((line, index) =>
                index === 0 ? (
                  line
                ) : (
                  <span key={line}>
                    <br />
                    {line}
                  </span>
                ),
              )}
            </h2>
            <hr className={styles.rule} />
            <p className={styles.subhead}>{text.subhead}</p>
          </div>
          <div className={styles.partners}>
            <span className={styles.partnersLabel}>{text.partners}</span>
            <div className={styles.partnerRow}>
              <div className={styles.partner} aria-hidden="true" />
              <div className={styles.partner} aria-hidden="true" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
