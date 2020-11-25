const initialState = {};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MY_PROFILE": {
            console.log("GET_MY_PROFILE", action);
            return {...action.payload};
        }
    };
    return {...state}
};
