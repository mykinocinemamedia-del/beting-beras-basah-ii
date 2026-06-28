'use client';

import { useState, FormEvent } from "react";
import { useLang } from "@/lib/i18n";
import { insertLead } from "@/lib/supabase";
import { useWhatsApp } from "./use-whatsapp";
import Reveal from "./Reveal";

export function ContactForm() {
  const { t } = useLang();
  const waLink = useWhatsApp();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const lead = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      package_interest: String(formData.get("package") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    if (!lead.name || !lead.email || !lead.phone) {
      setStatus("error");
      setErrorMsg(t("form.error"));
      return;
    }

    const result = await insertLead(lead);
    if (result.success) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error || t("form.error"));
      console.error("Lead insert failed:", result.error);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(7,18,10,0.6)",
    border: "1px solid var(--border-strong)",
    color: "var(--cream)",
    padding: "12px 14px",
    fontFamily: "var(--font-body), sans-serif",
    fontSize: "0.9375rem",
    borderRadius: "2px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "var(--gold)",
    letterSpacing: "0.04em",
    marginBottom: "6px",
    textTransform: "uppercase",
  };

  return (
    <section id="contact" style={{ background: "var(--bg)" }}>
      <Reveal>
        <div className="bbb-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr",
              gap: "3rem",
              alignItems: "start",
            }}
            className="contact-grid"
          >
            {/* Left: Heading */}
            <div>
              <div className="section-label">
                <span className="eyebrow">{t("form.eyebrow")}</span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 500,
                  lineHeight: 1.1,
                  color: "var(--cream)",
                  margin: 0,
                }}
              >
                {t("form.title.l1")}
                <br />
                {t("form.title.l2")}
                <br />
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
                  {t("form.title.l3")}
                </em>
              </h2>
              <p
                style={{
                  marginTop: "1.5rem",
                  color: "var(--sage)",
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  maxWidth: "420px",
                }}
              >
                {t("form.sub")}
              </p>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bbb btn-bbb-wa"
                style={{ marginTop: "2rem", display: "inline-flex" }}
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
                WhatsApp
              </a>
            </div>

            {/* Right: Form */}
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderTop: "3px solid var(--gold)",
                padding: "2.5rem",
              }}
            >
              {status === "success" ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      margin: "0 auto 1.5rem",
                      borderRadius: "50%",
                      background: "rgba(37,211,102,0.15)",
                      border: "2px solid #25D366",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#25D366",
                      fontSize: "1.75rem",
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display), serif",
                      fontSize: "1.75rem",
                      color: "var(--cream)",
                      margin: "0 0 0.75rem",
                      fontWeight: 500,
                    }}
                  >
                    {t("form.success.title")}
                  </h3>
                  <p
                    style={{
                      color: "var(--sage)",
                      fontSize: "0.9375rem",
                      maxWidth: "400px",
                      margin: "0 auto",
                      lineHeight: 1.7,
                    }}
                  >
                    {t("form.success.desc")}
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-bbb btn-bbb-outline"
                    style={{ marginTop: "1.5rem" }}
                  >
                    ↺ {t("form.submit")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1.25rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-2col">
                    <div>
                      <label htmlFor="name" style={labelStyle}>
                        {t("form.name")}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder={t("form.name.ph")}
                        style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-strong)")}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" style={labelStyle}>
                        {t("form.phone")}
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder={t("form.phone.ph")}
                        style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-strong)")}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-2col">
                    <div>
                      <label htmlFor="email" style={labelStyle}>
                        {t("form.email")}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder={t("form.email.ph")}
                        style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-strong)")}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" style={labelStyle}>
                        {t("form.company")}
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder={t("form.company.ph")}
                        style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-strong)")}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="package" style={labelStyle}>
                      {t("form.package")}
                    </label>
                    <select
                      id="package"
                      name="package"
                      defaultValue=""
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-strong)")}
                    >
                      <option value="" disabled style={{ color: "#999" }}>
                        {t("form.package.select")}
                      </option>
                      <option value="Saujana (RM 500-2,000)" style={{ color: "#000" }}>
                        {t("pkg.1.tier")} — {t("pkg.1.price")}
                      </option>
                      <option value="Sinar Warisan (RM 2,001-10,000)" style={{ color: "#000" }}>
                        {t("pkg.2.tier")} — {t("pkg.2.price")}
                      </option>
                      <option value="Wira Budaya (RM 10,001+)" style={{ color: "#000" }}>
                        {t("pkg.3.tier")} — {t("pkg.3.price")}
                      </option>
                      <option value="Belum pasti / Saya nak berbincang" style={{ color: "#000" }}>
                        {t("form.package.select")}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" style={labelStyle}>
                      {t("form.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder={t("form.message.ph")}
                      style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-strong)")}
                    />
                  </div>

                  {status === "error" && (
                    <div
                      style={{
                        background: "rgba(220,38,38,0.1)",
                        border: "1px solid rgba(220,38,38,0.4)",
                        padding: "0.75rem 1rem",
                        fontSize: "0.8125rem",
                        color: "#fca5a5",
                      }}
                    >
                      {errorMsg || t("form.error")}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-bbb btn-bbb-primary"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      opacity: status === "loading" ? 0.7 : 1,
                      cursor: status === "loading" ? "not-allowed" : "pointer",
                      padding: "16px",
                    }}
                  >
                    {status === "loading" ? t("form.submitting") : t("form.submit")}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Reveal>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.contact-grid) {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          :global(.form-2col) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
