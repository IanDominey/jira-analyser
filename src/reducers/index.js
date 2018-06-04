/* @flow */
import type { Reducer } from 'redux'
import { combineReducers } from 'redux'
import { authentication } from './jira'
import type { AuthenticationState } from './types'
import type { AuthenticationAction } from '../actions/types'

const rootReducer: Reducer<AuthenticationState, AuthenticationAction> = combineReducers({
  authentication
})

export default rootReducer
