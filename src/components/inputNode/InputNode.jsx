import React, { Component } from 'react';

export default class InputNode extends Component {

  render() {
    return (
      <div>
          <div className="col-md-4">
            <form className="form-horizontal">
              <div className="form-group">
                <label>UserName</label>
                <input type="text" className="form-control" placeholder="UserName"/>
              </div>
              <div className="form-group">
                <label>Comments</label>
                <textarea className="form-control" rows="6" placeholder="comments"></textarea>
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
