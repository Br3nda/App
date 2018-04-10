const express = require('express')
const bodyParser = require('body-parser')
// const compression = require('compression')
const { join } = require('path')
const { parse } = require('url')
const next = require('next')
const dotenv = require('dotenv').config()
// const workboxBuild = require('workbox-build')

const router = require('express').Router()
module.exports = router
const webpush = require('web-push')
const { createReadStream } = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const port = process.env.PORT || 3000

const URL_MAP = {
  '/index': '/index'
}

const testData = {
  title: 'Testing',
  body: 'Its a success!'
}

app.prepare().then(() => {
  const server = express()
  server.use(bodyParser.json())

  server.get('/service-worker.js', (req, res) => {
    res.setHeader('content-type', 'text/javascript')
    createReadStream('./service-worker.js').pipe(res)
  })

// give all Nextjs's request to Nextjs before anything else
  server.get('/_next/*', (req, res) => {
    handle(req, res)
  })

  server.get('/static/*', (req, res) => {
    handle(req, res)
  })

  webpush.setVapidDetails(
  'mailto:meghan@manu.net.nz',
  process.env.PUBLIC_VAPID_KEY,
  process.env.PRIVATE_VAPID_KEY
)

  let subscription
  let pushIntervalID

  server.post('/register', (req, res) => {
    subscription = req.body
    console.log(subscription)
    res.sendStatus(201)
    pushIntervalID = setInterval(() => {
      // sendNotification can only take a string as it's second parameter
      webpush.sendNotification(subscription, JSON.stringify(testData))
        .catch(() => clearInterval(pushIntervalID))
    }, 30000)
  })

  server.delete('/unregister', (req, res, next) => {
    subscription = null
    clearInterval(pushIntervalID)
    res.sendStatus(200)
  })

  server.get('*', (req, res) => {
    const url = URL_MAP[req.path]
    if (url) {
      app.render(req, res, url)
    } else {
      handle(req, res)
    }
  })

  // // NOTE: This should be run *AFTER* all your assets are built
  // const buildSW = () => {
  //   // This will return a Promise
  //   return workboxBuild.generateSW({
  //     globDirectory: 'build',
  //     globPatterns: [
  //       '**\/*.{html,json,js,css}'
  //     ],
  //     swDest: 'build/service-worker.js'
  //   })
  // }

  server.listen(port)
})
