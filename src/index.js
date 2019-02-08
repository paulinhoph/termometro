import React from 'react';
import ReactDOM from 'react-dom';
import Temperaturas from './components/TelaSecundaria/Temperatura';
import Chave from './components/TelaPrimaria/Chave';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
        <BrowserRouter> 
            <Switch>
                <Route path="/" exact={true} component={Chave} />
                <Route   Route path="/Temperatura"  component={Temperaturas} />
            </Switch>
        </BrowserRouter>
        , document.getElementById('root'));
        
// if(module.hot){
//     module.hot.accept();

// }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
