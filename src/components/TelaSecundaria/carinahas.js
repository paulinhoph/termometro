import React, { Component } from 'react';


import Incrivel from '../../Assets/Images/in-lov-1.png';
import Animada from '../../Assets/Images/happy-1.png';
import Tranquila from '../../Assets/Images/smile-1.png';
import Devagar from '../../Assets/Images/sad-1.png';
import Chata from '../../Assets/Images/sleeping-1.png';

import IncrivelS from '../../Assets/Images/in-lov-2.png';
import AnimadaS from '../../Assets/Images/happy-2.png';
import TranquilaS from '../../Assets/Images/smile-2.png';
import DevagarS from '../../Assets/Images/sad-2.png';
import ChataS from '../../Assets/Images/sleeping-2.png';



export default class Carinahas extends Component {
    constructor(props){
        super(props);
          this.state = {
          };
        }
  render() {

    return (
      <div className="carinhas">
            <section className="container-carinhas">
                {/* CARINHAS INCRIVEL */}
                <a href="#" className="container">  
                    <img  src={Incrivel} onClick={''}   className="img-carinhas"/>
                    <h1 className="text-temperatura">Incrivel</h1>

                    <img src={IncrivelS}   className="img-carinhas imgS"/>
                    <h1 className="text-temperatura corText">Incrivel</h1>
                </a>
                
                 {/* CARINHAS ANIMADA */}
                <a href="#" className="container">
                    <img id="2" onClick={''} src={Animada} className="img-carinhas"/>
                    <h1  className="text-temperatura">Animada</h1>

                    <img id=""  src={AnimadaS} className="img-carinhas imgS"/> 
                    <h1 className="text-temperatura corText">Animada</h1>
                </a> 
                
                 {/* CARINHAS TRANQUILA */}
                <a href="#" className="container">   
                    <img id="3" onClick={''} src={Tranquila} className="img-carinhas"/>
                    <h1  className="text-temperatura">Tranquila</h1>

                    <img id=""  src={TranquilaS} className="img-carinhas imgS"/> 
                    <h1 className="text-temperatura corText">Tranquila</h1>
                </a> 
                

                {/* CARINHAS DEVAGAR */}
                <a href="#" className="container">
                    <img id="4" onClick={''} src={Devagar} className="img-carinhas"/>
                    <h1  className="text-temperatura">Devagar</h1>

                    <img id=""  src={DevagarS} className="img-carinhas imgS"/> 
                    <h1 className="text-temperatura corText">Devagar</h1>
                </a>   
               
        

                 {/* CARINHAS CHATA */}
                <a href="#" className="container">
                    <img id="5" onClick={''} src={Chata} className="img-carinhas"/>
                    <h1  className="text-temperatura">Chata</h1>

                    <img id=""  src={ChataS} className="img-carinhas imgS"/> 
                    <h1 className="text-temperatura corText">Chata</h1>
                </a>  
                <button onClick={''}  className="ButtonEnviar">Enviar</button>
            </section>

      </div>
    );
  }
}