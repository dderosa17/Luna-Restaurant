import baseUrl from "../../helpers/baseUrl";

export const getMyProfileAction = (dispatch, getState) => {
    const token = getState().auth.token;
    fetch(`${baseUrl}/backend/api/users/me/`, {
        headers: new Headers({
            Authorization: `Bearer ${token}`,
        }),
    })
        .then((r) => r.json())
        .then((profile) => {
            console.log("profile", profile);
            dispatch({
                type: "GET_MY_PROFILE",
                payload: profile,
            });
        }).catch(e => console.error(e));
};
