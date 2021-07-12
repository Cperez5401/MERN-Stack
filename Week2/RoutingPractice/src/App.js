import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import Word from './components/WordColor';
import Number from './components/Number';
import WordColor from './components/WordColor';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/home'/>
        <WordColor path='/:word/:txtColor/:txtBack'/>
        <Word path='/:word/:'/>
        <Number path='/:number'/>
      </Router>
    </div>
  );
}

export default App;
