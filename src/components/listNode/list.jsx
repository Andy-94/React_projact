import React, { Component } from 'react';
import './list.css'
import Item from '../item/item'
export default class List extends Component {
  render() {
    let {comments}= this.props
    return (
      <div>
        <div className="col-md-8">
          <h3 className="reply">Comments</h3>
          <h2 style={{display: 'none'}}>暂无评论，点击左侧添加评论！！！</h2>
          <ul className="list-group">
            {comments.map((comments)=><Item key={comments.id} {...comments}/>)}
          </ul>
        </div>
      </div>
    );
  }
}