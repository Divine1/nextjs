// next.config.js
const withSass = require('@zeit/next-sass')

module.exports = {
    exportPathMap: function () {
        return {
        '/': { page: '/' }
        }
    }
}

module.exports = withSass()