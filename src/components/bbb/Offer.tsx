'use client';

import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

export function Offer() {
  const { t } = useLang();

  const items = [
    { icon: "📺", title: t("offer.1.title"), desc: t("offer.1.desc") },
    { icon: "👑", title: t("offer.2.title"), desc: t("offer.2.desc") },
    { icon: "🎓", title: t("offer.3.title"), desc: t("offer.3.desc") },
    { icon: "📚", title: t("offer.4.title"), desc: t("offer.4.desc") },
    { icon: "🏛️", title: t("offer.5.title"), desc: t("offer.5.desc") },
    { icon: "🌏", title: t("offer.6.title"), desc: t("offer.6.desc") },
  ];

  return (
    <section id="offer" style={{ background: "var(--surface)" }}>
      <Reveal>
        <div className="bbb-container">
          <div className="section-label">
            <span className="eyebrow">{t("offer.eyebrow")}</span>
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
            {t("offer.title.l1")}
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {t("offer.title.l2")}
            </em>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1px",
              background: "var(--border)",
              border: "1px solid var(--border)",
              marginTop: "3rem",
            }}
          >
            {items.map((it, i) => (
              <div
                key={i}
                style={{
                  background: "var(--card)",
                  padding: "2rem 1.75rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontSize: "1.375rem",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  {it.icon}
                </span>
                <div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--cream)",
                      letterSpacing: "0.02em",
                      marginBottom: "6px",
                    }}
                  >
                    {it.title}
                  </div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      margin: 0,
                      color: "var(--sage)",
                      lineHeight: 1.7,
                    }}
                  >
                    {it.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
