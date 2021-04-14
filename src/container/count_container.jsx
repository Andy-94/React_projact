import Count from '../component/reduxPage'
import {connect} from 'react-redux'
import {createIncrmentAction,createDecrmentAction} from '../redux/action_Creators/count_Creat'
export default connect(
  state =>({number:state}),
  {
    increment:createIncrmentAction,
    decrement:createDecrmentAction
  }
)(Count)
