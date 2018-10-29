import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Headertextbutton from './components/Headertextbutton';
import CardOne from './components/Carditem';
import {CardTwo} from './components/Carditem';
import {CardThree} from './components/Carditem';
import {CardFour} from './components/Carditem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="header"> 
          < Navbar/>
          <Headertextbutton/>
        </section>
        <section className="columns"> 
          <CardOne/>
          <CardTwo/>
          <CardThree/>
          <CardFour/>
        </section>
      </div>
    );
  }
}

export default App;
