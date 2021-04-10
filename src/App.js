import React,{Component} from 'react'
import InputNode from './components/inputNode/InputNode'
import List from './components/listNode/list'
import './App.less'

export default class App extends Component{
  state={
    comments:[
      {id:'x89vcuboucxiuyboi7',userName:'王帅',content:'react just soso!'},
      {id:'siaudyf876sd98f7s8',userName:'丽君',content:'我觉得很容易'},
      {id:'xcv78xv987x9vx987x',userName:'班长',content:'等我节后归来'}
    ]
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
          <InputNode/>
          <List comments={this.state.comments}/>
      </div>
    </div>
    )
  }
}