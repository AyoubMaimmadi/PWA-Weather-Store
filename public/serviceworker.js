const CASH_NAME = 'Version-1'
const urlsToCache = ['index.html', 'offline.html']

const self = this

// Install service worker
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CASH_NAME).then(function (cache) {
      return cache.addAll(urlsToCache)
    })
  )
})

// Listen for requests
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request)
    })
  )
})

// Activate service worker
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName !== CASH_NAME) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
