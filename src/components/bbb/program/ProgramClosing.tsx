'use client';

import { useLang } from "@/lib/i18n";
import Reveal from "../Reveal";
import { useWhatsApp } from "../use-whatsapp";

export function ProgramClosing() {
  const { t } = useLang();
  const waLink = useWhatsApp();

  return (
    <section
      style={{
        background: "var(--bg)",
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <Reveal>
        <div
          className="bbb-container"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="section-label">
            <span className="eyebrow">{t("prog.closing.eyebrow")}</span>
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
            {t("prog.closing.title.1")}
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {t("prog.closing.title.2")}
            </em>
          </h2>

          {/* Two types visualization */}
          <div
            style={{
              marginTop: "3rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
            }}
            className="closing-grid"
          >
            {/* Type 1 */}
            <div
              style={{
                padding: "2rem",
                background: "rgba(7,18,10,0.6)",
                border: "1px solid var(--border)",
                opacity: 0.6,
              }}
            >
              <div
                style={{
                  fontSize: "0.625rem",
                  color: "var(--muted)",
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: "1rem",
                }}
              >
                {t("prog.closing.option.1.label")}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "1.25rem",
                  color: "var(--muted)",
                  fontStyle: "italic",
                  margin: 0,
                  lineHeight: 1.5,
                  textDecoration: "line-through",
                  textDecorationColor: "rgba(74,104,85,0.5)",
                }}
              >
                {t("prog.closing.option.1.text")}
              </p>
            </div>

            {/* Type 2 */}
            <div
              style={{
                padding: "2rem",
                background: "var(--card)",
                border: "1px solid var(--border-strong)",
                borderTop: "3px solid var(--gold)",
                boxShadow: "0 12px 40px rgba(201,168,76,0.1)",
              }}
            >
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
                {t("prog.closing.option.2.label")}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "1.25rem",
                  color: "var(--cream)",
                  fontStyle: "italic",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {t("prog.closing.option.2.text")}
              </p>
            </div>
          </div>

          {/* Future narrative */}
          <p
            style={{
              marginTop: "3rem",
              color: "var(--sage)",
              fontSize: "1.0625rem",
              lineHeight: 1.85,
              maxWidth: "760px",
            }}
          >
            {t("prog.closing.future")}
          </p>

          {/* Urgency */}
          <div
            style={{
              marginTop: "2rem",
              padding: "1.75rem 2rem",
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid var(--gold)",
            }}
          >
            <p
              style={{
                color: "var(--cream)",
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                margin: 0,
                fontWeight: 500,
              }}
            >
              {t("prog.closing.urgency")}
            </p>
          </div>

          {/* Final three lines */}
          <div
            style={{
              marginTop: "4rem",
              paddingTop: "3rem",
              borderTop: "1px solid var(--border)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "1.375rem",
                color: "var(--sage)",
                fontStyle: "italic",
                lineHeight: 2,
                marginBottom: "2rem",
              }}
            >
              <div>{t("prog.closing.final_1")}</div>
              <div>{t("prog.closing.final_2")}</div>
              <div>{t("prog.closing.final_3")}</div>
            </div>

            <h3
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: "var(--cream)",
                fontWeight: 500,
                margin: "0 0 0.75rem 0",
                lineHeight: 1.2,
              }}
            >
              {t("prog.closing.final_q")}
            </h3>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "var(--gold)",
                letterSpacing: "0.05em",
                margin: 0,
                fontWeight: 600,
              }}
            >
              {t("prog.closing.final_q_sub")}
            </p>
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bbb btn-bbb-wa"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ flexShrink: 0 }}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Sekarang
            </a>
            <a
              href="/BBB_Pitch_Deck.pdf"
              download
              className="btn-bbb btn-bbb-outline"
            >
              ⬇ Muat Turun Pitch Deck (PDF)
            </a>
          </div>
        </div>
      </Reveal>

      <style jsx>{`
        @media (max-width: 768px) {
          :global(.closing-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
