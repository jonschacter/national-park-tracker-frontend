const initialState = {
    id: "",
    visit_id: "",
    content: "",
    user: {
        id: "",
        username: ""
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_REVIEW":
            return action.review
        case "RESET_REVIEW":
            return initialState
        default:
            return state
    }
}