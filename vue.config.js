const path = require('path')
const poststylus = require('poststylus')
const pxtorem = require('postcss-pxtorem')

const resolve = file => path.resolve(__dirname, file)

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        use: [
          poststylus(pxtorem({
            rootValue: 100,
            propWhiteList: []
          }))
        ],
        import: [
          resolve('./src/assets/theme.custom')
        ]
      }
    }
  },
  transpileDependencies: [
    'mand-mobile'
  ],
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .include
      .add(resolve('./src/assets/images'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
    svgRule
      .use('svgo-loader')
      .lodaer('svgo-loader')
  }
}
