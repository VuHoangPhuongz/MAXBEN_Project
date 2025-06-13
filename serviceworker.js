const CACHE_NAME = 'maxben-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './main.js',
  './style.css',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Install: cache tài nguyên
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch: dùng cache khi offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
