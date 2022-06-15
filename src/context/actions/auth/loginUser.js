import {LOGIN_START, LOGIN_SUCCESS} from '../../../constants/actionNames';
export default ({usrname, password}) =>
  dispatch => {
    dispatch({type: LOGIN_SUCCESS, payload: null});
  };
