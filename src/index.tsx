import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {Store} from "./redux/Store";

export let renderEntireTree = (store:Store) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

let store:Store = new Store();
store.rerender = renderEntireTree;