// root string for API URL
import API_ROOT from '../apiRoot.js'

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
        return fetch(`${API_ROOT}/parks/${parkId}/reviews`, {
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
        return fetch(`${API_ROOT}/visits/${visitId}/reviews`, {
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
                    // if no review clear store
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
        return fetch(`${API_ROOT}/reviews`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviewData)
        })
            .then(resp => resp.json())
            .then(data => {
                if (!data.error){
                    dispatch(setReview(data))
                } else {
                    alert(data.error)
                }
            })
            .catch(error => alert(error))
    }
}

export const updateReview = (reviewData, id) => {
    return dispatch => {
        return fetch(`${API_ROOT}/reviews/${id}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviewData)
        })
            .then(resp => resp.json())
            .then(data => {
                if (!data.error){
                    dispatch(setReview(data))
                } else {
                    alert(data.error)
                }
            })
    }
}

export const deleteReview = (id) => {
    return dispatch => {
        return fetch(`${API_ROOT}/reviews/${id}`, {
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