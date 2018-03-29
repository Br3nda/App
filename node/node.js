var webPush = require('web-push')

var pushSubscription = YOUR_SUBSCRIPTION_OBJECT

var vapidPublicKey = process.env.VAPID_PUBLIC_KEY
var vapidPrivateKey = process.env.VAPID_PRIVATE_KEY

var payload = 'Here is a payload!'

var options = {
  // gcmAPIKey: 'YOUR_SERVER_KEY',
  TTL: 60,
  vapidDetails: {
    subject: 'meghan@manu.net.nz',
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey
  }
}

webPush.sendNotification(
  pushSubscription,
  payload,
  options
)
