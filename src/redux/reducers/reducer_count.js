import {INCREMENT,DECREMENT} from '../action_type.js'
export default function (PreState =0,action){
  const {type,data} = action
  let NewState
  switch (type){
    case INCREMENT:
      NewState =PreState + data
      return NewState
    case DECREMENT:
      NewState =PreState - data
      return NewState
    default: return PreState 
  }
}