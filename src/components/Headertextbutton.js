import React, { Component } from 'react';


class HeaderTextButton extends Component{
  render() {
    return (
      <div className="header">
        <h1>Say Hello to ReactJs</h1>
        <p>You will learn a front-end framework from scratch, to become a Ninja Developer.</p>
        <button className="header-button">Agüesome!! </button>
      </div>
    )
  }
}

export default HeaderTextButton;