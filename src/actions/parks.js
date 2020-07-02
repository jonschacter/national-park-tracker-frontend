// const npsApiUrl = 'https://developer.nps.gov/api/v1/parks?&api_key=OwNvFO9PgnzaBuEJMEol0fpU5JwIUYO1WJbxGbL9'

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
    }
}