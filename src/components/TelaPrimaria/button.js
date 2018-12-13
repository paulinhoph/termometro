import React, { Component } from 'react';
import '../../App.css';


export default class Button extends Component {
  constructor(props){
    super(props);
    this.handleClick = "Entrou";
  }
  handleClick() {
    console.log(this.props.handleClick);
  }
  render() {
    return (
      <div className="App-Button">
        <button onClick={this.props.handleClick} className="App-textButton">Ok</button>
      </div>
    );
  }
}