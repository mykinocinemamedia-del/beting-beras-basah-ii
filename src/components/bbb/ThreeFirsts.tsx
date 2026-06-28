'use client';

import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

export function ThreeFirsts() {
  const { t } = useLang();
  const items = [
    { num: "01", badge: t("firsts.1.badge"), title: t("firsts.1.title"), desc: t("firsts.1.desc") },
    { num: "02", badge: t("firsts.2.badge"), title: t("firsts.2.title"), desc: t("firsts.2.desc") },
    { num: "03", badge: t("firsts.3.badge"), title: t("firsts.3.title"), desc: t("firsts.3.desc") },
  ];

  return (
    <section id="three-firsts" style={{ background: "var(--surface)" }}>
      <Reveal>
        <div className="bbb-container">
          <div className="section-label">
            <span className="eyebrow">{t("firsts.eyebrow")}</span>
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
            {t("firsts.title.l1")}
            <br />
            {t("firsts.title.l2")}
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {t("firsts.title.l3")}
            </em>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5px",
              background: "var(--border)",
              border: "1px solid var(--border)",
              marginTop: "3.5rem",
            }}
          >
            {items.map((it) => (
              <div
                key={it.num}
                style={{
                  background: "var(--card)",
                  padding: "2.5rem 2rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "5rem",
                    fontWeight: 300,
                    color: "rgba(201,168,76,0.1)",
                    lineHeight: 1,
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  {it.num}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.5875rem",
                    fontWeight: 700,
                    letterSpacing: "0.11em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    background: "rgba(201,168,76,0.1)",
                    border: "1px solid var(--border)",
                    padding: "4px 12px",
                    marginBottom: "1rem",
                  }}
                >
                  {it.badge}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                    fontWeight: 400,
                    color: "var(--cream)",
                    margin: "0 0 0.875rem 0",
                    lineHeight: 1.25,
                  }}
                >
                  {it.title}
                </h3>
                <p
                  style={{
                    color: "var(--sage)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.85,
                    margin: 0,
                  }}
                >
                  {it.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
