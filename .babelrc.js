module.exports = {
  'env': {
    'production': {
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow']
    },
    'development': {
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow']
    },
    'test': {
      presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-flow']
    }
  }
}
