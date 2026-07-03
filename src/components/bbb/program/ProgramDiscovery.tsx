'use client';

import { useLang } from "@/lib/i18n";
import Reveal from "../Reveal";

export function ProgramDiscovery() {
  const { t } = useLang();

  const bodies = [
    t("prog.discovery.body.1"),
    t("prog.discovery.body.2"),
    t("prog.discovery.body.3"),
  ];

  return (
    <section
      style={{
        background: "var(--bg)",
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background pattern */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: "40vw",
          height: "60vh",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Reveal>
        <div
          className="bbb-container"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="section-label">
            <span className="eyebrow">{t("prog.discovery.eyebrow")}</span>
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
            {t("prog.discovery.title.1")}
            <br />
            {t("prog.discovery.title.2")}
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {t("prog.discovery.title.3")}
            </em>
          </h2>

          <div
            style={{
              marginTop: "3rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "start",
            }}
            className="discovery-grid"
          >
            <div>
              {bodies.map((b, i) => (
                <p
                  key={i}
                  style={{
                    color: "var(--sage)",
                    fontSize: "1.0625rem",
                    lineHeight: 1.85,
                    margin: "0 0 1.5rem 0",
                  }}
                >
                  {b}
                </p>
              ))}
            </div>

            {/* Visual: image with overlay */}
            <div
              style={{
                position: "relative",
                minHeight: "400px",
                backgroundImage:
                  "linear-gradient(135deg, rgba(7,18,10,0.7) 0%, rgba(7,18,10,0.4) 100%), url('/images/bangsawan-3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "1px solid var(--border-strong)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  right: "1.5rem",
                  padding: "1.25rem 1.5rem",
                  background: "rgba(7,18,10,0.9)",
                  borderLeft: "3px solid var(--gold)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "1.375rem",
                    color: "var(--cream)",
                    fontStyle: "italic",
                    margin: 0,
                    lineHeight: 1.4,
                    fontWeight: 400,
                  }}
                >
                  {t("prog.discovery.cta")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.discovery-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
