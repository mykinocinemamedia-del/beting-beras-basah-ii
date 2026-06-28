'use client';

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { useWhatsApp } from "../use-whatsapp";

export function ProgramNav() {
  const { lang, setLang, t } = useLang();
  const waLink = useWhatsApp();

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
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}
      >
        <Link
          href="/"
          style={{
            fontSize: "0.8125rem",
            color: "var(--sage)",
            textDecoration: "none",
            letterSpacing: "0.03em",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--sage)")}
        >
          {t("prog.nav.back")}
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
                transition: "all 0.2s",
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
                transition: "all 0.2s",
              }}
            >
              EN
            </button>
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-bbb btn-bbb-primary"
            style={{ fontSize: "0.8125rem", padding: "9px 18px" }}
          >
            {t("prog.nav.cta")}
          </a>
        </div>
      </div>
    </nav>
  );
}
