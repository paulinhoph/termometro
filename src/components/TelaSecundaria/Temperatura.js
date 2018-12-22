import React, { Component } from 'react';
import Carinhas from './carinahas';
import '../../App.css';



export default class Temperatura extends Component {
  componentDidMount(){
   const acesso = localStorage.getItem('acesso')
   if(!acesso){
    this.props.history.push("/")
     
   }
  }
  render() {
    return (
      <div id="App-Temperatura">
          <Carinhas />
      </div>
    );
  }
} 