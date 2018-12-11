import React, { Component } from 'react';

import Incrivel from '../../Assets/Images/in-love.svg';
import Animada from '../../Assets/Images/happy.svg';
import Traquila from '../../Assets/Images/smile.svg';
import Devagar from '../../Assets/Images/sad.svg';
import Chata from '../../Assets/Images/sleeping.svg';


export default class Carinahas extends Component {
  render() {
    return (
      <div className="carinahs">
            <section className="container-carinhas">
                <div className="container">  
                    <img  src={Incrivel} className="img-carinhas"/> 
                    <h1>Incrivel</h1>
                </div>
                <div className="container">
                    <img src={Animada} className="img-carinhas"/>
                    <h1>Animada</h1>
                </div> 
                <div className="container">   
                    <img src={Traquila} className="img-carinhas"/>
                    <h1>Traquila</h1>
                </div>    
                <div className="container">
                     <img src={Devagar} className="img-carinhas"/>
                    <h1>Devagar</h1>
                </div>    
                <div className="container">
                    <img src={Chata} className="img-carinhas"/>
                    <h1>Chata</h1>
                </div>    
            </section>
      </div>
    );
  }
}