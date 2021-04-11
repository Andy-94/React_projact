import React,{Component} from 'react'
import ListNode from './component/ListNode/ListNode'
import Search from './component/search/search'
import './App.less'

export default class App extends Component{
  state = {
    isFirstView:true,
    users:[],
    loading:false,
    errorMsg:''
  }
  updateAppState = ({isFirstView,users,loading,errorMsg})=>{
    this.setState({
      isFirstView,
      users,
      loading,
      errorMsg,
    })

  }
  render(){
    return (
        <div className="container">
          <Search updateAppState={this.updateAppState}/>
          <ListNode infoState={this.state}/>
        </div>
    )
  }
}