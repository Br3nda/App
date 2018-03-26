const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const next = require('next')
const webpush = require("web-push")

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const port = process.env.PORT || 3000

const URL_MAP = {
  '/index': '/index',
};

app.prepare().then(() => {
  const server = express();

  // give all Nextjs's request to Nextjs before anything else
  server.get('/_next/*', (req, res) => {
    handle(req, res);
  });

  // GET method route
  server.get('*', (req, res) => {
    const url = URL_MAP[req.path];
    if (url) {
      app.render(req, res, url);
    } else {
      handle(req, res);
    }
  });

  server.get('/static/*', (req, res) => {
    handle(req, res);
  });

  server.use(compression());
  server.use(bodyParser.json());

  server.listen(port)
})
