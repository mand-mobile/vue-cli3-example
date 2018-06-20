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
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .include
        .add(resolve('./src/assets/images'))
        .end()
      .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
  }
}