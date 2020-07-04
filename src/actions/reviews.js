// for array of reviews in Park show page
export const setReviews = (reviews) => {
    return {
        type: "SET_REVIEWS",
        reviews
    }
}
// for single review in Visit show page
export const setReview = (review) => {
    return {
        type: "SET_REVIEW",
        review
    }
}
// clear single review in Visit show page
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
            .catch(error => alert(error))
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
            .catch(error => alert(error))
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
            .catch(error => alert(error))
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

export const deleteReview = (id) => {
    return dispatch => {
        return fetch(`http://localhost:3001/reviews/${id}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    dispatch(resetReview())
                }
            })
            .catch(error => alert(error))
    }
}