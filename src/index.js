import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


/*
Below is the building block of the entire application
  -ReactDOM.render takes two arguments (element, container)
  -In this instance, the App Component is the tree containing all of the branches and every part of the application
  -In this instance, the "root" is where we are planting the tree which is a div within the index.html file
*/
ReactDOM.render(<App />, document.getElementById('root'));
