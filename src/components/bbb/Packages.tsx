'use client';

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";
import { useWhatsApp } from "./use-whatsapp";

export function Packages() {
  const { t } = useLang();
  const waLink = useWhatsApp();

  const packages = [
    {
      tier: t("pkg.1.tier"),
      name: t("pkg.1.name"),
      price: t("pkg.1.price"),
      note: t("pkg.1.note"),
      features: [t("pkg.1.f1"), t("pkg.1.f2"), t("pkg.1.f3")],
      featured: false,
      waText:
        "Salam, saya berminat dengan Pakej Saujana untuk penajaan Teater Bangsawan Beting Basah.",
      isLegasi: false,
    },
    {
      tier: t("pkg.2.tier"),
      name: t("pkg.2.name"),
      price: t("pkg.2.price"),
      note: t("pkg.2.note"),
      features: [
        t("pkg.2.f1"),
        t("pkg.2.f2"),
        t("pkg.2.f3"),
        t("pkg.2.f4"),
        t("pkg.2.f5"),
      ],
      featured: true,
      badge: t("pkg.2.badge"),
      waText:
        "Salam, saya berminat dengan Pakej Sinar Warisan untuk penajaan Teater Bangsawan Beting Basah.",
      isLegasi: false,
    },
    {
      tier: t("pkg.3.tier"),
      name: t("pkg.3.name"),
      price: t("pkg.3.price"),
      note: t("pkg.3.note"),
      features: [
        t("pkg.3.f1"),
        t("pkg.3.f2"),
        t("pkg.3.f3"),
        t("pkg.3.f4"),
        t("pkg.3.f5"),
        t("pkg.3.f6"),
        t("pkg.3.f7"),
        t("pkg.3.f8"),
      ],
      featured: false,
      waText:
        "Salam, saya berminat dengan Pakej Wira Budaya untuk penajaan Teater Bangsawan Beting Basah.",
      isLegasi: false,
    },
    {
      // Package 4 — Program Bangsawan Legasi (special card with link to /program-legasi)
      tier: t("pkg.4.tier"),
      name: t("pkg.4.name"),
      price: t("pkg.4.price"),
      note: t("pkg.4.note"),
      features: [
        t("pkg.4.f1"),
        t("pkg.4.f2"),
        t("pkg.4.f3"),
        t("pkg.4.f4"),
        t("pkg.4.f5"),
        t("pkg.4.f6"),
      ],
      // Additional deliverables (rendered in second column)
      f7: t("pkg.4.f7"),
      f8: t("pkg.4.f8"),
      f9: t("pkg.4.f9"),
      f10: t("pkg.4.f10"),
      f11: t("pkg.4.f11"),
      f12: t("pkg.4.f12"),
      featured: false,
      isLegasi: true,
    },
  ];

  return (
    <section id="packages" style={{ background: "var(--bg)" }}>
      <Reveal>
        <div className="bbb-container">
          <div className="section-label" style={{ justifyContent: "center" }}>
            <span className="eyebrow">{t("pkg.eyebrow")}</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
              fontWeight: 500,
              lineHeight: 1.08,
              color: "var(--cream)",
              margin: 0,
              textAlign: "center",
            }}
          >
            {t("pkg.title.l1")}
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {t("pkg.title.l2")}
            </em>
          </h2>
          <p
            style={{
              textAlign: "center",
              maxWidth: "460px",
              margin: "1rem auto 0",
              color: "var(--sage)",
              fontSize: "1rem",
            }}
          >
            {t("pkg.sub")}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5px",
              background: "var(--border)",
              border: "1px solid var(--border)",
              marginTop: "3rem",
            }}
          >
            {packages.map((pkg, i) => {
              const waHref = `https://wa.me/60176635990?text=${encodeURIComponent(pkg.waText || "")}`;

              // Special card for Program Bangsawan Legasi (full-width, detailed)
              if (pkg.isLegasi) {
                return (
                  <div
                    key={i}
                    style={{
                      background:
                        "linear-gradient(180deg, #112718 0%, #0C1F11 100%)",
                      padding: "2.5rem 2rem",
                      position: "relative",
                      borderTop: "3px solid var(--gold)",
                      gridColumn: "1 / -1", // span all columns (full width)
                    }}
                  >
                    {/* Highlight badge */}
                    <span
                      style={{
                        position: "absolute",
                        top: "-1px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "var(--cream)",
                        color: "#07120A",
                        fontSize: "0.5rem",
                        fontWeight: 800,
                        letterSpacing: "0.12em",
                        padding: "4px 16px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      PROGRAM MODAL INSAN
                    </span>

                    {/* Header row: tier + name + price (left) | stats (right) */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1.5fr 1fr",
                        gap: "2rem",
                        alignItems: "start",
                        marginTop: "1rem",
                      }}
                      className="legasi-header-grid"
                    >
                      <div>
                        <div
                          style={{
                            fontSize: "0.625rem",
                            fontWeight: 700,
                            letterSpacing: "0.13em",
                            textTransform: "uppercase",
                            color: "var(--gold)",
                            marginBottom: "0.375rem",
                          }}
                        >
                          {pkg.tier}
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-display), serif",
                            fontSize: "2.25rem",
                            fontWeight: 400,
                            color: "var(--cream)",
                            marginBottom: "0.5rem",
                            lineHeight: 1.1,
                          }}
                        >
                          {pkg.name}
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-display), serif",
                            fontSize: "1.5rem",
                            fontWeight: 300,
                            color: "var(--gold)",
                            marginBottom: "0.75rem",
                            fontStyle: "italic",
                          }}
                        >
                          {pkg.price}
                        </div>
                        <p
                          style={{
                            fontSize: "0.9375rem",
                            color: "var(--sage)",
                            margin: 0,
                            lineHeight: 1.7,
                            maxWidth: "520px",
                          }}
                        >
                          {pkg.note}
                        </p>
                        <p
                          style={{
                            fontSize: "0.8125rem",
                            color: "var(--gold)",
                            margin: "0.75rem 0 0 0",
                            fontStyle: "italic",
                            letterSpacing: "0.02em",
                          }}
                        >
                          {t("pkg.4.intro")}
                        </p>
                      </div>

                      {/* Stats column */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                          padding: "1.25rem",
                          background: "rgba(7,18,10,0.5)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        <div style={{ textAlign: "center" }}>
                          <div
                            style={{
                              fontFamily: "var(--font-display), serif",
                              fontSize: "1.75rem",
                              color: "var(--cream)",
                              fontWeight: 400,
                              lineHeight: 1,
                            }}
                          >
                            {t("pkg.4.stats.weeks")}
                          </div>
                        </div>
                        <div
                          style={{
                            height: "1px",
                            background: "var(--border)",
                          }}
                        />
                        <div style={{ textAlign: "center" }}>
                          <div
                            style={{
                              fontFamily: "var(--font-display), serif",
                              fontSize: "1.75rem",
                              color: "var(--cream)",
                              fontWeight: 400,
                              lineHeight: 1,
                            }}
                          >
                            {t("pkg.4.stats.hours")}
                          </div>
                        </div>
                        <div
                          style={{
                            height: "1px",
                            background: "var(--border)",
                          }}
                        />
                        <div style={{ textAlign: "center" }}>
                          <div
                            style={{
                              fontFamily: "var(--font-display), serif",
                              fontSize: "1.75rem",
                              color: "var(--cream)",
                              fontWeight: 400,
                              lineHeight: 1,
                            }}
                          >
                            {t("pkg.4.stats.students")}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Two-column features: Program Elements + What You Bring Home */}
                    <div
                      style={{
                        marginTop: "2rem",
                        paddingTop: "2rem",
                        borderTop: "1px solid var(--border)",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "2rem",
                      }}
                      className="legasi-features-grid"
                    >
                      {/* Section 1: 5 Elemen Program */}
                      <div>
                        <div
                          style={{
                            fontSize: "0.625rem",
                            color: "var(--gold)",
                            letterSpacing: "0.13em",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            marginBottom: "1rem",
                          }}
                        >
                          {t("pkg.4.section1.label")}
                        </div>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                          {[pkg.f1, pkg.f2, pkg.f3, pkg.f4, pkg.f5, pkg.f6].map((f, j) => (
                            <li
                              key={j}
                              style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "flex-start",
                                fontSize: "0.875rem",
                                color: "var(--cream)",
                                marginBottom: "10px",
                                lineHeight: 1.5,
                              }}
                            >
                              <span
                                style={{
                                  color: "var(--gold)",
                                  flexShrink: 0,
                                  fontWeight: 700,
                                }}
                              >
                                ✓
                              </span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Section 2: Apa Yang Bawa Pulang */}
                      <div>
                        <div
                          style={{
                            fontSize: "0.625rem",
                            color: "var(--gold)",
                            letterSpacing: "0.13em",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            marginBottom: "1rem",
                          }}
                        >
                          {t("pkg.4.section2.label")}
                        </div>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                          {[pkg.f7, pkg.f8, pkg.f9, pkg.f10, pkg.f11, pkg.f12].map((f, j) => (
                            <li
                              key={j}
                              style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "flex-start",
                                fontSize: "0.875rem",
                                color: "var(--cream)",
                                marginBottom: "10px",
                                lineHeight: 1.5,
                              }}
                            >
                              <span
                                style={{
                                  color: "var(--gold)",
                                  flexShrink: 0,
                                  fontWeight: 700,
                                }}
                              >
                                ★
                              </span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA row */}
                    <div
                      style={{
                        marginTop: "2rem",
                        paddingTop: "1.5rem",
                        borderTop: "1px solid var(--border)",
                        display: "flex",
                        gap: "0.75rem",
                        justifyContent: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <Link
                        href="/program-legasi"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "14px 32px",
                          background: "var(--gold)",
                          color: "#07120A",
                          textDecoration: "none",
                          fontSize: "0.875rem",
                          fontWeight: 700,
                          letterSpacing: "0.05em",
                          transition: "all 0.2s",
                          border: "1px solid var(--gold)",
                        }}
                      >
                        {t("pkg.4.cta.primary")}
                      </Link>
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "14px 32px",
                          border: "1px solid var(--border-strong)",
                          background: "transparent",
                          color: "var(--cream)",
                          textDecoration: "none",
                          fontSize: "0.8125rem",
                          fontWeight: 600,
                          letterSpacing: "0.05em",
                          transition: "all 0.2s",
                        }}
                      >
                        {t("pkg.4.cta.secondary")}
                      </a>
                    </div>
                  </div>
                );
              }

              // Standard package card
              return (
                <div
                  key={i}
                  style={{
                    background: pkg.featured ? "#162E1A" : "var(--card)",
                    padding: "2.5rem 2rem",
                    position: "relative",
                  }}
                >
                  {pkg.badge && (
                    <span
                      style={{
                        position: "absolute",
                        top: "-1px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "var(--gold)",
                        color: "#07120A",
                        fontSize: "0.5rem",
                        fontWeight: 800,
                        letterSpacing: "0.12em",
                        padding: "4px 16px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {pkg.badge}
                    </span>
                  )}
                  <div
                    style={{
                      fontSize: "0.625rem",
                      fontWeight: 700,
                      letterSpacing: "0.13em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: "0.375rem",
                      marginTop: pkg.badge ? "1rem" : 0,
                    }}
                  >
                    {pkg.tier}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display), serif",
                      fontSize: "1.875rem",
                      fontWeight: 400,
                      color: "var(--cream)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {pkg.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display), serif",
                      fontSize: "2.25rem",
                      fontWeight: 300,
                      color: "var(--cream)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {pkg.price}
                  </div>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--muted)",
                      marginBottom: "1.5rem",
                      margin: "0 0 1.5rem 0",
                    }}
                  >
                    {pkg.note}
                  </p>
                  <div
                    style={{
                      height: "1px",
                      background: "var(--border)",
                      marginBottom: "1.5rem",
                    }}
                  />
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {pkg.features.map((f, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "flex-start",
                          fontSize: "0.875rem",
                          color: "var(--sage)",
                          marginBottom: "10px",
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          style={{
                            color: "var(--gold)",
                            flexShrink: 0,
                            fontWeight: 700,
                          }}
                        >
                          ✓
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      textAlign: "center",
                      marginTop: "2rem",
                      padding: "13px 24px",
                      border: pkg.featured
                        ? "1px solid var(--gold)"
                        : "1px solid var(--border-strong)",
                      background: pkg.featured ? "var(--gold)" : "transparent",
                      color: pkg.featured ? "#07120A" : "var(--cream)",
                      textDecoration: "none",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      transition: "all 0.2s",
                    }}
                  >
                    {t("pkg.btn")}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>

      <style jsx>{`
        @media (max-width: 768px) {
          :global(.legasi-header-grid) {
            grid-template-columns: 1fr !important;
          }
          :global(.legasi-features-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
