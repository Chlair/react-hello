import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import AppWithConstructor from './AppWithConstructor';
// import AppWithDidMount from './AppWithDidMount';
import AppWithWillMount from './AppWithWillMount';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div id="wrpper"> wrapper <AppWithWillMount/></div>, document.getElementById('root'));
registerServiceWorker();
