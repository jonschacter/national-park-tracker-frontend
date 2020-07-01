export const setVisits = visits => {
    return{
        type: "SET_VISITS",
        visits
    }
}

export const getVisits = () => {
    return dispatch => {
        return fetch('http://localhost:3001/visits', {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                if (!data.errors) {
                    dispatch(setVisits(data))
                }
            })
    }
}