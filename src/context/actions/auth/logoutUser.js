import {LOGOUT} from '../../../constants/actionNames';
export default dispatch => {
  dispatch({type: LOGOUT, payload: null});
};
