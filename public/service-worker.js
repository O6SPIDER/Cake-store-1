const CACHE_NAME = "evivi-bakery-cache-v2";
const urlsToCache = ["/", "/index.html", "/logo.png", "/manifest.json"];

// Install service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("✅ Service Worker: Caching files");
      return cache.addAll(urlsToCache);
    }),
  );
  self.skipWaiting();
});

// Fetch requests
self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    // Network First for navigation requests to ensure fresh HTML
    event.respondWith(
      fetch(event.request).catch(() => caches.match("/index.html")),
    );
    return;
  }

  // Cache First for other assets
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cache or fetch from network
      return (
        response ||
        fetch(event.request).catch(
          () =>
            // Fallback for non-existent images/etc if needed, or just let it fail
            null,
        )
      );
    }),
  );
});

// Activate new service worker
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((name) => {
            if (!cacheWhitelist.includes(name)) {
              console.log("🧹 Service Worker: Clearing old cache", name);
              return caches.delete(name);
            }
          }),
        ),
      )
      .then(() => self.clients.claim()),
  );
});
