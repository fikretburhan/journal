import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_SUCCESS,
} from '../../constants/actionNames';
export default authReducer = (state, {type, payload}) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {...state, isLoggedIn: true};
    case LOGOUT:
      return {...state, isLoggedIn: false};
    default:
      return state;
  }
};
