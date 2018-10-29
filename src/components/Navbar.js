import React, { Component } from 'react';

class Navbar extends Component{
  render(){
    return (
      <div className="navbar"> 
        <img className="logo" alt='' src={process.env.PUBLIC_URL + '/images/ironhack-logo.svg'} />
        <img className="menu-top"  alt='' src={process.env.PUBLIC_URL + '/images/menu-top.svg'} />
        <h1>Algo</h1>
      </div>
    )
  }
}

export default Navbar;
