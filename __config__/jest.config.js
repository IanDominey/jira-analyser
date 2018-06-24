const path = require('path')

console.log(path.resolve(__dirname, '../__mocks__/fileMock.js'))

module.exports = {
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js'
  },
  setupFiles: [
    '<rootDir>/__config__/setup.tests.js'
  ],
  rootDir: path.resolve(__dirname, '../')
}
