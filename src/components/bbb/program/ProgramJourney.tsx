'use client';

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import Reveal from "../Reveal";

export function ProgramJourney() {
  const { t } = useLang();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: t("prog.step.1.title"),
      duration: t("prog.step.1.duration"),
      summary: t("prog.step.1.summary"),
      detail: t("prog.step.1.detail"),
      deliverable: t("prog.step.1.deliverable"),
      icon: "🏛️",
    },
    {
      num: "02",
      title: t("prog.step.2.title"),
      duration: t("prog.step.2.duration"),
      summary: t("prog.step.2.summary"),
      detail: t("prog.step.2.detail"),
      deliverable: t("prog.step.2.deliverable"),
      icon: "📖",
    },
    {
      num: "03",
      title: t("prog.step.3.title"),
      duration: t("prog.step.3.duration"),
      summary: t("prog.step.3.summary"),
      detail: t("prog.step.3.detail"),
      deliverable: t("prog.step.3.deliverable"),
      icon: "🏟️",
    },
    {
      num: "04",
      title: t("prog.step.4.title"),
      duration: t("prog.step.4.duration"),
      summary: t("prog.step.4.summary"),
      detail: t("prog.step.4.detail"),
      deliverable: t("prog.step.4.deliverable"),
      icon: "🎬",
    },
    {
      num: "05",
      title: t("prog.step.5.title"),
      duration: t("prog.step.5.duration"),
      summary: t("prog.step.5.summary"),
      detail: t("prog.step.5.detail"),
      deliverable: t("prog.step.5.deliverable"),
      icon: "👘",
    },
    {
      num: "06",
      title: t("prog.step.6.title"),
      duration: t("prog.step.6.duration"),
      summary: t("prog.step.6.summary"),
      detail: t("prog.step.6.detail"),
      deliverable: t("prog.step.6.deliverable"),
      icon: "🎭",
    },
    {
      num: "07",
      title: t("prog.step.7.title"),
      duration: t("prog.step.7.duration"),
      summary: t("prog.step.7.summary"),
      detail: t("prog.step.7.detail"),
      deliverable: t("prog.step.7.deliverable"),
      icon: "🌙",
    },
  ];

  const active = steps[activeStep];

  return (
    <section style={{ background: "var(--bg)", padding: "6rem 0" }}>
      <Reveal>
        <div className="bbb-container">
          <div className="section-label">
            <span className="eyebrow">{t("prog.journey.eyebrow")}</span>
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
            {t("prog.journey.title.1")}
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {t("prog.journey.title.2")}
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
            {t("prog.journey.subtitle")}
          </p>

          {/* Duration badge */}
          <div
            style={{
              marginTop: "2rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 18px",
              background: "rgba(201,168,76,0.08)",
              border: "1px solid var(--border-strong)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                background: "var(--gold)",
                borderRadius: "50%",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "1.5rem",
                color: "var(--cream)",
                fontWeight: 500,
              }}
            >
              {t("prog.journey.duration")}
            </span>
          </div>

          {/* Click hint */}
          <p
            style={{
              marginTop: "2.5rem",
              color: "var(--muted)",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              margin: "2.5rem 0 1rem 0",
            }}
          >
            {t("prog.journey.click_hint")}
          </p>

          {/* Interactive Timeline */}
          <div
            style={{
              marginTop: "1.5rem",
              display: "grid",
              gridTemplateColumns: "280px 1fr",
              gap: "2.5rem",
              alignItems: "start",
            }}
            className="journey-layout"
          >
            {/* Step list (left rail) */}
            <div style={{ position: "relative" }}>
              {/* Vertical line */}
              <div
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "20px",
                  bottom: "20px",
                  width: "1px",
                  background: "var(--border-strong)",
                }}
              />
              {/* Progress overlay */}
              <div
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "20px",
                  width: "1px",
                  height: `calc(${(activeStep / (steps.length - 1)) * 100}% )`,
                  background: "var(--gold)",
                  transition: "height 0.4s ease",
                }}
              />

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {steps.map((step, i) => {
                  const isActive = i === activeStep;
                  const isPast = i < activeStep;
                  return (
                    <li key={i} style={{ marginBottom: "0.5rem" }}>
                      <button
                        onClick={() => setActiveStep(i)}
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: "16px",
                          padding: "12px 14px",
                          background: isActive
                            ? "rgba(201,168,76,0.08)"
                            : "transparent",
                          border: "none",
                          borderLeft: isActive
                            ? "2px solid var(--gold)"
                            : "2px solid transparent",
                          cursor: "pointer",
                          textAlign: "left",
                          color: "inherit",
                          fontFamily: "inherit",
                          transition: "all 0.25s ease",
                          position: "relative",
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive)
                            e.currentTarget.style.background =
                              "rgba(201,168,76,0.04)";
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive)
                            e.currentTarget.style.background = "transparent";
                        }}
                      >
                        {/* Circle marker */}
                        <span
                          style={{
                            position: "relative",
                            zIndex: 2,
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: isActive
                              ? "var(--gold)"
                              : isPast
                              ? "rgba(201,168,76,0.2)"
                              : "var(--bg)",
                            border: isActive
                              ? "2px solid var(--gold)"
                              : isPast
                              ? "2px solid var(--gold)"
                              : "2px solid var(--border-strong)",
                            color: isActive ? "#07120A" : "var(--sage)",
                            fontFamily: "var(--font-display), serif",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            flexShrink: 0,
                            transition: "all 0.25s ease",
                          }}
                        >
                          {step.num}
                        </span>
                        <div style={{ minWidth: 0, flex: 1 }}>
                          <div
                            style={{
                              fontSize: "0.6875rem",
                              color: isActive ? "var(--gold)" : "var(--muted)",
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              fontWeight: 600,
                              marginBottom: "2px",
                            }}
                          >
                            {step.duration}
                          </div>
                          <div
                            style={{
                              fontFamily: "var(--font-display), serif",
                              fontSize: "1.0625rem",
                              color: isActive
                                ? "var(--cream)"
                                : isPast
                                ? "var(--sage)"
                                : "var(--muted)",
                              fontWeight: 400,
                              lineHeight: 1.25,
                              transition: "color 0.25s",
                            }}
                          >
                            {step.title}
                          </div>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Detail panel (right) */}
            <div
              key={activeStep}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderTop: "3px solid var(--gold)",
                padding: "2.5rem",
                animation: "fadeInUp 0.5s ease",
              }}
            >
              {/* Top row: icon + duration + step number */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  marginBottom: "2rem",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "3rem", lineHeight: 1 }}>
                  {active.icon}
                </span>
                <div>
                  <div
                    style={{
                      fontSize: "0.6875rem",
                      color: "var(--gold)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      marginBottom: "4px",
                    }}
                  >
                    {t("prog.journey.eyebrow")} · {active.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display), serif",
                      fontSize: "2rem",
                      fontWeight: 500,
                      color: "var(--cream)",
                      margin: 0,
                      lineHeight: 1.1,
                    }}
                  >
                    {active.title}
                  </h3>
                  <div
                    style={{
                      marginTop: "6px",
                      fontSize: "0.8125rem",
                      color: "var(--muted)",
                    }}
                  >
                    {active.duration}
                  </div>
                </div>
              </div>

              {/* Summary - prominent */}
              <p
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "1.375rem",
                  color: "var(--cream)",
                  lineHeight: 1.5,
                  margin: "0 0 1.5rem 0",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                {active.summary}
              </p>

              {/* Detail - body text */}
              <p
                style={{
                  color: "var(--sage)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.85,
                  margin: 0,
                }}
              >
                {active.detail}
              </p>

              {/* Deliverable chip */}
              <div
                style={{
                  marginTop: "2rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--muted)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {t("prog.step.1.deliverable").split(" ").slice(0, 1).join(" ")}:
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--gold)",
                    fontWeight: 600,
                  }}
                >
                  {active.deliverable}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              style={{
                padding: "10px 20px",
                background: "transparent",
                border: "1px solid var(--border-strong)",
                color: activeStep === 0 ? "var(--muted)" : "var(--sage)",
                cursor: activeStep === 0 ? "not-allowed" : "pointer",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                transition: "all 0.2s",
                fontFamily: "inherit",
              }}
            >
              ← Sebelumnya
            </button>
            <div
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "1.25rem",
                color: "var(--gold)",
              }}
            >
              {active.num} <span style={{ color: "var(--muted)" }}>/ 07</span>
            </div>
            <button
              onClick={() =>
                setActiveStep(Math.min(steps.length - 1, activeStep + 1))
              }
              disabled={activeStep === steps.length - 1}
              style={{
                padding: "10px 20px",
                background:
                  activeStep === steps.length - 1
                    ? "transparent"
                    : "var(--gold)",
                border:
                  activeStep === steps.length - 1
                    ? "1px solid var(--border-strong)"
                    : "1px solid var(--gold)",
                color:
                  activeStep === steps.length - 1 ? "var(--muted)" : "#07120A",
                cursor:
                  activeStep === steps.length - 1 ? "not-allowed" : "pointer",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                transition: "all 0.2s",
                fontFamily: "inherit",
              }}
            >
              Seterusnya →
            </button>
          </div>
        </div>
      </Reveal>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          :global(.journey-layout) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
