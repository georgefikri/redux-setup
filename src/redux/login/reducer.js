import * as actions from './constants';
const initialState = {
    username:'',
    password: '',
    react_loading: false,
    error: null,

};

export const loginReducer = (state = initialState, action) => {
  console.log('action goa el reducer', action)
  switch (action.type) {
  case actions.USERNAME: {
    return {
      ...state,
      react_loading: true,
      username: null,
      error: false,
    };
  }
  case actions.USERNAME_SUCCESS: {
    return {
      ...state,
      react_loading: false,
      error: false,
      username: action.payload,
    };
  }
  case actions.USERNAME_FAILURE: {
    return {
      ...state,
      react_loading: false,
      error: action.payload,
    };
  }



  default:
    return state;
  }
};
