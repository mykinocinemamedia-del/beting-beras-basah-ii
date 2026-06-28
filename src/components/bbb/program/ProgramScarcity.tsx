'use client';

import { useLang } from "@/lib/i18n";
import Reveal from "../Reveal";
import { AnimatedCounter } from "./AnimatedCounter";

export function ProgramScarcity() {
  const { t } = useLang();

  const uniquenessItems = [
    { num: 1, label: "500 Tahun Kesultanan Perak", value: "1× seumur hidup" },
    { num: 2, label: "Pembukaan Semula Istana Budaya", value: "Sekali sahaja" },
    { num: 3, label: "Holografik pertama di IB", value: "Baris pertama sejarah" },
  ];

  return (
    <section style={{ background: "var(--surface)", padding: "6rem 0" }}>
      <Reveal>
        <div className="bbb-container">
          <div className="section-label">
            <span className="eyebrow">{t("prog.scarcity.eyebrow")}</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 500,
              lineHeight: 1.1,
              color: "var(--cream)",
              margin: 0,
            }}
          >
            {t("prog.scarcity.title.1")}
            <br />
            {t("prog.scarcity.title.2")}
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {t("prog.scarcity.title.3")}
            </em>
          </h2>

          <div style={{ marginTop: "2.5rem", maxWidth: "760px" }}>
            <p
              style={{
                color: "var(--sage)",
                fontSize: "1.0625rem",
                lineHeight: 1.85,
                margin: "0 0 1.5rem 0",
              }}
            >
              {t("prog.scarcity.body.1")}
            </p>
            <p
              style={{
                color: "var(--sage)",
                fontSize: "1.0625rem",
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              {t("prog.scarcity.body.2")}
            </p>
          </div>

          {/* Three uniqueness cards */}
          <div
            style={{
              marginTop: "3rem",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
            }}
            className="scarcity-grid"
          >
            {uniquenessItems.map((item) => (
              <div
                key={item.num}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderTop: "3px solid var(--gold)",
                  padding: "2rem 1.5rem",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "4rem",
                    color: "rgba(201,168,76,0.12)",
                    fontWeight: 300,
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  <AnimatedCounter
                    value={1}
                    format={() => "1"}
                    suffix="×"
                  />
                </div>
                <div
                  style={{
                    fontSize: "0.6875rem",
                    color: "var(--gold)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "1.125rem",
                    color: "var(--cream)",
                    fontWeight: 500,
                    lineHeight: 1.3,
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* First mover callout */}
          <div
            style={{
              marginTop: "3rem",
              padding: "2.5rem",
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.02) 100%)",
              border: "1px solid var(--border-strong)",
              borderTop: "3px solid var(--gold)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "var(--cream)",
                fontStyle: "italic",
                fontWeight: 400,
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              {t("prog.scarcity.first_mover")}
            </p>
          </div>
        </div>
      </Reveal>

      <style jsx>{`
        @media (max-width: 768px) {
          :global(.scarcity-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
