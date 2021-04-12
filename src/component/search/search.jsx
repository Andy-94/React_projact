import React, { Component } from 'react';
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class search extends Component {
  myRef =  React.createRef()
  searchInfo=()=>{
    let keyValue = this.myRef.current.value
    PubSub.publish('updateAppState',{isFirstView:false,users:[],loading:true,errorMsg:''})
    // updateAppState({isFirstView:false,users:[],loading:true,errorMsg:''})
    const URL=`https://api.github.com/search/users?q=${keyValue}`
    axios.get(URL)
    .then((response)=>{
      PubSub.publish('updateAppState',{isFirstView:false,users:response.data.items,loading:false,errorMsg:''})
      // updateAppState({isFirstView:false,users:response.data.items,loading:false,errorMsg:''})
    })
    .catch((err)=>{
      PubSub.publish('updateAppState',{isFirstView:false,users:[],loading:false,errorMsg:err.message})
      // updateAppState({isFirstView:false,users:[],loading:false,errorMsg:err.message})
    })
  }
  render() {
    return (
       <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
              <input ref={this.myRef} type="text" placeholder="enter the name you search"/>
              <button onClick={this.searchInfo}>Search</button>
            </div>
          </section>
    );
  }
}
