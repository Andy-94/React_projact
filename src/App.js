import React,{Component} from 'react'
import ListNode from './component/ListNode/ListNode'
import Search from './component/search/search'
import './App.less'
import Container from './container/count_container'
export default class App extends Component{
 
  render(){
    return (
        <div className="container">
          <Search />
          <ListNode/>
          <Container/>
        </div>
    )
  }
}