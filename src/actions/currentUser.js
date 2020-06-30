export const login = (userInfo) => {
    return dispatch => {
        return fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
            })
    }
}