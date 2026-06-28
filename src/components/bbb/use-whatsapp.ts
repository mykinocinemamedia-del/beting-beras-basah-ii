'use client';

import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";

const WHATSAPP_NUMBER = "60176635990";
const WA_DEFAULT_TEXT =
  "Salam, saya ingin bertanya tentang peluang penajaan Beting Beras Basah II. Boleh kami berbincang?";

export function useWhatsApp() {
  const { lang } = useLang();
  const text =
    lang === "ms"
      ? WA_DEFAULT_TEXT
      : "Hello, I would like to inquire about sponsorship opportunities for Beting Beras Basah II. Can we discuss?";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export { WHATSAPP_NUMBER };
