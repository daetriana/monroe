
export function setUsername(username) {
    return function(dispatch) {
        dispatch({ type: "SET_USERNAME", payload: { username: username } });
    };
}