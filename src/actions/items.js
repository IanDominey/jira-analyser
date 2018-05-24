import {ITEMS_AS_ERRORED, ITEMS_HAS_FETCHED_SUCCESS, ITEMS_IS_LOADING} from '../constants/items'

export const itemsHasErrored = (hasErrored) => {
  return {
    type: ITEMS_AS_ERRORED,
    hasErrored
  }
}

export const itemsIsLoading = (isLoading) => {
  return {
    type: ITEMS_IS_LOADING,
    isLoading
  }
}

export const itemsFetchDataSuccess = (items) => {
  return {
    type: ITEMS_HAS_FETCHED_SUCCESS,
    items
  }
}

export const itemsFetchData = (url) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true))
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(itemsIsLoading(false))
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)))
  }
}
