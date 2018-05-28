// @flow
import type { BackgroundAction } from '../actions/types'
import type { JiraState } from './types'

const initialState = {authenticated: false}

export const isAuthenticated = (state: JiraState = initialState, action: BackgroundAction): JiraState => {
  switch (action.type) {
    case 'IS_AUTHENTICATED':
      return {authenticated: action.authenticated}

    default:
      return state
  }
}
