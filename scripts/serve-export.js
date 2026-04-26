const http = require('http');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..', 'out');
const port = Number(process.env.PORT || 3000);

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
};

const normalizeRepeatedSlashes = (requestPath) => requestPath.replace(/\/{2,}/g, '/');

const sanitizePath = (requestPath) => {
  const normalized = path.posix.normalize(requestPath).replace(/^\/+/, '');
  if (normalized.includes('..')) {
    return null;
  }
  return normalized;
};

const resolveFilePath = (requestPath) => {
  const safePath = sanitizePath(requestPath);
  if (safePath === null) {
    return null;
  }

  const absolutePath = path.join(rootDir, safePath);
  const candidates = [
    absolutePath,
    `${absolutePath}.html`,
    path.join(absolutePath, 'index.html'),
    path.join(rootDir, safePath, 'index.html'),
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
  }

  return null;
};

const server = http.createServer((req, res) => {
  const requestUrl = req.url || "/";
  const [rawPathname, rawSearch] = requestUrl.split("?");
  const pathname = rawPathname || "/";
  const normalizedPathname = normalizeRepeatedSlashes(pathname);

  if (normalizedPathname !== pathname) {
    const search = rawSearch ? `?${rawSearch}` : "";
    res.writeHead(301, { Location: `${normalizedPathname}${search}` });
    res.end();
    return;
  }

  const filePath = resolveFilePath(normalizedPathname);
  if (!filePath) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not Found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = contentTypes[ext] || 'application/octet-stream';

  res.writeHead(200, { 'Content-Type': contentType, 'Cache-Control': 'public, max-age=0' });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(port, () => {
  console.log(`Static export server running at http://localhost:${port}`);
});
