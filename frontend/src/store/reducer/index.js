import { combineReducers } from 'redux';
import { profileReducer } from '../reducer/profileReducer'
import { restaurantReducer } from '../reducer/restaurantReducer';
import { authReducer } from '../reducer/authReducer';

const reducers = combineReducers({
    profile: profileReducer,
    restaurants: restaurantReducer,
    auth: authReducer
});
export default reducers



