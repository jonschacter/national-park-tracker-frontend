export const setParks = parks => {
    return {
        type: "SET_PARKS",
        parks
    }
}

export const getParks = () => {
    return dispatch => {
        return fetch('http://localhost:3001/parks', {
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