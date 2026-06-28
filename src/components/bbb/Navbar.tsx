'use client';

import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";
import { useWhatsApp } from "./use-whatsapp";

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const waLink = useWhatsApp();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#three-firsts", label: t("nav.apa") },
    { href: "#video-section", label: t("nav.tonton") },
    { href: "#packages", label: t("nav.pakej") },
    { href: "#legasi", label: t("nav.legasi") },
    { href: "#faq", label: t("nav.faq") },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        padding: "1rem 0",
        background: scrolled
          ? "rgba(7,18,10,0.95)"
          : "rgba(7,18,10,0.85)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(201,168,76,0.18)",
        transition: "background 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "var(--cream)",
            textDecoration: "none",
            letterSpacing: "0.02em",
          }}
        >
          BBB <span style={{ color: "var(--gold)" }}>II</span>
        </a>

        {/* Desktop nav */}
        <ul
          className="hidden md:flex"
          style={{
            alignItems: "center",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "var(--sage)",
                  textDecoration: "none",
                  letterSpacing: "0.03em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--cream)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--sage)")
                }
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
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
                background:
                  lang === "ms" ? "var(--gold)" : "transparent",
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
                background:
                  lang === "en" ? "var(--gold)" : "transparent",
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
            className="hidden md:inline-flex btn-bbb btn-bbb-primary"
            style={{ fontSize: "0.8125rem", padding: "10px 20px" }}
          >
            {t("nav.hubungi")}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden"
            aria-label="Toggle menu"
            style={{
              background: "transparent",
              border: "1px solid var(--border-strong)",
              borderRadius: "4px",
              padding: "8px 10px",
              cursor: "pointer",
              color: "var(--cream)",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            borderTop: "1px solid var(--border)",
            background: "rgba(7,18,10,0.98)",
            padding: "1rem 2rem 1.5rem",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "0.75rem 0",
                    fontSize: "0.95rem",
                    color: "var(--sage)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li style={{ marginTop: "0.75rem" }}>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bbb btn-bbb-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                {t("nav.hubungi")}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
