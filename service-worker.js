'use strict'
// self.addEventListener('install', function(event) {
//   var CACHE_NAME = 'Whare Hauora App'
//   var urlsToCache = [
//     '/',
//     '/pages/index.js',
//     '/pages/account.js',
//     '/components/Dashboard.js',
//     '/components/Layouts.js'
//   ]
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(function (cache) {
//         console.log('Opened cache')
//         return cache.addAll(urlsToCache)
//       })
//     )
// })

self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.')
  console.log(`[Service Worker] Push had this data: '${event.data.text()}'`)

  const title = 'Whare Alert'
  const options = {
    body:
      `Janie's room is TOO HOT. \nTry closing any windows or turn on heating. \nUse a dehumidifier if you have one.`,
    icon: './static/img/icon/house.png',
    badge: './static/img/icon/house.png'
  }

  const notificationPromise = self.registration.showNotification(
    title,
    options
  )
  event.waitUntil(notificationPromise)
})

self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.')

  event.notification.close()

  event.waitUntil(clients.openWindow('localhost:3000/account'))
})
