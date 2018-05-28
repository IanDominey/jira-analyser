const FlowtypePlugin = require('flowtype-loader/plugin');

module.exports.default = {
  webpack: (config, {dev, vendor}) => {
    const plugins = config['plugins'] || []
    const module = config['module'] || []
    const rules = module['rules'] || []
    module.rules = rules
      .map((v) => {
        if (v.test instanceof RegExp && v.test.test('.js')) {
          v['use']['options']['babelrc'] = true
        }
        return v
      })
      .concat({
        enforce: 'pre',
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              failOnWaring: true,
              failOnError: true
            }
          },
          {
            loader: 'flowtype-loader',
            options: {
              failOnError: true,
              cache: true
            }
          }
        ]
      })
      .concat({
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      })
    plugins.push(new FlowtypePlugin())
    config.module = module
    config.plugins = plugins
    config.devtool = dev ? 'eval-source-map' : config.devtool
    return config
  }
}
