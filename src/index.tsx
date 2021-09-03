import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import store from "./redux/Store-redux";

export let renderEntireTree = (state:any) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
export let baseRender = () =>{
    renderEntireTree(store.getState())
}

baseRender();

store.subscribe(()=>{
    renderEntireTree(store.getState())
})