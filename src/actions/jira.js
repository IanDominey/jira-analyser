// @flow

import type { AuthenticationResultAction } from './types'

export const authenticated = (authenticated: boolean): AuthenticationResultAction => {
  return {
    type: authenticated ? 'AUTHENTICATION_SUCCESS' : 'AUTHENTICATION_FAILURE'
  }
}

// export const attemptAuthentication = (url: string, username: string, password: string) => {
//   return (dispatch: (any) => any) => {
//     dispatch(authenticating(true))
//
//   }
// }
