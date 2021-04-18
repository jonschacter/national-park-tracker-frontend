// root string for API URL
import API_ROOT from '../apiRoot.js'

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

export const updateVisitAction = visit => {
    return {
        type: "UPDATE_VISIT",
        visit
    }
}

export const getVisits = () => {
    return dispatch => {
        return fetch(`${API_ROOT}/visits`, {
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
            .catch(error => alert(error))
    }
}

export const createVisit = (visitData, history) => {
    return dispatch => {
        const formattedVisitData = {
            start_date: visitData.startDate,
            end_date: visitData.endDate,
            park_id: parseInt(visitData.parkId),
            user_id: visitData.userId
        }
        
        return fetch(`${API_ROOT}/visits`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formattedVisitData)
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
            .catch(error => alert(error))
    }
}

export const deleteVisit = (visitId, history) => {
    return dispatch => {
        return fetch(`${API_ROOT}/visits/${visitId}`, {
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
            .catch(error => alert(error))
    }
}

export const updateVisit = (visitData, history) => {
    return dispatch => {
        const formattedVisitData = {
            start_date: visitData.startDate,
            end_date: visitData.endDate,
            park_id: parseInt(visitData.parkId),
            user_id: visitData.userId
        }
        
        return fetch(`${API_ROOT}/visits/${visitData.id}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formattedVisitData)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    dispatch(updateVisitAction(data))
                    history.push(`/visits/${data.id}`)
                }
            })
            .catch(error => alert(error))
    }
}