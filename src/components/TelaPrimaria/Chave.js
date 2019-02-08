import React, { Component } from 'react';
import '../../App.css';
import logo from '../../Assets/Images/group.svg';


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
            resultado: alert('Palavra Correta')
            })
            localStorage.setItem('acesso', true)
            this.props.history.push("/Temperatura")
        }else if(this.state.password.length === 0){
          this.setState({
            resultado: alert('Digite a Palavra Chave')
            
          })
          localStorage.setItem('acesso', false)
        }else{
          this.setState({
            resultado:alert('Palavra Incorreta')
          })
          localStorage.setItem('acesso', false)
        }
      }
      handleChange = (event) => {
        event.preventDefault();
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
            <a 
              onClick={this.confirm}
                className="App-textButton">Ok</a>
      </div> 
    );
  }
}
