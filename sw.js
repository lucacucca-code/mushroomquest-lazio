// sw.js - Service Worker per Fungoradar Italia
const CACHE_NAME = 'fungoradar-v3';

// Installazione immediata del nuovo Service Worker
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Attivazione e pulizia immediata delle vecchie cache
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminazione vecchia cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => clients.claim())
  );
});

// Intercettazione delle richieste con strategia Network-First
self.addEventListener('fetch', (event) => {
  // Ignora le richieste che non sono GET (es. chiamate API esterne Open-Meteo, Nominatim, GitHub)
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Se la risposta è valida, la cloniamo e la salviamo in cache per l'offline
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Se la rete è assente (offline), prova a recuperare la risorsa dalla cache
        return caches.match(event.request);
      })
  );
});

// Gestione del click sulla notifica
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ('focus' in client) return client.focus();
      }
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});
