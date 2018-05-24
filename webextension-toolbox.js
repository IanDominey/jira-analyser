module.exports = {
  webpack: (config, {dev, vendor}) => {
    const module = config['module'] || []
    const rules = module['rules'] || []
    rules.push({
      test: /\.css$/,
      use: [
        {loader: 'style-loader'},
        {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }
      ]
    })
    module.rules = rules
    config.module = module
    return config
  }
}
