import count from "./count";

import { combineReducers } from "redux";

const calc = () => {
    let sum = 0; 
    return {
        add: (num) => {
                sum += num; 
            },  
        sub: (num) => {
                sum -= num; 
            } 
        
}
export default combineReducers({ count });
