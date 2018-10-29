import React, { Component } from 'react';


class CardOne extends Component {
  render() {
    return (
      <div>
        <img src={process.env.PUBLIC_URL   + '/images/icon1.png'} alt=""/>
        <h2>Declarative</h2>
        <p>lorem ipsum</p>
      </div>
    )
  }
}

class CardTwo extends Component {
  render() {
    return (
      <div>
        <img src={process.env.PUBLIC_URL   + '/images/icon2.png'} alt=""/>
        <h2>Components</h2>
        <p>lorem ipsum</p>
      </div>
    )
  }
}

class CardThree extends Component {
  render() {
    return (
      <div>
        <img src={process.env.PUBLIC_URL   + '/images/icon3.png'} alt=""/>
        <h2>Single Way</h2>
        <p>lorem ipsum</p>
      </div>
    )
  }
}

class CardFour extends Component {
  render() {
    return (
      <div>
        <img src={process.env.PUBLIC_URL   + '/images/icon4.png'} alt=""/>
        <h2>JSX</h2>
        <p>lorem ipsum</p>
      </div>
    )
  }
}

export default CardOne;
export {
  CardOne,
  CardTwo,
  CardThree,
  CardFour
};