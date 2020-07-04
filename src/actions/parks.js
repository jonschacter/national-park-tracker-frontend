export const setParks = parks => {
    return {
        type: "SET_PARKS",
        parks
    }
}

// Note: Originally built for the NPS.GOV API but had unusable response times. Built a models and a scraper into my backend API to seed data

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