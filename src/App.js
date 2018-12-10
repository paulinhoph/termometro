import React, { Component } from 'react';
import Temperatura from "./components/TelaSecundaria/App";
import './App.css';


export default class Primaria extends Component {
  render() {
    return (
      <div className="App-Primario">
            <Temperatura />
      </div>
    );
  }
}


