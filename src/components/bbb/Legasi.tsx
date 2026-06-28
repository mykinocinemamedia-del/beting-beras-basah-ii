'use client';

import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

export function Legasi() {
  const { t } = useLang();

  const elements = [
    { icon: "🏛️", num: "Elemen 01", title: t("legasi.1.title"), desc: t("legasi.1.desc") },
    { icon: "📖", num: "Elemen 02", title: t("legasi.2.title"), desc: t("legasi.2.desc") },
    { icon: "🏟️", num: "Elemen 03", title: t("legasi.3.title"), desc: t("legasi.3.desc") },
    { icon: "🎬", num: "Elemen 04", title: t("legasi.4.title"), desc: t("legasi.4.desc") },
    { icon: "👘", num: "Elemen 05", title: t("legasi.5.title"), desc: t("legasi.5.desc") },
  ];

  const sponsorItems = [
    { title: t("legasi.sponsor.1.title"), desc: t("legasi.sponsor.1.desc") },
    { title: t("legasi.sponsor.2.title"), desc: t("legasi.sponsor.2.desc") },
    { title: t("legasi.sponsor.3.title"), desc: t("legasi.sponsor.3.desc") },
    { title: t("legasi.sponsor.4.title"), desc: t("legasi.sponsor.4.desc") },
  ];

  const metrics = [
    { num: t("legasi.metric1.num"), lbl: t("legasi.metric1.lbl") },
    { num: t("legasi.metric2.num"), lbl: t("legasi.metric2.lbl") },
    { num: t("legasi.metric3.num"), lbl: t("legasi.metric3.lbl") },
    { num: t("legasi.metric4.num"), lbl: t("legasi.metric4.lbl") },
  ];

  const tags = [t("tag.1"), t("tag.2"), t("tag.3"), t("tag.4"), t("tag.5")];

  return (
    <section id="legasi" style={{ background: "var(--surface)" }}>
      <Reveal>
        <div className="bbb-container">
          <div className="section-label">
            <span className="eyebrow">{t("legasi.eyebrow")}</span>
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
            {t("legasi.title.l1")}
            <br />
            {t("legasi.title.l2")}
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {t("legasi.title.l3")}
            </em>
          </h2>

          <p
            style={{
              maxWidth: "620px",
              marginBottom: "3.5rem",
              color: "var(--sage)",
              fontSize: "1rem",
              lineHeight: 1.85,
              marginTop: "1.5rem",
            }}
          >
            {t("legasi.intro")}
          </p>

          {/* 5 Elemen Program */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "1.5px",
              background: "var(--border)",
              border: "1px solid var(--border)",
              marginBottom: "2px",
            }}
            className="legasi-grid"
          >
            {elements.map((el, i) => (
              <div
                key={i}
                style={{
                  background: "var(--card)",
                  padding: "2rem 1.5rem",
                }}
                className="le-card"
              >
                <span
                  style={{
                    fontSize: "1.75rem",
                    display: "block",
                    marginBottom: "1rem",
                  }}
                >
                  {el.icon}
                </span>
                <span
                  style={{
                    fontSize: "0.5875rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                    display: "block",
                  }}
                >
                  {el.num}
                </span>
                <div
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "1.1875rem",
                    color: "var(--cream)",
                    marginBottom: "0.75rem",
                    lineHeight: 1.25,
                  }}
                >
                  {el.title}
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    color: "var(--sage)",
                    margin: 0,
                  }}
                >
                  {el.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Sponsor block */}
          <div
            style={{
              background: "rgba(201,168,76,0.04)",
              border: "1px solid var(--border-strong)",
              borderTop: "3px solid var(--gold)",
              padding: "2.5rem",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "2rem",
                flexWrap: "wrap",
              }}
            >
              <span className="eyebrow">{t("legasi.sponsor.eyebrow")}</span>
              <div
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "1.5rem",
                  color: "var(--cream)",
                  fontWeight: 400,
                }}
              >
                {t("legasi.sponsor.title")}
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.5rem",
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {sponsorItems.map((s, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--gold)",
                      letterSpacing: "0.03em",
                      marginBottom: "6px",
                    }}
                  >
                    {s.title}
                  </div>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--sage)",
                      margin: 0,
                      lineHeight: 1.7,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1.5rem",
                marginBottom: "1.75rem",
              }}
              className="ls-metrics-grid"
            >
              {metrics.map((m, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display), serif",
                      fontSize: "2.25rem",
                      fontWeight: 300,
                      color: "var(--cream)",
                      display: "block",
                      lineHeight: 1,
                      marginBottom: "4px",
                    }}
                  >
                    {m.num}
                  </span>
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      color: "var(--muted)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {m.lbl}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    padding: "5px 12px",
                    border: "1px solid var(--border)",
                    color: "var(--sage)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA to dedicated program page */}
          <div
            style={{
              marginTop: "2.5rem",
              padding: "2rem 2.5rem",
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.02) 100%)",
              border: "1px solid var(--border-strong)",
              borderTop: "3px solid var(--gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "1 1 320px" }}>
              <div
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "1.5rem",
                  color: "var(--cream)",
                  fontWeight: 500,
                  marginBottom: "0.375rem",
                  lineHeight: 1.2,
                }}
              >
                {t("legasi.cta.full")}
              </div>
              <div
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--sage)",
                  lineHeight: 1.5,
                }}
              >
                {t("legasi.cta.full.sub")}
              </div>
            </div>
            <a
              href="/program-legasi"
              className="btn-bbb btn-bbb-primary"
              style={{
                padding: "16px 32px",
                fontSize: "0.9375rem",
              }}
            >
              {t("legasi.cta.full")}
            </a>
          </div>
        </div>
      </Reveal>

      <style jsx>{`
        @media (max-width: 1000px) {
          :global(.legasi-grid) {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          :global(.legasi-grid) {
            grid-template-columns: 1fr 1fr !important;
          }
          :global(.ls-metrics-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 900px) {
          :global(.contrast-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
