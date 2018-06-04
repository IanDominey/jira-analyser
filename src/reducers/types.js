// @flow

export type AuthenticationState = {
  +authenticating: boolean,
  +authenticated: boolean,
  +username: string,
  +url: string,
  +password: string
}
