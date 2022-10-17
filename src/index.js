import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App'
import {HashRouter} from 'react-router-dom'
import store from './store'
console.log(store.getState())


const root = document.querySelector('#root');
ReactDOM.render(<Provider store = {store}>
    <HashRouter>
        <App />
    </HashRouter>
</Provider>, root);