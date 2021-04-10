import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid'

export default class InputNode extends Component {
  myRefName = React.createRef()
  myRefCommit = React.createRef()
  handleAdd = () =>{

    let username = this.myRefName.current.value
    let commit = this.myRefCommit.current.value
    if(!username.trim() || !commit.trim()){
      alert('please input your name and commit')
      return 
    }
    let {add} = this.props
    add({id:uuidv4(),userName:username,content:commit})
  }
  render() {
    return (
      <div>
          <div className="col-md-4">
            <form className="form-horizontal">
              <div className="form-group">
                <label>UserName</label>
                <input ref={this.myRefName} type="text" className="form-control" placeholder="UserName"/>
              </div>
              <div className="form-group">
                <label>Comments</label>
                <textarea ref={this.myRefCommit} className="form-control" rows="6" placeholder="comments"></textarea>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button onClick={this.handleAdd} type="button" className="btn btn-default pull-right">Input your comments</button>
                </div>
              </div>
            </form>
        </div>
      </div>
    );
  }
}
