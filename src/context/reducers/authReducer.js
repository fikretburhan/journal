import {LOGIN, LOGOUT, SIGNUP} from '../../constants/actionNames';
export default authReducer = (state, {type, payload}) => {
  switch (type) {
    case LOGIN:
      return {...state, isLoggedIn: true};
    case LOGOUT:
      return {...state, isLoggedIn: false};
    default:
      return state;
  }
};
