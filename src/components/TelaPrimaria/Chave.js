import React, { Component } from 'react';
import '../../App.css';
import logo from '../../Assets/Images/group.svg';


export default class Chave extends Component {
  render() {
    return (
      <div className="App-Chave">
            <img className="logo-temometro" src={logo} /> 
      </div>
    );
  }
}