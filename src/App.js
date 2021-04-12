import React,{Component} from 'react'
import ListNode from './component/ListNode/ListNode'
import Search from './component/search/search'
import './App.less'

export default class App extends Component{
 
  render(){
    return (
        <div className="container">
          <Search />
          <ListNode/>
        </div>
    )
  }
}