'use client';

import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

export function Contrast() {
  const { t } = useLang();

  const badItems = [
    t("contrast.bad.1"),
    t("contrast.bad.2"),
    t("contrast.bad.3"),
    t("contrast.bad.4"),
    t("contrast.bad.5"),
  ];

  const goodItems = [
    {
      num: "01",
      title: t("contrast.good.1.title"),
      desc: t("contrast.good.1.desc"),
    },
    {
      num: "02",
      title: t("contrast.good.2.title"),
      desc: t("contrast.good.2.desc"),
    },
    {
      num: "03",
      title: t("contrast.good.3.title"),
      desc: t("contrast.good.3.desc"),
    },
    {
      num: "04",
      title: t("contrast.good.4.title"),
      desc: t("contrast.good.4.desc"),
    },
    {
      num: "05",
      title: t("contrast.good.5.title"),
      desc: t("contrast.good.5.desc"),
    },
  ];

  return (
    <section id="contrast" style={{ background: "var(--bg)" }}>
      <Reveal>
        <div className="bbb-container">
          <div className="section-label">
            <span className="eyebrow">{t("contrast.eyebrow")}</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
              fontWeight: 500,
              lineHeight: 1.08,
              color: "var(--cream)",
              margin: 0,
            }}
          >
            {t("contrast.title.l1")}
            <br />
            {t("contrast.title.l2")}
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {t("contrast.title.l3")}
            </em>
          </h2>

          <p
            style={{
              marginTop: "1.75rem",
              maxWidth: "780px",
              color: "var(--sage)",
              fontSize: "1.0625rem",
              lineHeight: 1.85,
            }}
          >
            {t("contrast.subtitle")}
          </p>

          <div
            className="contrast-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "0.85fr 1.15fr",
              gap: "2px",
              background: "var(--border)",
              border: "1px solid var(--border)",
              marginTop: "3rem",
            }}
          >
            {/* BAD COLUMN - typical sponsorship */}
            <div
              className="c-col bad"
              style={{
                background: "rgba(7,18,10,0.85)",
                padding: "2.5rem 2rem",
              }}
            >
              <div style={{ marginBottom: "1.75rem" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.11em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: "0.5rem",
                  }}
                >
                  ✗ {t("contrast.bad.label")}
                </span>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-display), serif",
                    fontSize: "1.0625rem",
                    fontStyle: "italic",
                    color: "var(--muted)",
                    lineHeight: 1.4,
                  }}
                >
                  {t("contrast.bad.sublabel")}
                </span>
              </div>

              {badItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    marginBottom: "1.1rem",
                    paddingBottom: "1.1rem",
                    borderBottom:
                      i < badItems.length - 1
                        ? "1px solid rgba(201,168,76,0.08)"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      marginTop: "3px",
                      fontSize: "0.95rem",
                      color: "var(--muted)",
                      fontWeight: 700,
                    }}
                  >
                    ×
                  </span>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      margin: 0,
                      color: "var(--muted)",
                      lineHeight: 1.65,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* GOOD COLUMN - human capital development */}
            <div
              className="c-col good"
              style={{
                background: "var(--card)",
                padding: "2.5rem 2rem",
              }}
            >
              <div style={{ marginBottom: "1.75rem" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.11em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: "0.5rem",
                  }}
                >
                  ✓ {t("contrast.good.label")}
                </span>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-display), serif",
                    fontSize: "1.0625rem",
                    fontStyle: "italic",
                    color: "var(--cream)",
                    lineHeight: 1.4,
                  }}
                >
                  {t("contrast.good.sublabel")}
                </span>
              </div>

              {goodItems.map((it, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "1.1rem",
                    alignItems: "flex-start",
                    marginBottom: "1.25rem",
                    paddingBottom: "1.25rem",
                    borderBottom:
                      i < goodItems.length - 1
                        ? "1px solid var(--border)"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      fontFamily: "var(--font-display), serif",
                      fontSize: "1.5rem",
                      fontWeight: 300,
                      color: "var(--gold)",
                      lineHeight: 1,
                      minWidth: "32px",
                    }}
                  >
                    {it.num}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-display), serif",
                        fontSize: "1.0625rem",
                        color: "var(--cream)",
                        fontWeight: 500,
                        marginBottom: "4px",
                        lineHeight: 1.3,
                      }}
                    >
                      {it.title}
                    </div>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        margin: 0,
                        color: "var(--sage)",
                        lineHeight: 1.65,
                      }}
                    >
                      {it.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Callout: who this program is for */}
          <div
            style={{
              marginTop: "2rem",
              padding: "2.25rem 2.5rem",
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.02) 100%)",
              border: "1px solid var(--border-strong)",
              borderTop: "3px solid var(--gold)",
            }}
          >
            <div
              style={{
                fontSize: "0.65rem",
                color: "var(--gold)",
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: "0.75rem",
              }}
            >
              {t("contrast.callout.eyebrow")}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                color: "var(--cream)",
                fontWeight: 500,
                margin: "0 0 1rem 0",
                lineHeight: 1.25,
              }}
            >
              {t("contrast.callout.title")}
            </h3>
            <p
              style={{
                color: "var(--sage)",
                fontSize: "0.9375rem",
                lineHeight: 1.85,
                margin: 0,
                maxWidth: "860px",
              }}
            >
              {t("contrast.callout.body")}
            </p>
          </div>
        </div>
      </Reveal>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.contrast-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
