'use client';

import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

export function Credibility() {
  const { t } = useLang();

  const stats = [
    { num: t("cred.stat1.num"), lbl: t("cred.stat1.lbl") },
    { num: t("cred.stat2.num"), lbl: t("cred.stat2.lbl") },
    { num: t("cred.stat3.num"), lbl: t("cred.stat3.lbl") },
    { num: t("cred.stat4.num"), lbl: t("cred.stat4.lbl") },
  ];

  const cards = [
    { title: t("cred.card1.title"), desc: t("cred.card1.desc") },
    { title: t("cred.card2.title"), desc: t("cred.card2.desc") },
    { title: t("cred.card3.title"), desc: t("cred.card3.desc") },
    { title: t("cred.card4.title"), desc: t("cred.card4.desc") },
    { title: t("cred.card5.title"), desc: t("cred.card5.desc") },
    { title: t("cred.card6.title"), desc: t("cred.card6.desc") },
  ];

  return (
    <section id="credibility" style={{ background: "var(--bg)" }}>
      <Reveal>
        <div className="bbb-container">
          <div className="section-label">
            <span className="eyebrow">{t("cred.eyebrow")}</span>
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
            {t("cred.title.l1")}
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {t("cred.title.l2")}
            </em>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: "2rem",
              margin: "3rem 0",
              padding: "2.5rem 0",
              borderTop: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <span
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "3rem",
                    fontWeight: 300,
                    color: "var(--cream)",
                    display: "block",
                    lineHeight: 1,
                    marginBottom: "6px",
                  }}
                >
                  {s.num}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--muted)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {s.lbl}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "1.25rem",
              marginTop: "2rem",
            }}
          >
            {cards.map((c, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "var(--gold)",
                    letterSpacing: "0.04em",
                    marginBottom: "0.5rem",
                  }}
                >
                  {c.title}
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--sage)",
                    margin: 0,
                    lineHeight: 1.7,
                  }}
                >
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
