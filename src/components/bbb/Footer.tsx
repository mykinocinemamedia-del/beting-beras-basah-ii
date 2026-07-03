'use client';

import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();

  return (
    <footer
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        padding: "2.5rem 0",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <div className="bbb-container">
        {/* Warisan Moraza logo */}
        <div style={{ marginBottom: "1.25rem" }}>
          <img
            src="/logos/logo-warisan-moraza-full.png"
            alt="Pertubuhan Bangsawan Warisan Moraza Negeri Perak"
            style={{
              maxHeight: "90px",
              width: "auto",
              objectFit: "contain",
              margin: "0 auto",
              display: "block",
            }}
          />
        </div>
        <p style={{ fontSize: "0.8125rem", color: "var(--muted)", margin: "0 0 0.375rem" }}>
          <strong style={{ color: "var(--cream)" }}>{t("footer.title")}</strong>
        </p>
        <p style={{ fontSize: "0.8125rem", color: "var(--muted)", margin: "0 0 0.375rem" }}>
          {t("footer.org")}
        </p>
        <p style={{ fontSize: "0.75rem", color: "var(--gold)", margin: "0.75rem 0 0.375rem", letterSpacing: "0.04em" }}>
          {t("footer.partner")}
        </p>
        <p style={{ fontSize: "0.8125rem", color: "var(--muted)", marginTop: "1.5rem", margin: "1.5rem 0 0" }}>
          {t("footer.copy")}
        </p>
      </div>
    </footer>
  );
}
