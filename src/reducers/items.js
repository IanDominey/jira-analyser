import {ITEMS_AS_ERRORED, ITEMS_HAS_FETCHED_SUCCESS, ITEMS_IS_LOADING} from '../constants/items'

export const itemsHasErrored = (state = false, action) => {
  switch (action.type) {
    case ITEMS_AS_ERRORED:
      return action.hasErrored

    default:
      return state
  }
}

export const itemsIsLoading = (state = false, action) => {
  switch (action.type) {
    case ITEMS_IS_LOADING:
      return action.isLoading

    default:
      return state
  }
}

export const items = (state = [], action) => {
  switch (action.type) {
    case ITEMS_HAS_FETCHED_SUCCESS:
      return action.items

    default:
      return state
  }
}
