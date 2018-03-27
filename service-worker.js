/*
You can see console.logs inside a service worker by opening chrome://serviceworker-internals/ (if using Chrome)
*/

self.addEventListener('install', event => {
  console.log('sw installed')
  console.log('event', event)
})

self.addEventListener('push', event => {
  const data = event.data.json()
  const { title } = data

  const body = {
    body: data.body
  }

  event.waitUntil(self.registration.showNotification(title, body))
})
