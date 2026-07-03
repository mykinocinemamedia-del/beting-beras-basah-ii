#!/usr/bin/env python3
"""
Make white/near-white backgrounds transparent in PNG logos.
Used for: Warisan Moraza logos that have solid white backgrounds
which would show as white boxes on the dark BBB website.
"""
from PIL import Image
import os

def make_white_transparent(input_path, output_path, threshold=240):
    """Convert white/near-white pixels to transparent."""
    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()
    width, height = img.size

    changed = 0
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            # If pixel is near-white (all channels above threshold)
            if r >= threshold and g >= threshold and b >= threshold:
                # Make it fully transparent
                pixels[x, y] = (r, g, b, 0)
                changed += 1
            # Anti-aliasing: if mostly white, reduce alpha proportionally
            elif r > 200 and g > 200 and b > 200:
                # Reduce alpha based on whiteness
                avg = (r + g + b) / 3
                if avg > threshold - 20:
                    new_alpha = int(a * (255 - avg) / 60)
                    pixels[x, y] = (r, g, b, max(0, min(255, new_alpha)))

    img.save(output_path, "PNG", optimize=True)
    print(f"✅ {os.path.basename(input_path)} → {os.path.basename(output_path)}")
    print(f"   Made {changed} pixels transparent")
    print(f"   Size: {os.path.getsize(output_path) // 1024}KB")


if __name__ == "__main__":
    logos_to_process = [
        ("/home/z/my-project/public/logos/logo-warisan-moraza-full.png",
         "/home/z/my-project/public/logos/logo-warisan-moraza-full.png"),
        ("/home/z/my-project/public/logos/logo-warisan-moraza-symbol.png",
         "/home/z/my-project/public/logos/logo-warisan-moraza-symbol.png"),
        ("/home/z/my-project/public/logos/logo-bbb-hero-white.png",
         "/home/z/my-project/public/logos/logo-bbb-hero-white.png"),
        ("/home/z/my-project/public/logos/logo-bbb-symbol-white.png",
         "/home/z/my-project/public/logos/logo-bbb-symbol-white.png"),
        ("/home/z/my-project/public/logos/logo-bbb-text-white.png",
         "/home/z/my-project/public/logos/logo-bbb-text-white.png"),
    ]

    for inp, out in logos_to_process:
        try:
            make_white_transparent(inp, out)
        except Exception as e:
            print(f"❌ {inp}: {e}")
