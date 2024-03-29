import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser.js'
import parks from './reducers/parks.js'
import visits from './reducers/visits.js'
import parkReviews from './reducers/parkReviews.js'
import visitReview from './reducers/visitReview.js'

const reducer = combineReducers({
    currentUser,
    parks,
    visits,
    parkReviews,
    visitReview
})

// example store obj:

// {
//     currentUser: { id: 1, username: "jschacter" },           - USER OBJECT
//     parks: [{ ... }, { ... }, { ... }],                      - COLLECTION OF PARKS
//     visits: [{ ... }, { ... }],                              - COLLECTION OF USERS VISITS
//     parkReviews: [{ ... }, { ... }],                         - COLLECTION OF REVIEWS WHEN LOOKING AT A PARK SHOW PAGE
//     visitReview: { id: 16, visit_id: 7, content: "..." }     - SINGLE REVIEW WHEN LOOKING AT A VISIT SHOW PAGE
// };

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store