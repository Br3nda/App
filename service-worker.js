/*
You can see console.logs inside a service worker by opening chrome://serviceworker-internals/ (if using Chrome)
*/

self.addEventListener('install', function(event) {
  console.log('sw installed')
  console.log('event', event)
})

self.addEventListener('push', function(event) {
  if (!(self.Notification && self.Notification.permission === 'granted')) {
    return
  }

  var data = event.data.text()
  event.waitUntil(self.registration.showNotification(data))
});
