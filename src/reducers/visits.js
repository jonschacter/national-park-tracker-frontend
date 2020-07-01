export default (state = [], action) => {
    switch(action.type) {
        case "SET_VISITS":
            return action.visits
        default:
            return state
    }
}