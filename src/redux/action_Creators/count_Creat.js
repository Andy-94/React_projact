import {INCREMENT,DECREMENT} from '../action_type.js'
export const createIncrmentAction = (data) =>({type:INCREMENT,data})
export const createDecrmentAction = (data) =>({type:DECREMENT,data})