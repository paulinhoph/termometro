import React, { Component } from 'react';
import Chave from "./components/TelaPrimaria/Chave";
import Input from './components/TelaPrimaria/input';
import Button from './components/TelaPrimaria/button';
import Temperaturas from './components/TelaSecundaria/Temperatura';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className="App">
            <Chave />
            <Input />
            <Button />
            {/* <Temperaturas /> */}
      </div>
    );
  }
}


