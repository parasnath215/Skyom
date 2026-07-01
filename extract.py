import re

with open('scraped.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Remove scripts and styles
html = re.sub(r'<script.*?>.*?</script>', ' ', html, flags=re.DOTALL)
html = re.sub(r'<style.*?>.*?</style>', ' ', html, flags=re.DOTALL)

# Remove HTML tags
text = re.sub(r'<[^>]+>', ' ', html)

# Clean up whitespace
text = re.sub(r'\s+', ' ', text).strip()

with open('extracted.txt', 'w', encoding='utf-8') as f:
    f.write(text)

print("Extraction complete.")
