import { createStore } from "redux";

import countReducer from "../reducers/count";

let store = createStore(countReducer);

export default store;
