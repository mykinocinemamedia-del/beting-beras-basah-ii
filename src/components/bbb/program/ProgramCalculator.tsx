'use client';

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import Reveal from "../Reveal";
import { AnimatedCounter } from "./AnimatedCounter";

const TIERS = [
  { id: 1, nameKey: "prog.calc.tier.1", min: 500, max: 2000, mid: 1250 },
  { id: 2, nameKey: "prog.calc.tier.2", min: 2001, max: 10000, mid: 6000 },
  { id: 3, nameKey: "prog.calc.tier.3", min: 10001, max: 30000, mid: 20000 },
];

// Cost breakdown items (low-high range in RM)
const COST_ITEMS = [
  { id: 1, low: 8000, high: 15000 },
  { id: 2, low: 3000, high: 6000 },
  { id: 3, low: 4000, high: 7000 },
  { id: 4, low: 2000, high: 3000 },
];

// Estimated value of "extras" that can't be bought (low-high)
const EXTRAS_VALUE_LOW = 25000;
const EXTRAS_VALUE_HIGH = 80000;

export function ProgramCalculator() {
  const { t } = useLang();
  const [tierIdx, setTierIdx] = useState(1); // default Sinar Warisan
  const tier = TIERS[tierIdx];

  // Calculate cost subtotal (mid)
  const costLow = COST_ITEMS.reduce((s, c) => s + c.low, 0);
  const costHigh = COST_ITEMS.reduce((s, c) => s + c.high, 0);
  const costMid = (costLow + costHigh) / 2;

  // Total estimated value (with extras)
  const totalLow = costLow + EXTRAS_VALUE_LOW;
  const totalHigh = costHigh + EXTRAS_VALUE_HIGH;
  const totalMid = (totalLow + totalHigh) / 2;

  // User investment (tier mid)
  const investment = tier.mid;

  // ROI multiplier
  const roiLow = totalLow / investment;
  const roiHigh = totalHigh / investment;
  const roiMid = totalMid / investment;

  return (
    <section style={{ background: "var(--surface)", padding: "6rem 0" }}>
      <Reveal>
        <div className="bbb-container">
          <div className="section-label">
            <span className="eyebrow">{t("prog.calc.eyebrow")}</span>
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
            {t("prog.calc.title.1")}
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {t("prog.calc.title.2")}
            </em>
          </h2>
          <p
            style={{
              marginTop: "1.5rem",
              color: "var(--sage)",
              fontSize: "1.0625rem",
              lineHeight: 1.85,
              maxWidth: "680px",
            }}
          >
            {t("prog.calc.intro")}
          </p>

          {/* Tier selector */}
          <div style={{ marginTop: "3rem" }}>
            <div
              style={{
                fontSize: "0.75rem",
                color: "var(--muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.75rem",
              }}
            >
              {t("prog.calc.slider_label")}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0.75rem",
              }}
              className="calc-tier-grid"
            >
              {TIERS.map((t2, i) => {
                const isActive = i === tierIdx;
                return (
                  <button
                    key={t2.id}
                    onClick={() => setTierIdx(i)}
                    style={{
                      padding: "1.25rem 1rem",
                      background: isActive ? "var(--card)" : "transparent",
                      border: isActive
                        ? "1px solid var(--gold)"
                        : "1px solid var(--border-strong)",
                      borderTop: isActive ? "3px solid var(--gold)" : "3px solid transparent",
                      cursor: "pointer",
                      textAlign: "left",
                      color: "inherit",
                      fontFamily: "inherit",
                      transition: "all 0.2s",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.625rem",
                        color: isActive ? "var(--gold)" : "var(--muted)",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        marginBottom: "4px",
                      }}
                    >
                      {t("prog.calc.tier_prefix")} {t2.id}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-display), serif",
                        fontSize: "1.375rem",
                        color: isActive ? "var(--cream)" : "var(--sage)",
                        fontWeight: 500,
                      }}
                    >
                      {t(t2.nameKey)}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--muted)",
                        marginTop: "4px",
                      }}
                    >
                      RM {t2.min.toLocaleString()} – {t2.max.toLocaleString()}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Two columns: cost breakdown + value visualization */}
          <div
            style={{
              marginTop: "3rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}
            className="calc-result-grid"
          >
            {/* Left: Cost breakdown if built separately */}
            <div
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.6875rem",
                  color: "var(--muted)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                }}
              >
                {t("prog.calc.cost_breakdown")}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {COST_ITEMS.map((item) => {
                  const range = (item.high - item.low) / 2;
                  const barLow = (item.low / costHigh) * 100;
                  const barWidth = ((item.high - item.low) / costHigh) * 100;
                  return (
                    <div key={item.id}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          marginBottom: "6px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.875rem",
                            color: "var(--sage)",
                            lineHeight: 1.4,
                          }}
                        >
                          {t(`prog.calc.item.${item.id}`)}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-display), serif",
                            fontSize: "0.9375rem",
                            color: "var(--cream)",
                            fontWeight: 500,
                            marginLeft: "12px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {t(`prog.calc.item.${item.id}.cost`)}
                        </span>
                      </div>
                      {/* Bar */}
                      <div
                        style={{
                          height: "6px",
                          background: "rgba(201,168,76,0.08)",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            left: `${barLow}%`,
                            width: `${barWidth}%`,
                            height: "100%",
                            background:
                              "linear-gradient(90deg, rgba(201,168,76,0.4), rgba(201,168,76,0.8))",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Subtotal */}
              <div
                style={{
                  marginTop: "1.5rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <span
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--muted)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {t("prog.calc.subtotal_label")}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "1.5rem",
                    color: "var(--gold)",
                    fontWeight: 500,
                  }}
                >
                  RM {costLow.toLocaleString()} – {costHigh.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Right: Total value + ROI */}
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border-strong)",
                borderTop: "3px solid var(--gold)",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.6875rem",
                  color: "var(--gold)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                }}
              >
                {t("prog.calc.extras_label")}
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0" }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                      padding: "0.4rem 0",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--gold)",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      ★
                    </span>
                    <span
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--sage)",
                        lineHeight: 1.5,
                      }}
                    >
                      {t(`prog.calc.extra.${i}`)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Total estimated value */}
              <div
                style={{
                  marginTop: "1.5rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid var(--border)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "0.6875rem",
                    color: "var(--muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                  }}
                >
                  {t("prog.calc.total_value")}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "2.5rem",
                    color: "var(--cream)",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  RM{" "}
                  <AnimatedCounter
                    value={totalMid}
                    prefix=""
                    format={(n) => Math.round(n).toLocaleString()}
                  />
                </div>
                <div
                  style={{
                    marginTop: "6px",
                    fontSize: "0.75rem",
                    color: "var(--muted)",
                  }}
                >
                  RM {totalLow.toLocaleString()} – {totalHigh.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* ROI Summary bar */}
          <div
            style={{
              marginTop: "2rem",
              background: "var(--card)",
              border: "1px solid var(--border-strong)",
              borderTop: "3px solid var(--gold)",
              padding: "2rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "1.5rem",
                textAlign: "center",
              }}
              className="roi-grid"
            >
              <div>
                <div
                  style={{
                    fontSize: "0.6875rem",
                    color: "var(--muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                  }}
                >
                  {t("prog.calc.your_investment")}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "2rem",
                    color: "var(--cream)",
                    fontWeight: 400,
                  }}
                >
                  RM {investment.toLocaleString()}
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "0.6875rem",
                    color: "var(--muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                  }}
                >
                  {t("prog.calc.total_value")}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "2rem",
                    color: "var(--cream)",
                    fontWeight: 400,
                  }}
                >
                  RM {totalMid.toLocaleString()}
                </div>
              </div>

              <div>
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
                  {t("prog.calc.roi")}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "2.5rem",
                    color: "var(--gold)",
                    fontWeight: 500,
                  }}
                >
                  <AnimatedCounter
                    value={roiMid}
                    suffix="×"
                    format={(n) => n.toFixed(1)}
                  />
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--muted)",
                  }}
                >
                  {roiLow.toFixed(1)}× – {roiHigh.toFixed(1)}×
                </div>
              </div>
            </div>

            <p
              style={{
                marginTop: "1.5rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--border)",
                textAlign: "center",
                fontFamily: "var(--font-display), serif",
                fontSize: "1.125rem",
                fontStyle: "italic",
                color: "var(--sage)",
                margin: "1.5rem 0 0 0",
                lineHeight: 1.5,
              }}
            >
              {t("prog.calc.conclusion")}
            </p>
          </div>
        </div>
      </Reveal>

      <style jsx>{`
        @media (max-width: 768px) {
          :global(.calc-tier-grid) {
            grid-template-columns: 1fr !important;
          }
          :global(.calc-result-grid) {
            grid-template-columns: 1fr !important;
          }
          :global(.roi-grid) {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
