'use strict'

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
