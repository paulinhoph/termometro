import React, { Component } from 'react';
import Incrivel from '../../Assets/Images/in-lov-1.png';
import Animada from '../../Assets/Images/happy-1.png';
import Traquila from '../../Assets/Images/smile-1.png';
import Devagar from '../../Assets/Images/sad-1.png';
import Chata from '../../Assets/Images/sleeping-01.png';


export default class Carinahas extends Component {
  render() {
    return (
      <div className="carinahs">
            <section className="container-carinhas">
                <div className="container">  
                    <img  src={Incrivel} className="img-carinhas"/> 
                    <h1 className="text-temperatura">Incrivel</h1>
                </div>
                <div className="container">
                    <img src={Animada} className="img-carinhas"/>
                    <h1  className="text-temperatura">Animada</h1>
                </div> 
                <div className="container">   
                    <img src={Traquila} className="img-carinhas"/>
                    <h1  className="text-temperatura">Traquila</h1>
                </div>    
                <div className="container">
                     <img src={Devagar} className="img-carinhas"/>
                    <h1  className="text-temperatura">Devagar</h1>
                </div>    
                <div className="container">
                    <img src={Chata} className="img-carinhas"/>
                    <h1  className="text-temperatura">Chata</h1>
                </div>    
            </section>
      </div>
    );
  }
}