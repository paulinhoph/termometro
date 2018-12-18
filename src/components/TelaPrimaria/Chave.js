import React, { Component } from 'react';
import '../../App.css';
import logo from '../../Assets/Images/group.svg';
import { Link } from 'react-router-dom';


export default class Chave extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      } 

      handleChange(event){
        this.setState({ value: event.target.value });
        console.log(this.state.value)
      }
      handleClick() {
      }    
  
    render() {
      if ( this.handleClick == "alohomora") {
        console.log("Usuário autenticado");   
    } 
    return (
      <div className="App-Chave">
            <img className="logo-temometro" src={logo} /> 
            <h2 className="text-Chave">Digite a palavra mágica:</h2>
                          
            <input 
              value={this.state.value}
                onChange={this.handleChange}
                  type="chave"  
                    className="text-Chave-Input"
                       placeholder="Digite Aqui" />
            <Link 
              onClick={this.handleClick}
                className="App-textButton"
                  to="/Temperaturas">
                  Ok</Link>
      </div> 
    );
  }
}