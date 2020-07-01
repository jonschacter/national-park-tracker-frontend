export default (state = [], action) => {
    switch(action.type) {
        case "SET_VISITS":
            return action.visits
        case "ADD_VISIT":
            return [
                ...state,
                action.visit
            ]
        default:
            return state
    }
}