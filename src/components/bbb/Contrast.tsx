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
    t("contrast.good.1"),
    t("contrast.good.2"),
    t("contrast.good.3"),
    t("contrast.good.4"),
    t("contrast.good.5"),
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

          <div
            className="contrast-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2px",
              background: "var(--border)",
              border: "1px solid var(--border)",
              marginTop: "3rem",
            }}
          >
            <div
              className="c-col bad"
              style={{
                background: "rgba(7,18,10,0.85)",
                padding: "2.5rem 2rem",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.11em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: "1.5rem",
                }}
              >
                {t("contrast.bad.label")}
              </span>
              {badItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      marginTop: "3px",
                      fontSize: "0.9rem",
                      color: "var(--muted)",
                    }}
                  >
                    ✗
                  </span>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      margin: 0,
                      color: "var(--muted)",
                      lineHeight: 1.7,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="c-col good"
              style={{
                background: "var(--card)",
                padding: "2.5rem 2rem",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.11em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "1.5rem",
                }}
              >
                {t("contrast.good.label")}
              </span>
              {goodItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      marginTop: "3px",
                      fontSize: "0.9rem",
                      color: "var(--gold)",
                    }}
                  >
                    ✓
                  </span>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      margin: 0,
                      color: "var(--sage)",
                      lineHeight: 1.7,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
