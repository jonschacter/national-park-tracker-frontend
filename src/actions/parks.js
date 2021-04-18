// root string for API URL
import API_ROOT from '../apiRoot.js'

export const setParks = parks => {
    return {
        type: "SET_PARKS",
        parks
    }
}

export const getParks = () => {
    return dispatch => {
        return fetch(`${API_ROOT}/parks`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }})
            .then(resp => resp.json())
            .then(response => {
                dispatch(setParks(response))
            })
            .catch(error => alert(error))
    }
}