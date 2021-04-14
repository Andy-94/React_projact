import React, { Component } from 'react';
import './card.css'
export default class Card extends Component {
  render() {
    let {infoState} = this.props
    return (
          <div className="card">
            <a href={infoState.html_url} target="_blank" rel="noreferrer">
            <img src={infoState.avatar_url} alt={infoState.login} style={{width: '100px'}}/>
            </a>
            <p className="card-text">{infoState.login}</p>
          </div>
    );
  }
}
