import CountReducer from "./count";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  count: CountReducer,
});

export default rootReducer;
