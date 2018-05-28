// @flow

import type { BackgroundAction } from './types'

export const isAuthenticated = (authenticated: boolean): BackgroundAction => {
  return {
    type: 'IS_AUTHENTICATED',
    authenticated
  }
}
