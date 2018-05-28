/* eslint-env browser */
/* @flow */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store/backgroundStore'

const root = document.getElementById('root')

if (!(root instanceof Element)) {
  throw new Error('Invalid element selected for react root.')
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  root
)
registerServiceWorker()
