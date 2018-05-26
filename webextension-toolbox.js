module.exports = {
  webpack: (config, {dev, vendor}) => {
    const module = config['module'] || []
    const rules = module['rules'] || []
    rules.push({
      test: /\.css$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'}
      ]
    })
    module.rules = rules
    config.module = module
    config.devtool = dev ? 'eval-source-map' : config.devtool
    return config
  }
}
