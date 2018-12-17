import React, { Component } from 'react';
import Chave from "./components/TelaPrimaria/Chave";
import Temperaturas from './components/TelaSecundaria/Temperatura';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className="App">
            <Chave />
      </div>
    );
  }
}


