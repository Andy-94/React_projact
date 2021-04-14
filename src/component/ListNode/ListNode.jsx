import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import Card from '../list/card'

export default class ListNode extends Component {
  state = {
    isFirstView:true,
    users:[],
    loading:false,
    errorMsg:''
  }
  componentDidMount(){
    PubSub.subscribe('updateAppState',(mes,data)=>{this.setState(data)})
  }


  // updateAppState = ({isFirstView,users,loading,errorMsg})=>{
  //   this.setState({
  //     isFirstView,
  //     users,
  //     loading,
  //     errorMsg,
  //   })
  // }
  render() {
    let {isFirstView,users,loading,errorMsg} = this.state
    if(isFirstView){
      return <h2>plese input on the search box</h2>
    }else if(loading){
      return <h2>Loading....</h2>
    }else if(errorMsg){
      return <h2>{errorMsg}</h2>
    }else {
      return (
        <div className="row">
          {users.map((user)=>{
            return <Card key={user.login} infoState={user}/>
          })}
        </div>
      )
    }
  }
}
