#!/usr/bin/env python3
"""Fix the duplicated EN block in i18n.tsx"""
import re

path = "/home/z/my-project/src/lib/i18n.tsx"
with open(path, "r") as f:
    content = f.read()

# Find line numbers
lines = content.split("\n")

# We want to remove everything from line 797 (en_duplicate_remove) to line 1248 (closing of 3rd EN block)
# After line 795 (closing of first EN block: "  },")
# Keep line 796 (blank)
# Delete lines 797-1248 (1-indexed) = indices 796-1247 (0-indexed)
# Keep line 1249 ("};")
# Keep everything after

# Verify boundaries
print(f"Line 795 (idx 794): {repr(lines[794])}")
print(f"Line 796 (idx 795): {repr(lines[795])}")
print(f"Line 797 (idx 796): {repr(lines[796])}")
print(f"Line 1248 (idx 1247): {repr(lines[1247])}")
print(f"Line 1249 (idx 1248): {repr(lines[1248])}")

# Keep lines 1-796 (indices 0-795), then skip to line 1249 (index 1248)
new_lines = lines[:796] + lines[1248:]
new_content = "\n".join(new_lines)

with open(path, "w") as f:
    f.write(new_content)

print(f"\n✅ Removed lines 797-1248 (deleted {1248 - 796} lines)")
print(f"New file: {len(new_lines)} lines (was {len(lines)})")
