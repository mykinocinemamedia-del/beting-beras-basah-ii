'use client';

import { useLang } from "@/lib/i18n";

export function ProgramHero() {
  const { t } = useLang();

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "6rem",
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(135deg, rgba(7,18,10,0.96) 0%, rgba(7,18,10,0.78) 50%, rgba(7,18,10,0.55) 100%), url('/images/bangsawan-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "60vw",
          height: "60vh",
          background:
            "radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 65%)",
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
          height: "180px",
          background: "linear-gradient(to top, var(--bg), transparent)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      <div
        className="bbb-container"
        style={{ position: "relative", zIndex: 3, maxWidth: "900px" }}
      >
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
          <span className="eyebrow">{t("prog.hero.eyebrow")}</span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(2.8rem, 7vw, 6rem)",
            fontWeight: 500,
            lineHeight: 1.05,
            color: "var(--cream)",
            margin: "0 0 2rem 0",
          }}
        >
          {t("prog.hero.title.1")}
          <br />
          {t("prog.hero.title.2")}
          <br />
          <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
            {t("prog.hero.title.3")}
          </em>
        </h1>

        <p
          style={{
            fontSize: "1.15rem",
            color: "var(--sage)",
            maxWidth: "680px",
            lineHeight: 1.85,
            margin: 0,
          }}
        >
          {t("prog.hero.subtitle")}
        </p>

        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "var(--muted)",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: "24px",
              height: "1px",
              background: "var(--muted)",
            }}
          />
          {t("prog.hero.scroll")}
          <svg
            width="14"
            height="20"
            viewBox="0 0 14 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M7 0 V18 M1 12 L7 19 L13 12" />
          </svg>
        </div>
      </div>
    </section>
  );
}
