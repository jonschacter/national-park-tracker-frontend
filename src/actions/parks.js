import { tempParkData } from '../tempParkData.js'

// const npsApiUrl = 'https://developer.nps.gov/api/v1/parks?&limit=20&api_key=OwNvFO9PgnzaBuEJMEol0fpU5JwIUYO1WJbxGbL9'

export const setParks = parks => {
    return {
        type: "SET_PARKS",
        parks
    }
}

export const getParks = () => {
    return dispatch => {
        // temporary fake request
        setTimeout(() => {dispatch(setParks(tempParkData))}, 2000)

        // real request
        // return fetch(npsApiUrl)
        //     .then(resp => resp.json())
        //     .then(response => dispatch(setParks(response.data)))
    }
}