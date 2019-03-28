import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}><App />, document.getElementById('root'));
registerServiceWorker();
