import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {TweetsComponent} from "./tweets";
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//changed docid to tweetme-2

const appEl = document.getElementById("root");
if (appEl){
    ReactDOM.render(<App/>,appEl);
}

const tweetsEl = document.getElementById("tweetme-2");
if (tweetsEl){
    ReactDOM.render(<TweetsComponent/>,tweetsEl);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
