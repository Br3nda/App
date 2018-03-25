/*
TODO: IK: at the moment this file isn't really doing anything, but we might want to use the InjectManifest to layer caching of the app pages on top of the existing service worker that handles push
otherwise we have to manually figure out a way to cache nextjs pages
we might still want to use next-offline to handle some of the config for that, or at least borrow code from there
*/
const { InjectManifest } = require('workbox-webpack-plugin')

module.exports = {
  webpack: (config, { dev }) => {
    config.plugins = [
      ...config.plugins,
      // new InjectManifest({
      //   swSrc: '/service-worker.js',
      // })
    ]
    return config
  }
}
