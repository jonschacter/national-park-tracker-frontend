export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

export const login = (userInfo) => {
    return dispatch => {
        return fetch('http://localhost:3001/login', {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    dispatch(setCurrentUser(data))
                }
            })
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch('http://localhost:3001/logout', {
            credentials: "include",
            method: "DELETE"
        })
    }  
}

export const signup = (userInfo) => {
    console.log(userInfo)
    return dispatch => {
        return fetch('http://localhost:3001/signup', {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: userInfo
                })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    dispatch(setCurrentUser(data))
                }
            })
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3001/current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                if (!data.error) {
                    dispatch(setCurrentUser(data))
                }
            })
    }
}