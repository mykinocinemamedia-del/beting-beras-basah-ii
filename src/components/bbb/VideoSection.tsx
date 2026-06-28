'use client';

import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

export function VideoSection() {
  const { t } = useLang();

  return (
    <section id="video-section" style={{ background: "var(--surface)", textAlign: "center" }}>
      <Reveal>
        <div className="bbb-container">
          <div className="section-label" style={{ justifyContent: "center" }}>
            <span className="eyebrow">{t("video.eyebrow")}</span>
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
            {t("video.title.l1")}
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {t("video.title.l2")}
            </em>
          </h2>
          <p
            style={{
              textAlign: "center",
              maxWidth: "520px",
              margin: "1rem auto 0",
              color: "var(--sage)",
              fontSize: "1rem",
              lineHeight: 1.85,
            }}
          >
            {t("video.sub")}
          </p>
          <div
            style={{
              marginTop: "3rem",
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%",
              border: "1px solid var(--border)",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/CQ6UB6FMuMw"
              title="Beting Beras Basah — Persembahan Terdahulu"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "0.875rem",
              color: "var(--muted)",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            {t("video.caption")}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
