import React, { Component } from 'react';
import '../../App.css';
import logo from '../../Assets/Images/group.svg';
import { Link } from 'react-router-dom';


export default class Chave extends Component {

   render() {
    return (
      <div className="App-Chave">
      
            <img className="logo-temometro" src={logo} /> 
            <h2 className="text-Chave">Digite a palavra mágica:</h2>
            <input onChange={''}  className="text-Chave-Input" placeholder="mágica" type="text" />
            <Link className="App-textButton" to="/Temperaturas" >Ok</Link>
      </div> 
    );
  }
}