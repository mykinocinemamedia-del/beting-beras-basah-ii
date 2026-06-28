'use client';

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import Reveal from "../Reveal";
import { AnimatedCounter } from "./AnimatedCounter";

export function ProgramHiddenValue() {
  const { t } = useLang();
  const [adSpend, setAdSpend] = useState(30000); // slider value in RM

  const organicItems = [
    t("prog.hidden.organic.1"),
    t("prog.hidden.organic.2"),
    t("prog.hidden.organic.3"),
    t("prog.hidden.organic.4"),
  ];

  return (
    <section style={{ background: "var(--bg)", padding: "6rem 0" }}>
      <Reveal>
        <div className="bbb-container">
          <div className="section-label">
            <span className="eyebrow">{t("prog.hidden.eyebrow")}</span>
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
            {t("prog.hidden.title.1")}
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {t("prog.hidden.title.2")}
            </em>
          </h2>
          <p
            style={{
              marginTop: "1.5rem",
              color: "var(--sage)",
              fontSize: "1.0625rem",
              lineHeight: 1.85,
              maxWidth: "720px",
            }}
          >
            {t("prog.hidden.intro")}
          </p>

          {/* Interactive ad-cost calculator */}
          <div
            style={{
              marginTop: "3rem",
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderTop: "3px solid var(--gold)",
              padding: "2.5rem",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "1.5rem",
                color: "var(--cream)",
                fontWeight: 500,
                margin: "0 0 1.5rem 0",
                fontStyle: "italic",
              }}
            >
              {t("prog.hidden.calculator_title")}
            </h3>

            {/* Slider */}
            <div style={{ marginBottom: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "0.75rem",
                }}
              >
                <label
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--muted)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {t("prog.hidden.cost_label")}
                </label>
                <span
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "1.75rem",
                    color: "var(--gold)",
                    fontWeight: 500,
                  }}
                >
                  RM {adSpend.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={5000}
                max={80000}
                step={1000}
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                style={{
                  width: "100%",
                  height: "6px",
                  appearance: "none",
                  background:
                    "linear-gradient(to right, var(--gold) 0%, var(--gold) " +
                    ((adSpend - 5000) / (80000 - 5000)) * 100 +
                    "%, rgba(201,168,76,0.15) " +
                    ((adSpend - 5000) / (80000 - 5000)) * 100 +
                    "%, rgba(201,168,76,0.15) 100%)",
                  borderRadius: "3px",
                  outline: "none",
                  cursor: "pointer",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "6px",
                  fontSize: "0.6875rem",
                  color: "var(--muted)",
                }}
              >
                <span>RM 5,000</span>
                <span>RM 80,000</span>
              </div>
            </div>

            {/* Comparison cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
              }}
              className="hidden-value-grid"
            >
              {/* Paid ads */}
              <div
                style={{
                  padding: "1.75rem",
                  background: "rgba(7,18,10,0.6)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.625rem",
                    color: "var(--muted)",
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                  }}
                >
                  {t("prog.hidden.paid_label")}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "2.25rem",
                    color: "var(--muted)",
                    fontWeight: 300,
                    marginBottom: "0.75rem",
                    lineHeight: 1,
                  }}
                >
                  -RM {adSpend.toLocaleString()}
                </div>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--muted)",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {t("prog.hidden.paid_desc")}
                </p>
              </div>

              {/* Organic */}
              <div
                style={{
                  padding: "1.75rem",
                  background: "rgba(201,168,76,0.05)",
                  border: "1px solid var(--border-strong)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.625rem",
                    color: "var(--gold)",
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                  }}
                >
                  {t("prog.hidden.organic_label")}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "2.25rem",
                    color: "var(--gold)",
                    fontWeight: 400,
                    marginBottom: "0.75rem",
                    lineHeight: 1,
                  }}
                >
                  +RM{" "}
                  <AnimatedCounter
                    value={adSpend}
                    format={(n) => Math.round(n).toLocaleString()}
                  />
                </div>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--sage)",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  <strong style={{ color: "var(--cream)" }}>
                    {t("prog.hidden.savings_label")} RM {adSpend.toLocaleString()}
                  </strong>{" "}
                  — capaian organik yang kekal, cerita sebenar dari manusia sebenar.
                </p>
              </div>
            </div>

            {/* Organic items list */}
            <div
              style={{
                marginTop: "2rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  fontSize: "0.6875rem",
                  color: "var(--muted)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginBottom: "1rem",
                }}
              >
                {t("prog.hidden.organic_list_label")}
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                }}
                className="organic-list"
              >
                {organicItems.map((it, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      padding: "0.6rem 0.85rem",
                      background: "rgba(7,18,10,0.4)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--gold)",
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      ★
                    </span>
                    <span
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--sage)",
                        lineHeight: 1.4,
                      }}
                    >
                      {it}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p
              style={{
                marginTop: "1.5rem",
                fontStyle: "italic",
                color: "var(--sage)",
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                textAlign: "center",
                margin: "1.5rem 0 0 0",
              }}
            >
              {t("prog.hidden.note")}
            </p>
          </div>
        </div>
      </Reveal>

      <style jsx>{`
        @media (max-width: 768px) {
          :global(.hidden-value-grid) {
            grid-template-columns: 1fr !important;
          }
          :global(.organic-list) {
            grid-template-columns: 1fr !important;
          }
        }
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--gold);
          cursor: pointer;
          border: 3px solid var(--bg);
          box-shadow: 0 2px 8px rgba(201,168,76,0.4);
          transition: transform 0.15s;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }
        input[type="range"]::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--gold);
          cursor: pointer;
          border: 3px solid var(--bg);
          box-shadow: 0 2px 8px rgba(201,168,76,0.4);
        }
      `}</style>
    </section>
  );
}
