import React, { Component } from 'react';
import '../../App.css';


export default class Button extends Component {
  constructor(props){
    super(props);
    this.handleChange = '' ;
  }
  handleChange() {
    this.setState.handleChange = 'Entrou';
    console.log(this.props.handleChange);
  }
  render() {
    return (
      <div className="App-Button">
          <h2 className="text-Chave">Digite a palavra mágica:</h2>
          <input className="text-Chave-Input" placeholder="mágica" type="text" name="MagicWord" />
          <button onClick={ this.props.handleChange } className="App-textButton">Ok</button>
      </div>
    );
  }
}