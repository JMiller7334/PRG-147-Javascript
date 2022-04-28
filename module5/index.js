import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ul>
    <li>Jan</li>
    <li>Feb</li>
    <li>Mar</li>
    <li>Apr</li>
    <li>May</li>
    <li>Jun</li>
    <li>Jul</li>
    <li>Aug</li>
    <li>Sep</li>
    <li>Oct</li>
    <li>Nov</li>
    <li>Dec</li>
  </ul>,

  document.getElementById("root")

 // <React.StrictMode>
    //<App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
