// This is a basic service worker file.
// It's required for the "Add to Home Screen" prompt to appear.

self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
});

self.addEventListener('fetch', (event) => {
  // For a simple PWA, we can just pass the request through.
  // For offline capabilities, this would be more complex.
  event.respondWith(fetch(event.request));
});
