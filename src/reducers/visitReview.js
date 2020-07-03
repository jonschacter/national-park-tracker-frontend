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
        default:
            return state
    }
}