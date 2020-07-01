export const setVisits = visits => {
    return {
        type: "SET_VISITS",
        visits
    }
}

export const addVisit = visit => {
    return {
        type: "ADD_VISIT",
        visit
    }
}

export const removeVisit = visitId => {
    return {
        type: "REMOVE_VISIT",
        visitId
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
                if (!data.error) {
                    dispatch(setVisits(data))
                }
            })
    }
}

export const createVisit = (formData, history) => {
    return dispatch => {
        return fetch('http://localhost:3001/visits', {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    dispatch(addVisit(data))
                    history.push(`/visits/${data.id}`)
                }
            })
    }
}

export const deleteVisit = (visitId, history) => {
    return dispatch => {
        return fetch(`http://localhost:3001/visits/${visitId}`, {
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
                    dispatch(removeVisit(visitId))
                    history.push("/visits")
                }
            })
    }
}