export const setReviews = (reviews) => {
    return {
        type: "SET_REVIEWS",
        reviews
    }
}

export const setReview = (review) => {
    return {
        type: "SET_REVIEW",
        review
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

export const getReview = (visitId) => {
    return dispatch => {
        return fetch(`http://localhost:3001/visits/${visitId}/reviews`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }})
            .then(resp => resp.json())
            .then(data => {
                if (data.errors) {
                    alert(data.errors)
                } else if (!data.notice) {
                    dispatch(setReview(data))
                }
            })
    }
}