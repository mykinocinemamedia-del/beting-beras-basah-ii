'use client';

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

export function FAQ() {
  const { t } = useLang();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: t("faq.1.q"), a: t("faq.1.a") },
    { q: t("faq.2.q"), a: t("faq.2.a") },
    { q: t("faq.3.q"), a: t("faq.3.a") },
    { q: t("faq.4.q"), a: t("faq.4.a") },
    { q: t("faq.5.q"), a: t("faq.5.a") },
    { q: t("faq.6.q"), a: t("faq.6.a") },
  ];

  return (
    <section id="faq" style={{ background: "var(--bg)" }}>
      <Reveal>
        <div className="bbb-container-sm">
          <div className="section-label">
            <span className="eyebrow">{t("faq.eyebrow")}</span>
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
            {t("faq.title.l1")}
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {t("faq.title.l2")}
            </em>
          </h2>

          <div style={{ marginTop: "3rem" }}>
            {faqs.map((faq, i) => {
              const isOpen = openIdx === i;
              return (
                <div
                  key={i}
                  style={{
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1.5rem 0",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      color: "inherit",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display), serif",
                        fontSize: "1.25rem",
                        color: "var(--cream)",
                        fontWeight: 400,
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      style={{
                        color: "var(--gold)",
                        fontSize: "1.375rem",
                        flexShrink: 0,
                        transition: "transform 0.3s",
                        transform: isOpen ? "rotate(45deg)" : "none",
                        lineHeight: 1,
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: isOpen ? "500px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease",
                    }}
                  >
                    <div style={{ paddingBottom: "1.5rem" }}>
                      <p
                        style={{
                          fontSize: "0.9375rem",
                          color: "var(--sage)",
                          margin: 0,
                          lineHeight: 1.85,
                        }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
