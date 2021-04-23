// eslint-disable-next-line no-undef
import { combineReducers } from 'redux';
import { loginReducer } from './login/reducer'

let rootReducer = combineReducers({
  login: loginReducer
});
export default rootReducer;