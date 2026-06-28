'use client';

import { useLang } from "@/lib/i18n";
import Reveal from "../Reveal";

export function ProgramProblem() {
  const { t } = useLang();

  const typicalItems = [
    t("prog.problem.typical.1"),
    t("prog.problem.typical.2"),
    t("prog.problem.typical.3"),
    t("prog.problem.typical.4"),
    t("prog.problem.typical.5"),
  ];

  const bbbItems = [
    t("prog.problem.bbb.1"),
    t("prog.problem.bbb.2"),
    t("prog.problem.bbb.3"),
    t("prog.problem.bbb.4"),
    t("prog.problem.bbb.5"),
  ];

  return (
    <section style={{ background: "var(--surface)", padding: "6rem 0" }}>
      <Reveal>
        <div className="bbb-container">
          <div className="section-label">
            <span className="eyebrow">{t("prog.problem.eyebrow")}</span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 500,
              lineHeight: 1.1,
              color: "var(--cream)",
              margin: 0,
              maxWidth: "760px",
            }}
          >
            {t("prog.problem.title.1")}
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {t("prog.problem.title.2")}
            </em>
          </h2>

          <div style={{ marginTop: "2.5rem", maxWidth: "760px" }}>
            <p
              style={{
                color: "var(--sage)",
                fontSize: "1.0625rem",
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              {t("prog.problem.intro")}
            </p>

            <div
              style={{
                marginTop: "2rem",
                padding: "1.5rem 1.75rem",
                background: "rgba(201,168,76,0.06)",
                borderLeft: "3px solid var(--gold)",
                borderRight: "1px solid var(--border)",
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "1.3rem",
                  color: "var(--cream)",
                  fontStyle: "italic",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {t("prog.problem.question")}
              </p>
            </div>

            <p
              style={{
                marginTop: "1.5rem",
                color: "var(--sage)",
                fontSize: "1rem",
                lineHeight: 1.85,
                margin: "1.5rem 0 0 0",
              }}
            >
              {t("prog.problem.realization")}
            </p>
          </div>

          {/* Side-by-side comparison */}
          <div
            style={{
              marginTop: "4rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
            }}
            className="problem-grid"
          >
            {/* Typical */}
            <div
              style={{
                background: "rgba(7,18,10,0.6)",
                border: "1px solid var(--border)",
                padding: "2rem",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  fontSize: "0.625rem",
                  fontWeight: 700,
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: "1.5rem",
                  padding: "4px 12px",
                  border: "1px solid var(--border)",
                }}
              >
                ✗ {t("prog.problem.typical.label")}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {typicalItems.map((it, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                      padding: "0.75rem 0",
                      borderBottom:
                        i < typicalItems.length - 1
                          ? "1px solid var(--border)"
                          : "none",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--muted)",
                        fontSize: "1.1rem",
                        lineHeight: 1,
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      ×
                    </span>
                    <span
                      style={{
                        color: "var(--muted)",
                        fontSize: "0.9375rem",
                        lineHeight: 1.5,
                        textDecoration: "line-through",
                        textDecorationColor: "rgba(74,104,85,0.4)",
                      }}
                    >
                      {it}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* BBB */}
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border-strong)",
                borderTop: "3px solid var(--gold)",
                padding: "2rem",
                position: "relative",
                boxShadow: "0 12px 40px rgba(201,168,76,0.06)",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  fontSize: "0.625rem",
                  fontWeight: 700,
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "1.5rem",
                  padding: "4px 12px",
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid var(--border-strong)",
                }}
              >
                ✓ {t("prog.problem.bbb.label")}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {bbbItems.map((it, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                      padding: "0.75rem 0",
                      borderBottom:
                        i < bbbItems.length - 1
                          ? "1px solid var(--border)"
                          : "none",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--gold)",
                        fontSize: "1.1rem",
                        lineHeight: 1,
                        flexShrink: 0,
                        marginTop: "2px",
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </span>
                    <span
                      style={{
                        color: "var(--cream)",
                        fontSize: "0.9375rem",
                        lineHeight: 1.5,
                        fontWeight: 500,
                      }}
                    >
                      {it}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      <style jsx>{`
        @media (max-width: 768px) {
          :global(.problem-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
