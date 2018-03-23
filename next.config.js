module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config
    rules: [
      {
        test: /npm\.js$/,
        loader: 'string-replace-loader',
        include: path.resolve('node_modules/firebaseui/dist'),
        query: {
          search: 'require(\'firebase\');',
          replace: 'require(\'firebase/app\');require(\'firebase/auth\');'
        }
      }
    ]
    // Important: return the modified config
    return config
  }
}
