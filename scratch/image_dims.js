const fs = require('fs');
const path = require('path');

function getPngSize(buffer) {
    const width = buffer.readUInt32BE(16);
    const height = buffer.readUInt32BE(20);
    return { width, height };
}

function getJpgSize(buffer) {
    let i = 2; // skip SOI
    while (i < buffer.length) {
        // Find next marker
        while (i < buffer.length && buffer[i] !== 0xFF) {
            i++;
        }
        while (i < buffer.length && buffer[i] === 0xFF) {
            i++;
        }
        if (i >= buffer.length) break;
        const marker = buffer[i];
        i++;
        if (marker === 0xD9 || marker === 0xDA) { // EOI or SOS
            break;
        }
        const size = buffer.readUInt16BE(i);
        if (marker >= 0xC0 && marker <= 0xC3) { // SOF0 - SOF3
            const height = buffer.readUInt16BE(i + 3);
            const width = buffer.readUInt16BE(i + 5);
            return { width, height };
        }
        i += size;
    }
    return null;
}

const dir = 'e:\\Websites\\Skyom\\assets\\Skyom Floor';
if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isFile()) {
            const buf = fs.readFileSync(filepath);
            let size = null;
            if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47) {
                size = getPngSize(buf);
            } else if (buf[0] === 0xFF && buf[1] === 0xD8) {
                size = getJpgSize(buf);
            }
            if (size) {
                console.log(`${file}: ${size.width}x${size.height} (${(size.width/size.height).toFixed(2)})`);
            } else {
                console.log(`${file}: Unknown format`);
            }
        }
    });
} else {
    console.log("Directory not found");
}
