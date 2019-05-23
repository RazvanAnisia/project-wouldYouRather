import thunk from 'redux-thunk'

import authedUser from './authedUser'
import { applyMiddleware } from 'redux'

export default applyMiddleware(thunk,authedUser)
