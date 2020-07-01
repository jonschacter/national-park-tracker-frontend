export default (state = [], action) => {
    switch(action.type) {
        case "SET_VISITS":
            return action.visits
        case "ADD_VISIT":
            return state.concat(action.visit)
        case "REMOVE_VISIT": 
            return state.filter(visit => visit.id !== action.visitId)
        default:
            return state
    }
}