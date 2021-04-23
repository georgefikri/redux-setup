import * as actions from './constants';
import rootReducer from '../rootReducer';

export function loginUser(credentials) {

    return async (dispatch) => {
      try {
        dispatch({
          type: actions.USERNAME,
        });
        dispatch({
          type: actions.USERNAME_SUCCESS,
          payload: credentials,
        });
      } catch (error) {
        dispatch({
          type: actions.USERNAME_FAILURE,
          payload: error,
        });
      }
    };
  }