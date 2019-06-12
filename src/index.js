import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <h1>Calculator</h1>
        <h4>By Wellington Reis</h4>
    <Calculator />
    </div>
    , document.getElementById('root'));

serviceWorker.unregister();
