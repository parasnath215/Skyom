const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.json': 'application/json'
};

const server = http.createServer((req, res) => {
    let reqPath;
    try {
        reqPath = decodeURIComponent(req.url.split('?')[0]);
    } catch (e) {
        reqPath = req.url.split('?')[0];
    }

    if (reqPath === '/' || reqPath === '') {
        reqPath = '/index.html';
    }

    let filePath = path.join(__dirname, reqPath);

    // Prevent directory traversal
    if (!filePath.startsWith(__dirname)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        return res.end('Forbidden');
    }

    // Alias / fallback for old video path with spaces
    if (!fs.existsSync(filePath)) {
        if (filePath.includes('Skyom City Entrance.mp4') || filePath.includes('Skyom%20City%20Entrance.mp4')) {
            const fallbackPath = path.join(__dirname, 'assets', 'skyom-city-entrance.mp4');
            if (fs.existsSync(fallbackPath)) {
                filePath = fallbackPath;
            }
        }
    }

    fs.stat(filePath, (err, stats) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                return res.end('<h1>404 Not Found</h1>');
            }
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            return res.end(`Server Error: ${err.code}`);
        }

        if (stats.isDirectory()) {
            filePath = path.join(filePath, 'index.html');
            return fs.stat(filePath, (dirErr, dirStats) => {
                if (dirErr) {
                    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                    return res.end('<h1>404 Not Found</h1>');
                }
                serveFile(filePath, dirStats, req, res);
            });
        }

        serveFile(filePath, stats, req, res);
    });
});

function serveFile(filePath, stats, req, res) {
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';
    const totalSize = stats.size;
    const range = req.headers.range;

    // Support HTTP 206 Partial Content (Range requests) for video playback and streaming
    if (range) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : totalSize - 1;

        if (start >= totalSize || end >= totalSize || start > end) {
            res.writeHead(416, { 'Content-Range': `bytes */${totalSize}` });
            return res.end();
        }

        const chunkSize = (end - start) + 1;
        const fileStream = fs.createReadStream(filePath, { start, end });

        res.writeHead(206, {
            'Content-Range': `bytes ${start}-${end}/${totalSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunkSize,
            'Content-Type': contentType
        });

        fileStream.pipe(res);
    } else {
        res.writeHead(200, {
            'Content-Length': totalSize,
            'Content-Type': contentType,
            'Accept-Ranges': 'bytes'
        });

        fs.createReadStream(filePath).pipe(res);
    }
}

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
