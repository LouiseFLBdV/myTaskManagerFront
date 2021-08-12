import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/State'
import {addUser} from './redux/State'
import {renderEntireTree} from "./render";

// ReactDOM.render(
//   <React.StrictMode>
//     <App state={State} addUser={addUser}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

renderEntireTree(state, addUser)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
