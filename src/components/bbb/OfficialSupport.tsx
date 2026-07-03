'use client';

import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

type Letter = {
  num: string;
  org: string;
  date: string;
  ref: string;
  subject: string;
  summary: string;
  highlight: string;
  pdfUrl: string;
  signatory?: string;
};

export function OfficialSupport() {
  const { t } = useLang();

  const letters: Letter[] = [
    {
      num: "01",
      org: t("support.letter.1.org"),
      date: t("support.letter.1.date"),
      ref: t("support.letter.1.ref"),
      subject: t("support.letter.1.subject"),
      summary: t("support.letter.1.summary"),
      highlight: t("support.letter.1.highlight"),
      pdfUrl: "/documents/Surat-Jawapan-Pementasan-Bangsawan-IB.pdf",
    },
    {
      num: "02",
      org: t("support.letter.2.org"),
      date: t("support.letter.2.date"),
      ref: t("support.letter.2.ref"),
      subject: t("support.letter.2.subject"),
      summary: t("support.letter.2.summary"),
      highlight: t("support.letter.2.highlight"),
      pdfUrl: "/documents/Surat-Sokongan-Pementasan-BBB-II.pdf",
    },
    {
      num: "03",
      org: t("support.letter.3.org"),
      date: t("support.letter.3.date"),
      ref: t("support.letter.3.ref"),
      subject: t("support.letter.3.subject"),
      summary: t("support.letter.3.summary"),
      highlight: t("support.letter.3.highlight"),
      pdfUrl: "/documents/Surat-Sokongan-JWN-BBB-II.pdf",
    },
    {
      num: "04",
      org: t("support.letter.4.org"),
      date: t("support.letter.4.date"),
      ref: t("support.letter.4.ref"),
      subject: t("support.letter.4.subject"),
      summary: t("support.letter.4.summary"),
      highlight: t("support.letter.4.highlight"),
      pdfUrl: "/documents/Surat-Sokongan-JKKN-BBB-II.pdf",
    },
    {
      num: "05",
      org: t("support.letter.5.org"),
      date: t("support.letter.5.date"),
      ref: t("support.letter.5.ref"),
      subject: t("support.letter.5.subject"),
      summary: t("support.letter.5.summary"),
      highlight: t("support.letter.5.highlight"),
      pdfUrl: "/documents/Surat-Sokongan-Pengecualian-Cukai.pdf",
    },
  ];

  return (
    <section id="sokongan" style={{ background: "var(--surface)" }}>
      <Reveal>
        <div className="bbb-container">
          <div className="section-label">
            <span className="eyebrow">{t("support.eyebrow")}</span>
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
            {t("support.title.l1")}
            <br />
            {t("support.title.l2")}
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {t("support.title.l3")}
            </em>
          </h2>

          <p
            style={{
              marginTop: "1.75rem",
              maxWidth: "820px",
              color: "var(--sage)",
              fontSize: "1.0625rem",
              lineHeight: 1.85,
            }}
          >
            {t("support.subtitle")}
          </p>

          {/* ─── TAX DEDUCTION HIGHLIGHT CALLOUT ─── */}
          <div
            style={{
              marginTop: "3rem",
              padding: "2.5rem",
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.10) 0%, rgba(201,168,76,0.02) 100%)",
              border: "1px solid var(--border-strong)",
              borderTop: "3px solid var(--gold)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "200px",
                height: "200px",
                background:
                  "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr",
                gap: "2rem",
                alignItems: "center",
              }}
              className="tax-grid"
            >
              <div>
                <div
                  style={{
                    display: "inline-block",
                    fontSize: "0.625rem",
                    color: "var(--gold)",
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    marginBottom: "1rem",
                    padding: "5px 14px",
                    background: "rgba(201,168,76,0.15)",
                    border: "1px solid var(--border-strong)",
                  }}
                >
                  ✓ {t("support.tax.badge")}
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
                  {t("support.tax.eyebrow")}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "clamp(1.5rem, 3vw, 2.125rem)",
                    color: "var(--cream)",
                    fontWeight: 500,
                    margin: "0 0 1rem 0",
                    lineHeight: 1.2,
                  }}
                >
                  {t("support.tax.title")}
                </h3>
                <p
                  style={{
                    color: "var(--sage)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.85,
                    margin: 0,
                  }}
                >
                  {t("support.tax.body")}
                </p>
              </div>

              {/* Right: amount + law ref + CTA */}
              <div
                style={{
                  textAlign: "center",
                  padding: "1.75rem",
                  background: "rgba(7,18,10,0.5)",
                  border: "1px solid var(--border)",
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
                  {t("support.tax.amount_label")}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "clamp(2.25rem, 5vw, 3rem)",
                    color: "var(--gold)",
                    fontWeight: 400,
                    lineHeight: 1,
                    marginBottom: "1rem",
                  }}
                >
                  {t("support.tax.amount_value")}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--muted)",
                    fontStyle: "italic",
                    marginBottom: "1.25rem",
                    lineHeight: 1.5,
                  }}
                >
                  {t("support.tax.law_ref")}
                </div>
                <a
                  href="/documents/Surat-Sokongan-Pengecualian-Cukai.pdf"
                  download
                  className="btn-bbb btn-bbb-primary"
                  style={{
                    fontSize: "0.8125rem",
                    padding: "11px 20px",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  {t("support.tax.cta")}
                </a>
              </div>
            </div>
          </div>

          {/* ─── LETTERS GRID ─── */}
          <div style={{ marginTop: "4rem" }}>
            <div className="section-label">
              <span className="eyebrow">{t("support.letters.eyebrow")}</span>
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                color: "var(--cream)",
                fontWeight: 500,
                margin: "0 0 0.75rem 0",
                lineHeight: 1.2,
              }}
            >
              {t("support.letters.title")}
            </h3>
            <p
              style={{
                color: "var(--sage)",
                fontSize: "1rem",
                lineHeight: 1.7,
                maxWidth: "680px",
                margin: 0,
              }}
            >
              {t("support.letters.subtitle")}
            </p>

            <div
              style={{
                marginTop: "2.5rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {letters.map((letter) => (
                <div
                  key={letter.num}
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderTop: "3px solid var(--gold)",
                    padding: "1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 32px rgba(201,168,76,0.10)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Top row: number + highlight badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display), serif",
                        fontSize: "1.5rem",
                        fontWeight: 300,
                        color: "var(--gold)",
                        lineHeight: 1,
                      }}
                    >
                      {letter.num}
                    </span>
                    <span
                      style={{
                        fontSize: "0.625rem",
                        color: "var(--gold)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        padding: "4px 10px",
                        background: "rgba(201,168,76,0.1)",
                        border: "1px solid var(--border-strong)",
                      }}
                    >
                      {letter.highlight}
                    </span>
                  </div>

                  {/* Organization */}
                  <div
                    style={{
                      fontFamily: "var(--font-display), serif",
                      fontSize: "1.125rem",
                      color: "var(--cream)",
                      fontWeight: 500,
                      lineHeight: 1.3,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {letter.org}
                  </div>

                  {/* Subject */}
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--gold)",
                      fontWeight: 600,
                      marginBottom: "1rem",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {letter.subject}
                  </div>

                  {/* Date + Ref */}
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      fontSize: "0.6875rem",
                      color: "var(--muted)",
                      letterSpacing: "0.04em",
                      marginBottom: "1rem",
                      paddingBottom: "1rem",
                      borderBottom: "1px solid var(--border)",
                      flexWrap: "wrap",
                    }}
                  >
                    <span>📅 {letter.date}</span>
                    <span style={{ color: "var(--muted)" }}>{letter.ref}</span>
                  </div>

                  {/* Summary */}
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--sage)",
                      lineHeight: 1.7,
                      margin: "0 0 1.5rem 0",
                      flex: 1,
                    }}
                  >
                    {letter.summary}
                  </p>

                  {/* Download button */}
                  <a
                    href={letter.pdfUrl}
                    download
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "11px 16px",
                      border: "1px solid var(--border-strong)",
                      color: "var(--cream)",
                      textDecoration: "none",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      transition: "all 0.2s",
                      background: "rgba(7,18,10,0.4)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--gold)";
                      e.currentTarget.style.color = "#07120A";
                      e.currentTarget.style.borderColor = "var(--gold)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(7,18,10,0.4)";
                      e.currentTarget.style.color = "var(--cream)";
                      e.currentTarget.style.borderColor =
                        "var(--border-strong)";
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Muat Turun PDF
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ─── CTA: FOR LEGAL & FINANCE TEAMS ─── */}
          <div
            style={{
              marginTop: "3rem",
              padding: "2rem 2.25rem",
              background: "rgba(7,18,10,0.5)",
              border: "1px solid var(--border)",
              borderLeft: "3px solid var(--gold)",
            }}
          >
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
              {t("support.cta.eyebrow")}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "1.5rem",
                color: "var(--cream)",
                fontWeight: 500,
                margin: "0 0 0.75rem 0",
                lineHeight: 1.3,
              }}
            >
              {t("support.cta.title")}
            </h3>
            <p
              style={{
                color: "var(--sage)",
                fontSize: "0.9375rem",
                lineHeight: 1.85,
                margin: "0 0 0.75rem 0",
              }}
            >
              {t("support.cta.body")}
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--muted)",
                fontStyle: "italic",
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              {t("support.cta.note")}
            </p>
          </div>
        </div>
      </Reveal>

      <style jsx>{`
        @media (max-width: 768px) {
          :global(.tax-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
