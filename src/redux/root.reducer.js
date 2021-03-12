import { combineReducers } from "redux";

import { CONSTANTS } from "./root.constants";

const appReducer = combineReducers({});

const rootReducer = (state, action) => {
  if (action.type === CONSTANTS.RESET_APP) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
