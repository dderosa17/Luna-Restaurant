import baseUrl from '../../helpers/baseUrl'
import { GET_BEST_RESTAURANTS, GET_RESTAURANTS, ADD_NEW_RESTAURANT } from './actionTypes';

export const getAllRestaurantsAction = (dispatch, getState) => {
    const token = getState().auth.token;
    fetch(`${baseUrl}/backend/api/restaurants/`, {
        headers: new Headers({
            Authorization: `Bearer ${token}`,
        }),
    })
        .then((r) => r.json())
        .then((restaurants) => {
            console.log("restaurants", restaurants);
            dispatch({
                type: GET_RESTAURANTS,
                payload: restaurants,
            });
        });
};

export const getBestRestaurantsAction = (dispatch, getState) => {
    const token = getState().auth.token;
    fetch(`${baseUrl}/backend/api/home/`, {
        headers: new Headers({
            Authorization: `Bearer ${token}`,
        }),
    })
        .then((r) => r.json())
        .then((restaurants) => {
            console.log("restaurants", restaurants);
            dispatch({
                type: GET_BEST_RESTAURANTS,
                payload: restaurants,
            });
        });
};


// export const getNewResturant = (dataNewResturant) => async (dispatch, getState) => {
//     const token = getState().auth.token;
//     const headers = new Headers({
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json"
//     })

//     const body = JSON.stringify(dataNewResturant)
//     const config = {
//         method: "POST",
//         body: body,
//         headers: headers
//     }
//     const response = await fetch(`${baseUrl}/backend/api/restaurants/new/`, config)
//     console.log("respone:", response.json())
//     const responeParsed = response.json().then(resp => console.log("parse res", resp));

// }


export const getNewResturant = (dataNewResturant) => (dispatch, getState) => {
    const token = getState().auth.token;
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    })

    const body = JSON.stringify(dataNewResturant)
    const config = {
        method: "POST",
        body: body,
        headers: headers
    }
    fetch(`${baseUrl}/backend/api/restaurants/new/`, config)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            const newRestaurant = data;
            dispatch({
                type: ADD_NEW_RESTAURANT,
                payload: newRestaurant,
            })
        }).catch(e => console.error(e))
}