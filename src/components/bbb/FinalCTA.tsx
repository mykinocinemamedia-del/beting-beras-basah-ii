'use client';

import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";
import { useWhatsApp } from "./use-whatsapp";

export function FinalCTA() {
  const { t } = useLang();
  const waLink = useWhatsApp();

  return (
    <section id="final-cta" style={{ background: "var(--surface)", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <Reveal>
        <div className="bbb-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="section-label" style={{ justifyContent: "center", marginBottom: "1rem" }}>
            <span className="eyebrow">{t("cta.eyebrow")}</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
              fontWeight: 500,
              lineHeight: 1.08,
              color: "var(--cream)",
              margin: "0 0 0.5rem",
            }}
          >
            {t("cta.title.l1")}
            <br />
            {t("cta.title.l2")}
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {t("cta.title.l3")}
            </em>
          </h2>
          <p
            style={{
              maxWidth: "480px",
              margin: "0.75rem auto 2.5rem",
              fontSize: "1.0625rem",
              color: "var(--sage)",
              lineHeight: 1.85,
            }}
          >
            {t("cta.sub")}
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
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-bbb btn-bbb-wa">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ flexShrink: 0 }}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("cta.wa")}
            </a>
            <a href="/BBB_Pitch_Deck.pdf" download className="btn-bbb btn-bbb-outline">
              {t("cta.pdf")}
            </a>
          </div>
          <p style={{ fontSize: "0.8125rem", color: "var(--muted)", textAlign: "center" }}>
            {t("cta.note")}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
