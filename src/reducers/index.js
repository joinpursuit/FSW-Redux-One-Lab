import countReducer from "./countReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({ count: countReducer });


export default rootReducer;