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
              
                <div className="container" onClick={''} >  
                    <img  src={Incrivel}   className="img-carinhas"/>
                    <h1 className="text-temperatura">Incrivel</h1>
                </div>

                <div className="container">
                    <img src={IncrivelS}   className="img-carinhas imgS"/>
                    <h1 className="text-temperatura corText">Incrivel</h1>
                </div>

              
                 <div className="container" onClick={''} >  
                    <img id="2" src={Animada} className="img-carinhas"/>
                    <h1  className="text-temperatura">Animada</h1>
                </div>

                <div className="container">
                    <img id=""  src={AnimadaS} className="img-carinhas imgS"/> 
                    <h1 className="text-temperatura corText">Animada</h1>
                </div>
                
                
                 <div className="container" onClick={''} >   
                    <img id="3"  src={Tranquila} className="img-carinhas"/>
                    <h1  className="text-temperatura">Tranquila</h1>
                </div>

                <div className="container">
                    <img id=""  src={TranquilaS} className="img-carinhas imgS"/> 
                    <h1 className="text-temperatura corText">Tranquila</h1>
                </div>
                

                <div className="container" onClick={''} >  
                    <img id="4" src={Devagar} className="img-carinhas"/>
                    <h1  className="text-temperatura">Devagar</h1>
                </div>

                <div className="container">
                    <img id=""  src={DevagarS} className="img-carinhas imgS"/> 
                    <h1 className="text-temperatura corText">Devagar</h1>
                </div>
               
        

               
                 <div className="container" onClick={''} >  
                    <img id="5"  src={Chata} className="img-carinhas"/>
                    <h1  className="text-temperatura">Chata</h1>
                </div>

                <div className="container">
                    <img id=""  src={ChataS} className="img-carinhas imgS"/> 
                    <h1 className="text-temperatura corText">Chata</h1>
                </div>  


                <button onClick={''}  className="ButtonEnviar">Enviar</button>
            </section>

      </div>
    );
  }
}