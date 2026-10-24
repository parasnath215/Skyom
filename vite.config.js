import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'video-stream-handler',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && (req.url.endsWith('.mp4') || req.url.endsWith('.webm'))) {
            const cleanUrl = decodeURIComponent(req.url.split('?')[0]);
            const filePath = path.join(process.cwd(), cleanUrl.startsWith('/') ? cleanUrl.slice(1) : cleanUrl);
            
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              const stat = fs.statSync(filePath);
              const ext = path.extname(filePath).toLowerCase();
              const contentType = ext === '.webm' ? 'video/webm' : 'video/mp4';
              const range = req.headers.range;

              if (range) {
                const parts = range.replace(/bytes=/, '').split('-');
                const start = parseInt(parts[0], 10);
                const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;
                const chunksize = end - start + 1;
                const file = fs.createReadStream(filePath, { start, end });
                res.writeHead(206, {
                  'Content-Range': `bytes ${start}-${end}/${stat.size}`,
                  'Accept-Ranges': 'bytes',
                  'Content-Length': chunksize,
                  'Content-Type': contentType,
                });
                file.pipe(res);
                return;
              } else {
                res.writeHead(200, {
                  'Content-Length': stat.size,
                  'Content-Type': contentType,
                  'Accept-Ranges': 'bytes',
                });
                fs.createReadStream(filePath).pipe(res);
                return;
              }
            }
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 5173,
    open: false
  }
});
