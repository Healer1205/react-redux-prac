import React, { Component } from 'react';
import './App.css';

import store from "./js/store/index";
import { addArticle } from "./js/actions/index";
window.store = store;
window.addArticle = addArticle;

function App() {
  return (
    <div>
      
    </div>
  );
}

export default App;
