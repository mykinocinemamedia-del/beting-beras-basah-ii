'use client';

import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";
import { useWhatsApp } from "./use-whatsapp";

export function Hero() {
  const { t } = useLang();
  const waLink = useWhatsApp();

  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const update = () => {
      const diff =
        new Date("2026-10-30T20:00:00+08:00").getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number, len: number) =>
    String(n).padStart(len, "0");

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background image with overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, rgba(7,18,10,0.95) 0%, rgba(7,18,10,0.75) 50%, rgba(7,18,10,0.45) 100%), url('/images/istana-ext-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-15%",
          right: "-8%",
          width: "65vw",
          height: "90vh",
          background:
            "radial-gradient(ellipse, rgba(201,168,76,0.09) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "220px",
          background: "linear-gradient(to top, var(--bg), transparent)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      <div
        className="bbb-container"
        style={{ position: "relative", zIndex: 3 }}
      >
        <div style={{ maxWidth: "820px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "1.75rem",
            }}
          >
            <span
              style={{
                width: "32px",
                height: "1px",
                background: "var(--gold)",
                display: "inline-block",
              }}
            />
            <span className="eyebrow">{t("hero.eyebrow")}</span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(2.6rem, 6.5vw, 5.2rem)",
              fontWeight: 500,
              lineHeight: 1.08,
              color: "var(--cream)",
              marginBottom: "1.5rem",
              margin: "0 0 1.5rem 0",
            }}
          >
            {t("hero.title.l1")}
            <br />
            {t("hero.title.l2")}{" "}
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {t("hero.title.l3")}
            </em>
          </h1>

          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--sage)",
              maxWidth: "580px",
              marginBottom: "2.5rem",
              lineHeight: 1.85,
            }}
          >
            {t("hero.sub")}
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "3.5rem",
            }}
          >
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bbb btn-bbb-primary"
            >
              {t("hero.cta.penaja")}
            </a>
            <a
              href="/BBB_Pitch_Deck.pdf"
              download
              className="btn-bbb btn-bbb-outline"
            >
              {t("hero.cta.pdf")}
            </a>
          </div>

          <div>
            <p
              className="eyebrow"
              style={{
                color: "var(--muted)",
                marginBottom: "1rem",
              }}
            >
              {t("hero.countdown.label")}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                flexWrap: "wrap",
              }}
            >
              <CountdownItem
                num={pad(time.d, 3)}
                label={t("hero.countdown.days")}
              />
              <Sep />
              <CountdownItem
                num={pad(time.h, 2)}
                label={t("hero.countdown.hours")}
              />
              <Sep />
              <CountdownItem
                num={pad(time.m, 2)}
                label={t("hero.countdown.mins")}
              />
              <Sep />
              <CountdownItem
                num={pad(time.s, 2)}
                label={t("hero.countdown.secs")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CountdownItem({ num, label }: { num: string; label: string }) {
  return (
    <div style={{ textAlign: "center", minWidth: "68px" }}>
      <span
        style={{
          fontFamily: "var(--font-display), serif",
          fontSize: "2.5rem",
          fontWeight: 300,
          color: "var(--cream)",
          display: "block",
          lineHeight: 1,
          marginBottom: "6px",
        }}
      >
        {num}
      </span>
      <span
        style={{
          fontSize: "0.5875rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--muted)",
          fontWeight: 600,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Sep() {
  return (
    <span
      style={{
        fontFamily: "var(--font-display), serif",
        fontSize: "2rem",
        color: "rgba(201,168,76,0.38)",
        lineHeight: 1,
      }}
    >
      :
    </span>
  );
}
