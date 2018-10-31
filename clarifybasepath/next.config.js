// next.config.js
module.exports = {
    useFileSystemPublicRoutes: false,
    assetPrefix : "/dave",
    publicRuntimeConfig: { // Will be available on both server and client
      staticFolder: '/dave/static'
    }
  }

  //https://zeit.co/blog/next5-1