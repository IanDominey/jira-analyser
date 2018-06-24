// @flow
'use strict'

export type AuthenticationAction = {
  type: 'AUTHENTICATING',
  username: string,
  password: string,
  url: string
}

export type AuthenticationSuccessAction = {
  type: 'AUTHENTICATION_SUCCESS'
}

export type AuthenticationFailureAction = {
  type: 'AUTHENTICATION_FAILED'
}

export type AuthenticationResultAction =
  AuthenticationSuccessAction
  | AuthenticationFailureAction

export type JiraAction =
  AuthenticationResultAction
  | AuthenticationAction
