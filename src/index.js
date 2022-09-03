import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// .render() is replaced by .hydrate() coz we're SSR
// so basically it takes the prerendered HTML from `server.js` and adds React to it,
// so that it has the behavior of a React app instead of plain HTML
ReactDOM.hydrate(
  // Wrap the <App /> inside the <BrowserRouter/> coz once it's "hydrated", 
  // the <StaticRouter/> will be replaced by <BrowserRouter/>
  <React.StrictMode>
	  <BrowserRouter>
		  <App />
	  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
