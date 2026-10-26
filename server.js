import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.mjs': 'text/javascript; charset=utf-8',
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
    '.otf': 'font/otf',
    '.ico': 'image/x-icon',
    '.json': 'application/json',
    '.txt': 'text/plain; charset=utf-8',
    '.xml': 'application/xml; charset=utf-8'
};

const server = http.createServer((req, res) => {
    try {
        let reqPath;
        try {
            reqPath = decodeURIComponent(req.url.split('?')[0]);
        } catch {
            reqPath = req.url.split('?')[0];
        }

        // Default route -> index.html
        if (reqPath === '/' || reqPath === '') {
            reqPath = '/index.html';
        }

        // Determine candidate file paths (check dist/ first for Vite build, then root __dirname)
        let candidatePaths = [];

        // Dist path
        const distCandidate = path.join(__dirname, 'dist', reqPath.startsWith('/') ? reqPath.slice(1) : reqPath);
        // Root path
        const rootCandidate = path.join(__dirname, reqPath.startsWith('/') ? reqPath.slice(1) : reqPath);

        candidatePaths.push(distCandidate);
        candidatePaths.push(rootCandidate);

        // Fallback for clean URLs without .html (e.g. /project-city -> project-city.html)
        if (!path.extname(reqPath)) {
            candidatePaths.push(path.join(__dirname, reqPath.startsWith('/') ? `${reqPath.slice(1)}.html` : `${reqPath}.html`));
            candidatePaths.push(path.join(__dirname, 'dist', reqPath.startsWith('/') ? `${reqPath.slice(1)}.html` : `${reqPath}.html`));
            // SPA fallback: serve dist/index.html
            candidatePaths.push(path.join(__dirname, 'dist', 'index.html'));
            candidatePaths.push(path.join(__dirname, 'legacy-index.html'));
        }

        // Alias for video with spaces
        if (reqPath.includes('Skyom City Entrance.mp4') || reqPath.includes('Skyom%20City%20Entrance.mp4')) {
            candidatePaths.unshift(path.join(__dirname, 'assets', 'skyom-city-entrance.mp4'));
        }

        // Find the first file that exists and is inside __dirname
        let targetFilePath = null;
        for (const p of candidatePaths) {
            const normalized = path.resolve(p);
            if (normalized.startsWith(__dirname) && fs.existsSync(normalized)) {
                try {
                    const s = fs.statSync(normalized);
                    if (s.isFile()) {
                        targetFilePath = normalized;
                        break;
                    } else if (s.isDirectory()) {
                        const indexInDir = path.join(normalized, 'index.html');
                        if (fs.existsSync(indexInDir) && fs.statSync(indexInDir).isFile()) {
                            targetFilePath = indexInDir;
                            break;
                        }
                    }
                } catch {
                    // Ignore stat errors and try next
                }
            }
        }

        // If not found, fallback to dist/index.html (SPA) or legacy-index.html
        if (!targetFilePath) {
            const distIndex = path.join(__dirname, 'dist', 'index.html');
            const legacyIndex = path.join(__dirname, 'legacy-index.html');
            if (fs.existsSync(distIndex)) {
                targetFilePath = distIndex;
            } else if (fs.existsSync(legacyIndex)) {
                targetFilePath = legacyIndex;
            }
        }

        if (!targetFilePath) {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            return res.end('<h1>404 Not Found</h1>');
        }

        const stats = fs.statSync(targetFilePath);
        serveFile(targetFilePath, stats, req, res);

    } catch (err) {
        console.error('Server request error:', err);
        if (!res.headersSent) {
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Server Error');
        }
    }
});

function serveFile(filePath, stats, req, res) {
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';
    const totalSize = stats.size;
    const range = req.headers.range;

    // Cache headers
    let cacheControl = 'public, max-age=86400';
    if (extname === '.html') {
        cacheControl = 'no-cache, must-revalidate';
    } else if (extname === '.js' || extname === '.css' || extname === '.woff2' || extname === '.webp') {
        cacheControl = 'public, max-age=31536000, immutable';
    }

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
            'Content-Type': contentType,
            'Cache-Control': cacheControl
        });

        fileStream.pipe(res);
    } else {
        res.writeHead(200, {
            'Content-Length': totalSize,
            'Content-Type': contentType,
            'Accept-Ranges': 'bytes',
            'Cache-Control': cacheControl
        });

        fs.createReadStream(filePath).pipe(res);
    }
}

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

