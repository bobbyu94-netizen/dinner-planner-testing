const CACHE_NAME = "dinner-planner-v3";

const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./manifest.json",
  "./data.js",
  "./helpers.js",
  "./storage.js",
  "./ui-panels.js",
  "./calendar.js",
  "./pantry.js",
  "./preferences.js",
  "./settings.js",
  "./render.js",
  "./meal-actions.js",
  "./recipes.js",
  "./app.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request);
    })
  );
});
