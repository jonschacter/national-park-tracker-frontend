import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser.js'
import parks from './reducers/parks.js'
import visits from './reducers/visits.js'
import parkReviews from './reducers/parkReviews.js'

const reducer = combineReducers({
    currentUser,
    parks,
    visits,
    parkReviews
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store