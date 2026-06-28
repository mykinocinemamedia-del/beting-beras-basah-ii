'use client';

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import Reveal from "../Reveal";

export function ProgramBoardroom() {
  const { t } = useLang();
  const [activeCard, setActiveCard] = useState<number | null>(0);

  const cards = [
    {
      num: "01",
      title: t("prog.board.1.title"),
      tag: t("prog.board.1.tag"),
      desc: t("prog.board.1.desc"),
      icon: "📋",
    },
    {
      num: "02",
      title: t("prog.board.2.title"),
      tag: t("prog.board.2.tag"),
      desc: t("prog.board.2.desc"),
      icon: "📊",
    },
    {
      num: "03",
      title: t("prog.board.3.title"),
      tag: t("prog.board.3.tag"),
      desc: t("prog.board.3.desc"),
      icon: "📸",
    },
    {
      num: "04",
      title: t("prog.board.4.title"),
      tag: t("prog.board.4.tag"),
      desc: t("prog.board.4.desc"),
      icon: "📚",
    },
    {
      num: "05",
      title: t("prog.board.5.title"),
      tag: t("prog.board.5.tag"),
      desc: t("prog.board.5.desc"),
      icon: "📰",
    },
  ];

  return (
    <section style={{ background: "var(--surface)", padding: "6rem 0" }}>
      <Reveal>
        <div className="bbb-container">
          <div className="section-label">
            <span className="eyebrow">{t("prog.board.eyebrow")}</span>
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
            {t("prog.board.title.1")}
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {t("prog.board.title.2")}
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
            {t("prog.board.subtitle")}
          </p>

          {/* Visual: "On the table" representation */}
          <div style={{ marginTop: "3rem" }}>
            {/* Table line */}
            <div
              style={{
                position: "relative",
                padding: "2rem 0",
              }}
            >
              {/* Horizontal table line */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: "50%",
                  height: "1px",
                  background:
                    "linear-gradient(to right, transparent, var(--gold), transparent)",
                }}
              />

              {/* Cards grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: "0.75rem",
                  position: "relative",
                  zIndex: 1,
                }}
                className="board-grid"
              >
                {cards.map((card, i) => {
                  const isActive = i === activeCard;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveCard(isActive ? null : i)}
                      style={{
                        background: isActive ? "var(--card)" : "rgba(7,18,10,0.6)",
                        border: isActive
                          ? "1px solid var(--gold)"
                          : "1px solid var(--border)",
                        borderTop: isActive
                          ? "3px solid var(--gold)"
                          : "3px solid transparent",
                        padding: "1.5rem 1rem",
                        cursor: "pointer",
                        textAlign: "left",
                        color: "inherit",
                        fontFamily: "inherit",
                        transition: "all 0.25s ease",
                        transform: isActive ? "translateY(-4px)" : "translateY(0)",
                        boxShadow: isActive
                          ? "0 12px 32px rgba(201,168,76,0.12)"
                          : "none",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "1.75rem",
                          marginBottom: "0.5rem",
                          display: "block",
                          lineHeight: 1,
                        }}
                      >
                        {card.icon}
                      </div>
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
                        {card.num} · {card.tag}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-display), serif",
                          fontSize: "0.9375rem",
                          color: isActive ? "var(--cream)" : "var(--sage)",
                          fontWeight: 500,
                          lineHeight: 1.25,
                        }}
                      >
                        {card.title}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detail panel below */}
            <div
              style={{
                marginTop: "1.5rem",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderTop: "3px solid var(--gold)",
                padding: "2rem 2.5rem",
                minHeight: "180px",
                transition: "all 0.3s",
              }}
              key={activeCard}
            >
              {activeCard !== null ? (
                <div style={{ animation: "fadeInUp 0.4s ease" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <span style={{ fontSize: "2.25rem", lineHeight: 1 }}>
                      {cards[activeCard].icon}
                    </span>
                    <div>
                      <div
                        style={{
                          fontSize: "0.6875rem",
                          color: "var(--gold)",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          fontWeight: 700,
                        }}
                      >
                        {cards[activeCard].num} · {cards[activeCard].tag}
                      </div>
                      <h3
                        style={{
                          fontFamily: "var(--font-display), serif",
                          fontSize: "1.625rem",
                          color: "var(--cream)",
                          margin: 0,
                          fontWeight: 500,
                          lineHeight: 1.2,
                        }}
                      >
                        {cards[activeCard].title}
                      </h3>
                    </div>
                  </div>
                  <p
                    style={{
                      color: "var(--sage)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.85,
                      margin: 0,
                    }}
                  >
                    {cards[activeCard].desc}
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    color: "var(--muted)",
                    fontSize: "0.875rem",
                    padding: "1rem 0",
                  }}
                >
                  {t("prog.board.click_hint")}
                </div>
              )}
            </div>
          </div>
        </div>
      </Reveal>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          :global(.board-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          :global(.board-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
