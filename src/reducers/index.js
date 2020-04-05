import count from "./count";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    count: countReducer
})
export default rootReducer;
