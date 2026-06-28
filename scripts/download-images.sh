#!/bin/bash
# Download all images for BBB II landing page
# Source: ZAI image-search OSS results

DEST="/home/z/my-project/public/images"
mkdir -p "$DEST"

# Istana Budaya Exterior (6 images)
echo "==> Downloading Istana Budaya Exterior..."
curl -sL "https://sfile.chatglm.cn/images-ppt/4c081955d3de.jpg" -o "$DEST/istana-ext-1.jpg"
curl -sL "https://sfile.chatglm.cn/images-ppt/b1cb495dfac8.jpg" -o "$DEST/istana-ext-2.jpg"
curl -sL "https://sfile.chatglm.cn/images-ppt/c4402c355487.jpg" -o "$DEST/istana-ext-3.jpg"
curl -sL "https://sfile.chatglm.cn/images-ppt/eac6fb226078.jpg" -o "$DEST/istana-ext-4.jpg"
curl -sL "https://sfile.chatglm.cn/images-ppt/427a1f210760.jpg" -o "$DEST/istana-ext-5.jpg"
curl -sL "https://sfile.chatglm.cn/images-ppt/7bfe49850e4b.jpg" -o "$DEST/istana-ext-6.jpg"

# Istana Budaya Interior (5 images)
echo "==> Downloading Istana Budaya Interior..."
curl -sL "https://sfile.chatglm.cn/images-ppt/9bbe58c71062.jpg" -o "$DEST/istana-int-1.jpg"
curl -sL "https://sfile.chatglm.cn/images-ppt/6a6cf3af9188.jpg" -o "$DEST/istana-int-2.jpg"
curl -sL "https://sfile.chatglm.cn/images-ppt/8a7956ac82fb.jpg" -o "$DEST/istana-int-3.jpg"
curl -sL "https://sfile.chatglm.cn/images-ppt/4752fad77bcf.jpg" -o "$DEST/istana-int-4.jpg"

# Bangsawan Performance (6 images)
echo "==> Downloading Bangsawan Performance..."
curl -sL "https://sfile.chatglm.cn/images-ppt/d414c3547476.jpg" -o "$DEST/bangsawan-1.jpg"
curl -sL "https://sfile.chatglm.cn/images-ppt/35fd041f6428.jpg" -o "$DEST/bangsawan-2.jpg"
curl -sL "https://sfile.chatglm.cn/images-ppt/6d3d3f6d6ab1.jpg" -o "$DEST/bangsawan-3.jpg"
curl -sL "https://sfile.chatglm.cn/images-ppt/41d11e7686ef.jpg" -o "$DEST/bangsawan-4.jpg"
curl -sL "https://sfile.chatglm.cn/images-ppt/33b03e1b3a3b.jpg" -o "$DEST/bangsawan-5.jpg"
curl -sL "https://sfile.chatglm.cn/images-ppt/55dc39f73129.png" -o "$DEST/bangsawan-6.png"

# Royal Costume (5 images)
echo "==> Downloading Royal Costume..."
curl -sL "https://sfile.chatglm.cn/images-ppt/0dd42fa4aa90.jpg" -o "$DEST/royal-1.jpg"
curl -sL "https://sfile.chatglm.cn/images-ppt/a35fb7c15618.jpg" -o "$DEST/royal-2.jpg"
curl -sL "https://sfile.chatglm.cn/images-ppt/759564047baf.jpg" -o "$DEST/royal-3.jpg"
curl -sL "https://sfile.chatglm.cn/images-ppt/9b38e15800a4.jpg" -o "$DEST/royal-4.jpg"
curl -sL "https://sfile.chatglm.cn/images-ppt/bcf3ac796601.png" -o "$DEST/royal-5.png"

# Copy PDF
echo "==> Copying Pitch Deck PDF..."
cp "/home/z/my-project/upload/pitch deck 2.pdf" "/home/z/my-project/public/BBB_Pitch_Deck.pdf"

# List results
echo ""
echo "==> Downloaded files:"
ls -lh "$DEST"
echo ""
echo "==> PDF file:"
ls -lh "/home/z/my-project/public/BBB_Pitch_Deck.pdf"

# Validate image sizes (skip files < 5KB - likely failed)
echo ""
echo "==> Validating image sizes..."
for f in "$DEST"/*; do
  size=$(stat -c%s "$f")
  if [ "$size" -lt 5000 ]; then
    echo "⚠️  Small file (may be broken): $f ($size bytes)"
  fi
done

echo ""
echo "✅ All downloads complete"
