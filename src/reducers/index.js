/* @flow */
import type { Reducer } from 'redux'
import { combineReducers } from 'redux'
import { isAuthenticated } from './jira'
import type { JiraState } from './types'
import type { BackgroundAction } from '../actions/types'

const rootReducer: Reducer<JiraState, BackgroundAction> = combineReducers({
  isAuthenticated
})

export default rootReducer
