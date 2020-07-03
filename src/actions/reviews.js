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

export const resetReview = () => {
    return {
        type: "RESET_REVIEW"
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
                } else if (data.notice) {
                    dispatch(resetReview())
                } else {
                    dispatch(setReview(data))
                }
            })
    }
}

export const createReview = (reviewData) => {
    return dispatch => {
        return fetch('http://localhost:3001/reviews', {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviewData)
        })
            .then(resp => resp.json())
            .then(data => {
                if (!data.errors){
                    dispatch(setReview(data))
                } else {
                    alert(data.errors)
                }
            })
    }
}

export const updateReview = (reviewData, id, history) => {
    return dispatch => {
        return fetch(`http://localhost:3001/reviews/${id}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviewData)
        })
            .then(resp => resp.json())
            .then(data => {
                if (!data.errors){
                    dispatch(setReview(data))
                } else {
                    alert(data.errors)
                }
            })
    }
}