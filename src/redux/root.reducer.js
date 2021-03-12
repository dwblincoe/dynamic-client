import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import { authReducer } from './auth/auth.reducer';

import { CONSTANTS } from "./root.constants";

const appReducer = combineReducers({ auth: authReducer, form: formReducer });

const rootReducer = (state, action) => {
  if (action.type === CONSTANTS.RESET_APP) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
