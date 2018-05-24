import {combineReducers} from 'redux'
import {items, itemsHasErrored, itemsIsLoading} from './items'

const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading
})

export default rootReducer
