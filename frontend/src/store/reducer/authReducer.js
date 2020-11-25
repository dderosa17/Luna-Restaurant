import { GET_USER, USER_LOGIN, USER_LOGOUT } from '../actions/actionTypes';

const initialState = {
    token: localStorage.getItem("token"),
    user: null,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_LOGIN: {
        const token = action.payload;
        localStorage.setItem("token", token);
        console.log('in authReducer, token: ', token);
        return { ...state, token: token };
      }
      case GET_USER: {
        const user = action.payload;
        return { ...state, user: user };
      }
      case USER_LOGOUT: {
        console.log("clearing local storage")
        console.log(localStorage)
        localStorage.clear();
        let state = {...initialState};
        return state;
    }
      default:
        return state;
    }
  };
  