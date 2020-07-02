export default (state = [], action) => {
    switch(action.type) {
        case "SET_VISITS":
            return action.visits
        case "ADD_VISIT":
            return state.concat(action.visit)
        case "UPDATE_VISIT":
            const index = state.findIndex(visit => visit.id === action.visit.id)
            return [...state.slice(0, index), action.visit, ...state.slice(index+1)]
        case "REMOVE_VISIT": 
            return state.filter(visit => visit.id !== action.visitId)
        default:
            return state
    }
}