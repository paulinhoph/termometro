import React, { Component } from 'react';
import '../../App.css';


export default class Input extends Component {
  render() {
    return (
      <div className="App-Input">
            <h2 className="text-Chave">Digite a palavra mágica:</h2>
            <input className="text-Chave-Input" placeholder="mágica" type="text" name="MagicWord" />
      </div>
    );
  }
}