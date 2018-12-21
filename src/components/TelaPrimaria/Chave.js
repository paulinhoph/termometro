import React, { Component } from 'react';
import '../../App.css';
import logo from '../../Assets/Images/group.svg';
import { Link } from 'react-router-dom';


export const Temperatura = () =>  true;


export default class Chave extends Component {
   constructor(props){
     super(props);
       this.state = {
         password:'',
         resultado: ''
       };
      }
      confirm = () => {
        if(this.state.password ==='alohomora'){
          this.setState({
            resultado: console.log('Palavra Correta')
            })
        }else if(this.state.password.length === 0){
          this.setState({
            resultado: alert('Digite a Palavra Chave')
          })
        }else{
          this.setState({
            resultado:alert('Palavra Incorreta')
          })
        }
      }
      handleChange = (event) => {
        this.setState({
          password: event.target.value
        })
      }
     
     

  render() {
    return (
      <div className="App-Chave">
            <img className="logo-temometro" src={logo} /> 
            <h2 className="text-Chave">Digite a palavra mágica:</h2>           
                <input  
                      onChange={this.handleChange}
                        className="text-Chave-Input"
                          placeholder="Digite Aqui" />
            <Link 
              to="/Temperatura"
              onClick={this.confirm}
                className="App-textButton">Ok</Link>
      </div> 
    );
  }
}
