#!/usr/bin/env python3
"""Generate favicon.svg and og-image.png for BBB II landing page."""
import os
import subprocess
from PIL import Image, ImageDraw, ImageFont, ImageFilter

# Fonts
FONT_DISPLAY = "/usr/share/fonts/truetype/noto-serif-sc/NotoSerifSC-Regular.otf"
FONT_BODY = "/usr/share/fonts/truetype/chinese/NotoSansSC-Regular.ttf"

# Try alternative display fonts
display_font_candidates = [
    FONT_DISPLAY,
    "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf",
    "/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf",
]

body_font_candidates = [
    FONT_BODY,
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
]

def get_font(candidates, size):
    for path in candidates:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                pass
    return ImageFont.load_default()


def make_favicon_svg():
    """Minimal SVG favicon with BBB II logo on dark green + gold."""
    svg = """<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="6" fill="#07120A"/>
  <rect x="2" y="2" width="60" height="60" rx="4" fill="none" stroke="#C9A84C" stroke-width="1"/>
  <text x="32" y="40" font-family="Georgia, 'Times New Roman', serif"
        font-size="32" font-weight="500" text-anchor="middle"
        fill="#EDE4C4">BBB</text>
  <text x="50" y="56" font-family="Georgia, serif"
        font-size="11" font-style="italic" text-anchor="middle"
        fill="#C9A84C">II</text>
</svg>"""
    with open("/home/z/my-project/public/favicon.svg", "w") as f:
        f.write(svg)
    print("✅ favicon.svg created")


def make_og_image():
    """Create 1200x630 OG preview image."""
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), "#07120A")
    draw = ImageDraw.Draw(img)

    # Try to load hero image as background
    hero_path = "/home/z/my-project/public/images/istana-ext-1.jpg"
    if os.path.exists(hero_path):
        try:
            hero = Image.open(hero_path).convert("RGB")
            # Resize to cover OG area
            hero_ratio = hero.width / hero.height
            og_ratio = W / H
            if hero_ratio > og_ratio:
                new_h = H
                new_w = int(H * hero_ratio)
            else:
                new_w = W
                new_h = int(W / hero_ratio)
            hero = hero.resize((new_w, new_h), Image.LANCZOS)
            # Center crop
            left = (new_w - W) // 2
            top = (new_h - H) // 2
            hero = hero.crop((left, top, left + W, top + H))

            # Apply dark overlay
            overlay = Image.new("RGBA", (W, H), (7, 18, 10, 220))
            hero = hero.convert("RGBA")
            img = Image.alpha_composite(hero, overlay).convert("RGB")
            draw = ImageDraw.Draw(img)
        except Exception as e:
            print(f"⚠️  Could not load hero image: {e}")

    # Add radial gold glow
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    for r in range(600, 50, -20):
        alpha = max(0, int(40 * (1 - r / 600)))
        glow_draw.ellipse(
            [W // 2 - r, H // 2 - r, W // 2 + r, H // 2 + r],
            fill=(201, 168, 76, alpha),
        )
    glow = glow.filter(ImageFilter.GaussianBlur(radius=40))
    img = Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB")
    draw = ImageDraw.Draw(img)

    # Top eyebrow
    eyebrow_font = get_font(body_font_candidates, 22)
    eyebrow_text = "30 OKTOBER – 1 NOVEMBER 2026  ·  ISTANA BUDAYA"
    bbox = draw.textbbox((0, 0), eyebrow_text, font=eyebrow_font)
    tw = bbox[2] - bbox[0]
    draw.text(
        ((W - tw) // 2, 90),
        eyebrow_text,
        fill="#C9A84C",
        font=eyebrow_font,
    )

    # Decorative line
    draw.line(
        [(W // 2 - 200, 135), (W // 2 + 200, 135)],
        fill="#C9A84C",
        width=1,
    )

    # Main title
    title_font = get_font(display_font_candidates, 78)
    line1 = "BETING BERAS BASAH II"
    bbox = draw.textbbox((0, 0), line1, font=title_font)
    tw = bbox[2] - bbox[0]
    draw.text(
        ((W - tw) // 2, 175),
        line1,
        fill="#EDE4C4",
        font=title_font,
    )

    # Subtitle italic gold
    sub_font = get_font(display_font_candidates, 50)
    try:
        sub_font_italic = ImageFont.truetype(
            "/usr/share/fonts/truetype/noto-serif-sc/NotoSerifSC-Regular.otf",
            50,
        )
    except Exception:
        sub_font_italic = sub_font

    line2 = "Hikayat Mahkota Dewa"
    bbox = draw.textbbox((0, 0), line2, font=sub_font_italic)
    tw = bbox[2] - bbox[0]
    draw.text(
        ((W - tw) // 2, 270),
        line2,
        fill="#C9A84C",
        font=sub_font_italic,
    )

    # Tagline
    tag_font = get_font(body_font_candidates, 26)
    line3 = "Lima ratus tahun menanti. Kini tibalah masanya."
    bbox = draw.textbbox((0, 0), line3, font=tag_font)
    tw = bbox[2] - bbox[0]
    draw.text(
        ((W - tw) // 2, 360),
        line3,
        fill="#8AA890",
        font=tag_font,
    )

    # Three "firsts" badges
    badge_font = get_font(body_font_candidates, 16)
    badges = [
        "500 TAHUN SEJARAH",
        "HOLOGRAM PERTAMA DI IB",
        "PEMBUKAAN SEMULA IB",
    ]
    badge_w = 280
    badge_h = 44
    gap = 24
    total_w = badge_w * 3 + gap * 2
    start_x = (W - total_w) // 2
    for i, b in enumerate(badges):
        x = start_x + i * (badge_w + gap)
        y = 450
        # Border
        draw.rectangle(
            [x, y, x + badge_w, y + badge_h],
            outline="#C9A84C",
            width=1,
        )
        bbox = draw.textbbox((0, 0), b, font=badge_font)
        tw = bbox[2] - bbox[0]
        th = bbox[3] - bbox[1]
        draw.text(
            (x + (badge_w - tw) // 2, y + (badge_h - th) // 2 - 3),
            b,
            fill="#EDE4C4",
            font=badge_font,
        )

    # Bottom org
    org_font = get_font(body_font_candidates, 18)
    org_text = "PERTUBUHAN BANGSAWAN WARISAN MORAZA NEGERI PERAK  ·  DISOKONG MOTAC"
    bbox = draw.textbbox((0, 0), org_text, font=org_font)
    tw = bbox[2] - bbox[0]
    draw.text(
        ((W - tw) // 2, 560),
        org_text,
        fill="#4A6855",
        font=org_font,
    )

    # Save
    out_path = "/home/z/my-project/public/og-image.png"
    img.save(out_path, "PNG", optimize=True)
    print(f"✅ og-image.png created at {out_path}")
    print(f"   Size: {os.path.getsize(out_path) // 1024}KB")


if __name__ == "__main__":
    make_favicon_svg()
    make_og_image()
