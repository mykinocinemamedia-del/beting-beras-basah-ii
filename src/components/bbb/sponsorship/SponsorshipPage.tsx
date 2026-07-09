'use client';

import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Reveal from "../Reveal";

export function SponsorshipHero() {
  const { t } = useLang();
  return (
    <section
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "8rem",
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(135deg, rgba(7,18,10,0.97) 0%, rgba(7,18,10,0.82) 50%, rgba(7,18,10,0.60) 100%), url('/images/istana-ext-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "60vw",
          height: "60vh",
          background:
            "radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        className="bbb-container"
        style={{ position: "relative", zIndex: 3, maxWidth: "900px" }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "1.75rem",
          }}
        >
          <span
            style={{
              width: "32px",
              height: "1px",
              background: "var(--gold)",
              display: "inline-block",
            }}
          />
          <span className="eyebrow">{t("sp.hero.eyebrow")}</span>
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 500,
            lineHeight: 1.05,
            color: "var(--cream)",
            margin: "0 0 2rem 0",
          }}
        >
          {t("sp.hero.title")}
        </h1>
        <p
          style={{
            fontSize: "1.15rem",
            color: "var(--cream)",
            maxWidth: "720px",
            lineHeight: 1.85,
            margin: "0 0 1.5rem 0",
          }}
        >
          {t("sp.hero.body")}
        </p>
        <p
          style={{
            fontSize: "1.0625rem",
            color: "var(--sage)",
            maxWidth: "720px",
            lineHeight: 1.85,
            margin: "0 0 2.5rem 0",
          }}
        >
          {t("sp.hero.body2")}
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/BBB_Pitch_Deck.pdf"
            download
            className="btn-bbb btn-bbb-primary"
          >
            {t("sp.hero.cta1")}
          </a>
          <a
            href="mailto:hello@kino.my"
            className="btn-bbb btn-bbb-outline"
          >
            {t("sp.hero.cta2")}
          </a>
        </div>
      </div>
    </section>
  );
}

