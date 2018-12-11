import React, { Component } from 'react';
import Carinhas from './carinahas';
import Button from './button';
import '../../App.css';


export default class Temperatura extends Component {
  render() {
    return (
      <div id="App-Temperatura">
          <Carinhas />
          <Button />
      </div>
    );
  }
}