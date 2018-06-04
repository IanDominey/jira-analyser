/* @flow */
import { createStore } from 'redux'
import reducer from '../reducers'
import devToolsEnhancer from 'remote-redux-devtools'

export default createStore(reducer, devToolsEnhancer())
