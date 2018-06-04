// @flow
'use strict'

export type AuthenticationAction = {
  type: 'AUTHENTICATING',
  username: string,
  password: string,
  url: string
}

export type AuthenticationResultAction = {
  type: 'AUTHENTICATION_SUCCESS' | 'AUTHENTICATION_FAILURE'
}
