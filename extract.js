const fs = require('fs');
const html = fs.readFileSync('scraped.html', 'utf-8');

// Simple regex to extract text
let text = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ');
text = text.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ');
text = text.replace(/<[^>]+>/g, ' ');
text = text.replace(/\s+/g, ' ').trim();

fs.writeFileSync('extracted.txt', text);

// Extract links
const linkRegex = /href="(https:\/\/skyomcity\.in\/[^"]*)"/g;
const links = new Set();
let match;
while ((match = linkRegex.exec(html)) !== null) {
    links.add(match[1]);
}
fs.writeFileSync('links.txt', Array.from(links).join('\n'));

console.log('Extraction complete.');