export function SponsorshipProcess() {
  const { t } = useLang();
  const steps = [
    { num: "01", title: t("sp.step.1.title"), desc: t("sp.step.1.desc") },
    { num: "02", title: t("sp.step.2.title"), desc: t("sp.step.2.desc") },
    { num: "03", title: t("sp.step.3.title"), desc: t("sp.step.3.desc") },
    { num: "04", title: t("sp.step.4.title"), desc: t("sp.step.4.desc") },
    { num: "05", title: t("sp.step.5.title"), desc: t("sp.step.5.desc") },
  ];

  return (
    <section style={{ background: "var(--bg)", padding: "5rem 0" }}>
      <Reveal>
        <div className="bbb-container">
          <div className="section-label">
            <span className="eyebrow">{t("sp.process.eyebrow")}</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 500,
              lineHeight: 1.1,
              color: "var(--cream)",
              margin: 0,
              marginBottom: "1rem",
            }}
          >
            {t("sp.process.title")}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1px",
              background: "var(--border)",
              border: "1px solid var(--border)",
              marginTop: "3rem",
            }}
          >
            {steps.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "var(--card)",
                  padding: "2rem 1.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "3rem",
                    fontWeight: 300,
                    color: "rgba(201,168,76,0.15)",
                    lineHeight: 1,
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {s.num}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "1.125rem",
                    fontWeight: 500,
                    color: "var(--cream)",
                    margin: "0 0 0.5rem 0",
                    lineHeight: 1.3,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--sage)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "2rem",
              padding: "1.25rem 1.75rem",
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid var(--gold)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "1.0625rem",
                fontStyle: "italic",
                color: "var(--cream)",
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              {t("sp.process.note")}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function SponsorshipChannels() {
  const { t } = useLang();
  const channels = [
    { label: t("sp.channel.org"), value: t("sp.channel.org.value") },
    { label: t("sp.channel.email"), value: t("sp.channel.email.value") },
    { label: t("sp.channel.phone"), value: t("sp.channel.phone.value") },
    { label: t("sp.channel.web"), value: t("sp.channel.web.value") },
  ];

  return (
    <section style={{ background: "var(--surface)", padding: "5rem 0" }}>
      <Reveal>
        <div className="bbb-container">
          <div className="section-label">
            <span className="eyebrow">{t("sp.channel.eyebrow")}</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 500,
              lineHeight: 1.1,
              color: "var(--cream)",
              margin: 0,
            }}
          >
            {t("sp.channel.title")}
          </h2>

          <div
            style={{
              marginTop: "2.5rem",
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderTop: "3px solid var(--gold)",
              padding: "2rem 2.5rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {channels.map((ch, i) => (
                <div key={i}>
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
                    {ch.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display), serif",
                      fontSize: "1.0625rem",
                      color: "var(--cream)",
                      fontWeight: 500,
                      lineHeight: 1.4,
                    }}
                  >
                    {ch.value}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "2rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--border)",
              }}
            >
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--sage)",
                  margin: 0,
                  lineHeight: 1.7,
                }}
              >
                <strong style={{ color: "var(--gold)" }}>⚠</strong>{" "}
                {t("sp.channel.warning")}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function SponsorshipWarning() {
  const { t } = useLang();
  const items = [t("sp.warn.1"), t("sp.warn.2"), t("sp.warn.3")];

  return (
    <section style={{ background: "var(--bg)", padding: "5rem 0" }}>
      <Reveal>
        <div className="bbb-container">
          <div
            style={{
              background: "rgba(180,30,30,0.08)",
              border: "2px solid rgba(220,60,60,0.4)",
              borderTop: "4px solid #dc3c3c",
              padding: "2.5rem 2.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.6875rem",
                color: "#fca5a5",
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: "0.75rem",
              }}
            >
              ⚠ {t("sp.warn.eyebrow")}
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
                fontWeight: 500,
                lineHeight: 1.1,
                color: "#fca5a5",
                margin: "0 0 1.5rem 0",
              }}
            >
              {t("sp.warn.title")}
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--cream)",
                lineHeight: 1.85,
                margin: "0 0 1.5rem 0",
                maxWidth: "760px",
              }}
            >
              {t("sp.warn.body")}
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {items.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    fontSize: "0.9375rem",
                    color: "var(--sage)",
                    lineHeight: 1.7,
                  }}
                >
                  <span
                    style={{
                      color: "#fca5a5",
                      flexShrink: 0,
                      fontWeight: 700,
                    }}
                  >
                    ⚠
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function SponsorshipFAQ() {
  const { t } = useLang();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: t("sp.faq.1.q"), a: t("sp.faq.1.a") },
    { q: t("sp.faq.2.q"), a: t("sp.faq.2.a") },
    { q: t("sp.faq.3.q"), a: t("sp.faq.3.a") },
    { q: t("sp.faq.4.q"), a: t("sp.faq.4.a") },
    { q: t("sp.faq.5.q"), a: t("sp.faq.5.a") },
    { q: t("sp.faq.6.q"), a: t("sp.faq.6.a") },
    { q: t("sp.faq.7.q"), a: t("sp.faq.7.a") },
    { q: t("sp.faq.8.q"), a: t("sp.faq.8.a") },
    { q: t("sp.faq.9.q"), a: t("sp.faq.9.a") },
    { q: t("sp.faq.10.q"), a: t("sp.faq.10.a") },
    { q: t("sp.faq.11.q"), a: t("sp.faq.11.a") },
    { q: t("sp.faq.12.q"), a: t("sp.faq.12.a") },
  ];

  return (
    <section style={{ background: "var(--surface)", padding: "5rem 0" }}>
      <Reveal>
        <div className="bbb-container-sm">
          <div className="section-label">
            <span className="eyebrow">{t("sp.faq.eyebrow")}</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 500,
              lineHeight: 1.1,
              color: "var(--cream)",
              margin: 0,
            }}
          >
            {t("sp.faq.title")}
          </h2>

          <div style={{ marginTop: "2.5rem" }}>
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
                      padding: "1.25rem 0",
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
                        fontSize: "1.125rem",
                        color: "var(--cream)",
                        fontWeight: 400,
                        lineHeight: 1.3,
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      style={{
                        color: "var(--gold)",
                        fontSize: "1.25rem",
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
                    <div style={{ paddingBottom: "1.25rem" }}>
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

export function SponsorshipClosingCTA() {
  const { t } = useLang();
  return (
    <section style={{ background: "var(--bg)", padding: "5rem 0", textAlign: "center" }}>
      <Reveal>
        <div className="bbb-container-sm">
          <div className="section-label" style={{ justifyContent: "center" }}>
            <span className="eyebrow">{t("sp.cta.eyebrow")}</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 500,
              lineHeight: 1.1,
              color: "var(--cream)",
              margin: "0 0 1.5rem 0",
            }}
          >
            {t("sp.cta.title")}
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--sage)",
              lineHeight: 1.85,
              margin: "0 0 2.5rem 0",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {t("sp.cta.body")}
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            <a
              href="mailto:hello@kino.my"
              className="btn-bbb btn-bbb-primary"
            >
              📧 hello@kino.my
            </a>
            <a
              href="https://wa.me/60176635990"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bbb btn-bbb-wa"
            >
              📱 +6017-663 5990
            </a>
          </div>
          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--muted)",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            {t("sp.cta.org")}
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export function SponsorshipNav() {
  const { lang, setLang, t } = useLang();
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        padding: "0.85rem 0",
        background: "rgba(7,18,10,0.95)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="bbb-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <img
            src="/logos/logo-bbb-symbol-white.png"
            alt="BBB Symbol"
            style={{
              height: "32px",
              width: "auto",
              objectFit: "contain",
            }}
          />
          <span
            style={{
              fontSize: "0.8125rem",
              color: "var(--sage)",
              letterSpacing: "0.03em",
            }}
          >
            {t("sp.nav.back")}
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              display: "flex",
              gap: "4px",
              padding: "3px",
              border: "1px solid rgba(201,168,76,0.28)",
              borderRadius: "4px",
              background: "rgba(7,18,10,0.6)",
            }}
          >
            <button
              onClick={() => setLang("ms")}
              style={{
                padding: "4px 10px",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                background: lang === "ms" ? "var(--gold)" : "transparent",
                color: lang === "ms" ? "#07120A" : "var(--sage)",
                border: "none",
                cursor: "pointer",
                borderRadius: "2px",
              }}
            >
              BM
            </button>
            <button
              onClick={() => setLang("en")}
              style={{
                padding: "4px 10px",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                background: lang === "en" ? "var(--gold)" : "transparent",
                color: lang === "en" ? "#07120A" : "var(--sage)",
                border: "none",
                cursor: "pointer",
                borderRadius: "2px",
              }}
            >
              EN
            </button>
          </div>
          <a
            href="mailto:hello@kino.my"
            className="btn-bbb btn-bbb-primary"
            style={{ fontSize: "0.8125rem", padding: "9px 18px" }}
          >
            {t("sp.nav.cta")}
          </a>
        </div>
      </div>
    </nav>
  );
}
