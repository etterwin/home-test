import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const lol = document.getElementById('root');

ReactDOM.render(<App />, lol);
registerServiceWorker();
