import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.hydrate(<App flights={Window.flights}/>, document.getElementById('root'));