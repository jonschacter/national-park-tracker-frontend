export const setReviews = (reviews) => {
    return {
        type: "SET_REVIEWS",
        reviews
    }
}

export const getReviews = (parkId) => {
    return dispatch => {
        return fetch(`http://localhost:3001/parks/${parkId}/reviews`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }})
            .then(resp => resp.json())
            .then(data => dispatch(setReviews(data)))
    }
}