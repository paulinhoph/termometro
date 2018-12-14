import React, { Component } from 'react';
import Temperatura from '../TelaSecundaria/Temperatura';
import '../../App.css';
import { truncateSync } from 'fs';


export default class Button extends Component {
  constructor(props){
    super(props);
    this.state = {
      chave: 'alohomora',
      visible: ''
    };
  }
  singUp(){
    console.log('this.state', this.state);
  }
  render() {
    return (
      <div className="App-Button">
          {this.state.visible ? <Temperatura /> : null}
          <h2 className="text-Chave">Digite a palavra mágica:</h2>
          <input onChange={ event => this.setState({chave: event.target.value}) }  className="text-Chave-Input" placeholder="mágica" type="text" />
          <button onClick={() => {this.setState({visible: !this.state.visible})} } className="App-textButton">Ok</button>
      </div>
    );
  }
}