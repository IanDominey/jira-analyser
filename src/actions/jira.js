// @flow

import type { AuthenticationResultAction, AuthenticationAction } from './types'

export const authenticationResult = (authenticated: boolean): AuthenticationResultAction => {
  switch (authenticated) {
    case true:
      return {
        type: 'AUTHENTICATION_SUCCESS'
      }
    default:
      return {
        type: 'AUTHENTICATION_FAILED'
      }
  }
}

export const authenticate = (url: string, username: string, password: string): AuthenticationAction => {
  return ({
    type: 'AUTHENTICATING',
    username,
    password,
    url
  })
}

// export const attemptAuthentication = (url: string, username: string, password: string) => {
//   return (dispatch: (any) => any) => {
//     dispatch(authenticating(true))
//
//   }
// }
