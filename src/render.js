import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';

export let renderEntireTree = (state, addUser) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addUser={addUser}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
