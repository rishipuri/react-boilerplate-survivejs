// Note that we have not installed react and react dom.
// npm-install-webpack-plugin installs it for us directly and saves the time
// or you can directly npm i react react-dom --save

import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));