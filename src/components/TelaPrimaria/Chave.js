import React, { Component } from 'react';
import '../../App.css';
import logo from '../../Assets/Images/group.svg';
import { Link } from 'react-router-dom';


export default class Chave extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
    }
  
  
  
    render() {

    return (
      <div className="App-Chave">
            <img className="logo-temometro" src={logo} /> 
            <h2 className="text-Chave">Digite a palavra mágica:</h2>
                          
            <input 
                  type="chave"  
                    className="text-Chave-Input"
                       placeholder="mágica" />
            <Link className="App-textButton" to="/Temperaturas"  >Ok</Link>
      </div> 
    );
  }
}