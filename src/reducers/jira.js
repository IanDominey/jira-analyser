// @flow
import type { AuthenticationAction, AuthenticationResultAction } from '../actions/types'
import type { AuthenticationState } from './types'

const initialState = {
  authenticating: false,
  authenticated: false,
  username: '',
  password: '',
  url: ''
}

export const authentication = (state: AuthenticationState = initialState, action: AuthenticationAction | AuthenticationResultAction): AuthenticationState => {
  switch (action.type) {
    case 'AUTHENTICATING':
      return {
        ...state,
        authenticating: true,
        username: action.username,
        password: action.password,
        url: action.url
      }
    case 'AUTHENTICATION_FAILED':
      return initialState
    case 'AUTHENTICATION_SUCCESS':
      return {...state, authenticating: false, authenticated: true}
    default:
      return state
  }
}
