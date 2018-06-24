import configureStore from 'redux-mock-store'
import memoize from 'fast-memoize'

const middleware = []

const mockStore = configureStore(middleware)

export default memoize((state = {}) => mockStore(state))
