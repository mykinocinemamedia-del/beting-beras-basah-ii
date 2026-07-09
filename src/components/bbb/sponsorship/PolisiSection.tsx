'use client';

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import Reveal from "../Reveal";

export function PolisiSection() {
  const { t } = useLang();
  const [openSection, setOpenSection] = useState<number | null>(1);

  const sections = [
    {
      num: 1,
      title: t("sp.polisi.s1.title"),
      body: t("sp.polisi.s1.body"),
      items: [] as string[],
    },
    {
      num: 2,
      title: t("sp.polisi.s2.title"),
      body: t("sp.polisi.s2.body"),
      items: [],
      isEntity: true,
    },
    {
      num: 3,
      title: t("sp.polisi.s3.title"),
      body: t("sp.polisi.s3.body"),
      items: [],
      isChannels: true,
    },
    {
      num: 4,
      title: t("sp.polisi.s4.title"),
      body: t("sp.polisi.s4.body"),
      items: [t("sp.polisi.s4.1"), t("sp.polisi.s4.2"), t("sp.polisi.s4.3")],
    },
    {
      num: 5,
      title: t("sp.polisi.s5.title"),
      body: t("sp.polisi.s5.body"),
      items: [t("sp.polisi.s5.1"), t("sp.polisi.s5.2"), t("sp.polisi.s5.3")],
    },
    {
      num: 6,
      title: t("sp.polisi.s6.title"),
      body: "",
      items: [
        t("sp.polisi.s6.1"),
        t("sp.polisi.s6.2"),
        t("sp.polisi.s6.3"),
        t("sp.polisi.s6.4"),
        t("sp.polisi.s6.5"),
        t("sp.polisi.s6.6"),
        t("sp.polisi.s6.7"),
      ],
      isSteps: true,
    },
    {
      num: 7,
      title: t("sp.polisi.s7.title"),
      body: t("sp.polisi.s7.body"),
      items: [t("sp.polisi.s7.1"), t("sp.polisi.s7.2"), t("sp.polisi.s7.3")],
      isWarning: true,
    },
    {
      num: 8,
      title: t("sp.polisi.s8.title"),
      body: "",
      items: [
        t("sp.polisi.s8.1"),
        t("sp.polisi.s8.2"),
        t("sp.polisi.s8.3"),
        t("sp.polisi.s8.4"),
      ],
    },
    {
      num: 9,
      title: t("sp.polisi.s9.title"),
      body: "",
      items: [t("sp.polisi.s9.1"), t("sp.polisi.s9.2"), t("sp.polisi.s9.3")],
    },
    {
      num: 10,
      title: t("sp.polisi.s10.title"),
      body: "",
      items: [
        t("sp.polisi.s10.1"),
        t("sp.polisi.s10.2"),
        t("sp.polisi.s10.3"),
      ],
    },
  ];

  const entityData = [
    { label: t("sp.polisi.s2.label.name"), value: t("sp.polisi.s2.val.name") },
    { label: t("sp.polisi.s2.label.ssm"), value: t("sp.polisi.s2.val.ssm") },
    { label: t("sp.polisi.s2.label.brand"), value: t("sp.polisi.s2.val.brand") },
    { label: t("sp.polisi.s2.label.address"), value: t("sp.polisi.s2.val.address") },
    { label: t("sp.polisi.s2.label.email"), value: t("sp.polisi.s2.val.email") },
    { label: t("sp.polisi.s2.label.phone"), value: t("sp.polisi.s2.val.phone") },
    { label: t("sp.polisi.s2.label.web"), value: t("sp.polisi.s2.val.web") },
  ];

  const channelData = [
    { channel: "E-mel", value: "hello@kino.my", use: t("sp.polisi.s3.email.use") },
    { channel: "Telefon / WhatsApp", value: "+6017-663 5990", use: t("sp.polisi.s3.phone.use") },
    { channel: "Laman Web", value: "www.kino.my", use: t("sp.polisi.s3.web.use") },
    { channel: "Media Sosial Rasmi", value: "—", use: t("sp.polisi.s3.social.use") },
  ];

  return (
    <section id="polisi" style={{ background: "var(--bg)", padding: "5rem 0" }}>
      <Reveal>
        <div className="bbb-container">
          <div className="section-label">
            <span className="eyebrow">{t("sp.polisi.eyebrow")}</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 500,
              lineHeight: 1.1,
              color: "var(--cream)",
              margin: 0,
              maxWidth: "800px",
            }}
          >
            {t("sp.polisi.title")}
          </h2>
          <p
            style={{
              marginTop: "1.25rem",
              maxWidth: "760px",
              color: "var(--sage)",
              fontSize: "1rem",
              lineHeight: 1.85,
            }}
          >
            {t("sp.polisi.subtitle")}
          </p>

          {/* Download button + version */}
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/documents/Polisi-Rasmi-Penajaan-BBB.pdf"
              download
              className="btn-bbb btn-bbb-primary"
            >
              {t("sp.polisi.download")}
            </a>
            <span
              style={{
                fontSize: "0.75rem",
                color: "var(--muted)",
                fontStyle: "italic",
              }}
            >
              {t("sp.polisi.version")}
            </span>
          </div>

          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.75rem",
              color: "var(--muted)",
              fontStyle: "italic",
            }}
          >
            {t("sp.polisi.disclaimer")}
          </p>

          {/* 10 Sections Accordion */}
          <div
            style={{
              marginTop: "3rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            {sections.map((sec) => {
              const isOpen = openSection === sec.num;
              return (
                <div
                  key={sec.num}
                  style={{
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <button
                    onClick={() => setOpenSection(isOpen ? null : sec.num)}
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
                        lineHeight: 1.3,
                      }}
                    >
                      {sec.title}
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
                      maxHeight: isOpen ? "2000px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease",
                    }}
                  >
                    <div style={{ paddingBottom: "1.5rem" }}>
                      {sec.body && (
                        <p
                          style={{
                            fontSize: "0.9375rem",
                            color: "var(--sage)",
                            margin: "0 0 1rem 0",
                            lineHeight: 1.85,
                            maxWidth: "760px",
                          }}
                        >
                          {sec.body}
                        </p>
                      )}

                      {/* Entity table (section 2) */}
                      {sec.isEntity && (
                        <div
                          style={{
                            background: "var(--card)",
                            border: "1px solid var(--border)",
                            borderTop: "2px solid var(--gold)",
                            padding: "1.5rem",
                            marginTop: "0.5rem",
                          }}
                        >
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns:
                                "repeat(auto-fit, minmax(200px, 1fr))",
                              gap: "1.25rem",
                            }}
                          >
                            {entityData.map((e, i) => (
                              <div key={i}>
                                <div
                                  style={{
                                    fontSize: "0.65rem",
                                    color: "var(--gold)",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    fontWeight: 700,
                                    marginBottom: "0.375rem",
                                  }}
                                >
                                  {e.label}
                                </div>
                                <div
                                  style={{
                                    fontFamily:
                                      "var(--font-display), serif",
                                    fontSize: "0.9375rem",
                                    color: "var(--cream)",
                                    fontWeight: 500,
                                    lineHeight: 1.4,
                                  }}
                                >
                                  {e.value}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Channels table (section 3) */}
                      {sec.isChannels && (
                        <div
                          style={{
                            marginTop: "0.5rem",
                            border: "1px solid var(--border)",
                          }}
                        >
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1fr 1fr 2fr",
                              background: "var(--border)",
                              gap: "1px",
                            }}
                            className="polisi-channels-grid"
                          >
                            {channelData.map((ch, i) => (
                              <div
                                key={i}
                                style={{
                                  background: "var(--card)",
                                  padding: "1rem 1.25rem",
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: "0.65rem",
                                    color: "var(--gold)",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    fontWeight: 700,
                                    marginBottom: "0.375rem",
                                  }}
                                >
                                  {ch.channel}
                                </div>
                                <div
                                  style={{
                                    fontFamily:
                                      "var(--font-display), serif",
                                    fontSize: "0.9375rem",
                                    color: "var(--cream)",
                                    fontWeight: 500,
                                    marginBottom: "0.25rem",
                                  }}
                                >
                                  {ch.value}
                                </div>
                                <div
                                  style={{
                                    fontSize: "0.75rem",
                                    color: "var(--muted)",
                                    lineHeight: 1.5,
                                  }}
                                >
                                  {ch.use}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Items list */}
                      {sec.items.length > 0 && (
                        <ul
                          style={{
                            listStyle: "none",
                            padding: 0,
                            margin: sec.body ? "0.5rem 0 0 0" : "0",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.75rem",
                          }}
                        >
                          {sec.items.map((item, j) => (
                            <li
                              key={j}
                              style={{
                                display: "flex",
                                gap: "12px",
                                alignItems: "flex-start",
                                fontSize: "0.875rem",
                                color: "var(--sage)",
                                lineHeight: 1.7,
                              }}
                            >
                              <span
                                style={{
                                  color: sec.isWarning
                                    ? "#fca5a5"
                                    : "var(--gold)",
                                  flexShrink: 0,
                                  fontWeight: 700,
                                  minWidth: "24px",
                                }}
                              >
                                {sec.isSteps ? `${j + 1}.` : sec.isWarning ? "⚠" : "✓"}
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Signatory block */}
          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "2px solid var(--gold)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "0.6875rem",
                color: "var(--gold)",
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              {t("sp.polisi.signed")}
            </div>
            <div
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "1.5rem",
                color: "var(--cream)",
                fontWeight: 500,
                marginBottom: "0.375rem",
              }}
            >
              {t("sp.polisi.signatory")}
            </div>
            <div
              style={{
                fontSize: "0.8125rem",
                color: "var(--sage)",
                fontStyle: "italic",
              }}
            >
              {t("sp.polisi.signatory.role")}
            </div>
            <div
              style={{
                marginTop: "0.75rem",
                fontSize: "0.75rem",
                color: "var(--muted)",
              }}
            >
              {t("sp.polisi.version")}
            </div>
          </div>
        </div>
      </Reveal>

      <style jsx>{`
        @media (max-width: 700px) {
          :global(.polisi-channels-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
