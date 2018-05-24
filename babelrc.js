module.exports = {
  presets: ['@babel/flow', '@babel/preset-react', {
    development: process.env.BABEL_ENV === 'development'
  }]
}
