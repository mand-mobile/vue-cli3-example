const path = require('path')

const resolve = file => path.resolve(__dirname, file)

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        import: [
          resolve('./src/assets/theme.custom')
        ]
      }
    }
  }
}