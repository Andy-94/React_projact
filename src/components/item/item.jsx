import React, { Component } from 'react';

export default class item extends Component {
  render() {
    let {userName,content}= this.props
    return (
      <div>
          <li className="list-group-item">
              <div className="handle">
                <a href="#1">cannel</a>
              </div>
              <p className="user"><span >{userName}</span><span>说:</span></p>
              <p className="centence">{content}</p>
          </li>
      </div>
    );
  }
}
