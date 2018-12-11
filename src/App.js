import React, { Component } from 'react';
import Chave from "./components/TelaPrimaria/Chave";
import Input from './components/TelaPrimaria/input';
import Button from './components/TelaPrimaria/button';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className="App-Primario">
            <Chave />
            <Input />
            <Button />
      </div>
    );
  }
}


