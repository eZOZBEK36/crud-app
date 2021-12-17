import logger from 'redux-logger'
import { appReducer } from './reducers/app.reducer'
import { userReducer } from './reducers/users.reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers, createStore, applyMiddleware } from 'redux'

const rootReducer = combineReducers({
	users: userReducer,
	app: appReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export { store }
