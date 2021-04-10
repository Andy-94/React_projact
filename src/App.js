import React,{Component} from 'react'
import InputNode from './components/inputNode/InputNode'
import List from './components/listNode/list'
import './App.less'

export default class App extends Component{
  state={
    comments:[
      {id:'x89vcuboucxiuyboi7',userName:'王帅',content:'react just soso!'},
      {id:'siaudyf876sd98f7s8',userName:'丽君',content:'我觉得很容易'},
    ]
  }
  add =(data)=>{
    let {comments} = this.state
    comments.unshift(data)
    this.setState({comments})
  }
  deleteNode = (id)=>{
    let {comments} = this.state
    comments = comments.filter((data)=>{
      return data.id !== id
    })
    this.setState({comments})
  }
  render(){
    return (
      <div className="app">
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>React commit </h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <InputNode add={this.add}/>
          <List comments={this.state.comments} deleteNode={this.deleteNode}/>
      </div>
    </div>
    )
  }
}