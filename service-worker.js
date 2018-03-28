"use strict";

self.addEventListener("push", function(event) {
  console.log("[Service Worker] Push Received.");
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = "Main Bedroom is too cold";
  const options = {
    body:
      "Try closing any windows or turn on heating. \nUse a dehumidifier if you have one.",
    icon: "/static/img/icon/alert.svg"
  };

  const notificationPromise = self.registration.showNotification(
    title,
    options
  );
  event.waitUntil(notificationPromise);
});

self.addEventListener("notificationclick", function(event) {
  console.log("[Service Worker] Notification click Received.");

  event.notification.close();

  event.waitUntil(clients.openWindow("localhost:3000/account"));
});
