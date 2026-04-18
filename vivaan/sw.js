// Vivaan Quiz, Service Worker (offline-first for chapter pages + assets)
// Bump CACHE_VER when shipping new chapter content so clients refresh.
const CACHE_VER = 'vivaan-2026-04-18-c';

const PRECACHE = [
  '/vivaan/',
  '/vivaan/index.html',
  '/vivaan/quiz-styles.css',
  '/vivaan/quiz-engine.js',
  '/vivaan/manifest.json',
  '/vivaan/icon.svg',
  '/vivaan/icon-192.png',
  '/vivaan/icon-512.png',
  '/vivaan/og.png',
  '/vivaan/math-ch1.html',
  '/vivaan/math-ch2.html',
  '/vivaan/math-ch3.html',
  '/vivaan/math-ch4.html',
  '/vivaan/math-ch5.html',
  '/vivaan/math-ch6.html',
  '/vivaan/math-ch7.html',
  '/vivaan/math-ch8.html',
  '/vivaan/math-ch9.html',
  '/vivaan/math-ch10.html',
  '/vivaan/math-ch11.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VER).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VER).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Strategy: stale-while-revalidate for /vivaan/ scope; network-only for everything else.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (!url.pathname.startsWith('/vivaan/')) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_VER);
    const cached = await cache.match(req);
    const fetchPromise = fetch(req).then((res) => {
      if (res && res.ok) cache.put(req, res.clone());
      return res;
    }).catch(() => cached);
    return cached || fetchPromise;
  })());
});
