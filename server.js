const { createServer } = require('http')
const { join } = require('path')
const { parse } = require('url')
const { createReadStream } = require('fs')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true)
      const { pathname } = parsedUrl
      if (pathname === '/service-worker.js') {
        // const filePath = join(__dirname, '.next', pathname)
        //
        // app.serveStatic(req, res, filePath)
        res.setHeader('content-type', 'text/javascript')
        createReadStream('./service-worker.js').pipe(res)
      } else {
        handle(req, res, parsedUrl)
      }
    })
    .listen(3000, () => {
      console.log(`> Ready on http://localhost:${3000}`)
    })
  })
