import React, { Component } from 'react';

import Incrivel from '../../Assets/Images/in-lov-1.png';
import Animada from '../../Assets/Images/happy-1.png';
import Traquila from '../../Assets/Images/smile-1.png';
import Devagar from '../../Assets/Images/sad-1.png';
import Chata from '../../Assets/Images/sleeping-1.png';

import IncrivelS from '../../Assets/Images/in-lov-2.png';
import AnimadaS from '../../Assets/Images/happy-2.png';
import TraquilaS from '../../Assets/Images/smile-2.png';
import DevagarS from '../../Assets/Images/sad-2.png';
import ChataS from '../../Assets/Images/sleeping-2.png';


export default class Carinahas extends Component {
    constructor(props){
        super(props);
          this.state = {
            password: '',
            resultado: ''
          };
        }

  render() {

    return (
      <div className="carinhas">
            <section className="container-carinhas">
                <div className="container">  
                    <img id="1" onClick={''} src={Incrivel} className="img-carinhas"/> 
                    <h1 className="text-temperatura">Incrivel</h1>
                </div>
                <div className="container">
                    <img id="2" onClick={''} src={Animada} className="img-carinhas"/>
                    <h1  className="text-temperatura">Animada</h1>
                </div> 
                <div className="container">   
                    <img id="3" onClick={''} src={Traquila} className="img-carinhas"/>
                    <h1  className="text-temperatura">Traquila</h1>
                </div>    
                <div className="container">
                    <img id="4" onClick={''} src={Devagar} className="img-carinhas"/>
                    <h1  className="text-temperatura">Devagar</h1>
                </div>    
                <div className="container">
                    <img id="5" onClick={''} src={Chata} className="img-carinhas"/>
                    <h1  className="text-temperatura">Chata</h1>
                </div>    
            </section>
      </div>
    );
  }
}