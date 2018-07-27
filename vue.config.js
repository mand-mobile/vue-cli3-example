const path = require('path')

const resolve = file => path.resolve(__dirname, file)

module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .include
      .add(resolve('./src/assets/images'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
    
    config.module
      .rule('ts')
      .use('ts-loader')
        .loader('ts-loader')
          .tap(options => {
            options.appendTsSuffixTo = [/\.vue$/]
            options.transpileOnly = true
            options.getCustomTransformers = () => ({
              before: [
                require('ts-import-plugin')({
                  "libraryName": "mand-mobile"
                })
              ]
            })
            return options
          })
  }
}