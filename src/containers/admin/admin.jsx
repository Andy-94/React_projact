import React,{Component} from 'react'
import {connect} from 'react-redux'
import {createDemo1Action} from '../../redux/actions/test_action'

class Admin extends Component{

  render(){
    return (
      <div>Admin</div>
    )
  }
}
export default connect(
  state => ({testadmin:state.test}),
  {
    demo1:createDemo1Action
  }
)(Admin)