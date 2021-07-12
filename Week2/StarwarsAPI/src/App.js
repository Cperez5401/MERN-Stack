import React, {useState} from 'react';
import './App.css';
import Home from './components/Home';
import {Router, navigate} from '@reach/router';
import Display from './components/Display'


function App() {
  const [searchTerms, setSearchTerms] = useState({
    category: 'people',
    id: ''
  });

  const changeHandler = e => {
    setSearchTerms({
      ...searchTerms,
      [e.target.name]: e.target.value
    })
  };

  const submitHandler = e => {
    const {category, id} = searchTerms;
    e.preventDefault();
    navigate(`/${category}/${id}`);
  };

  return (
    <div className="App">
        <Home searchTerms = {searchTerms} changeHandler={changeHandler} submitHandler={submitHandler}/>
      <Router>
        <Display path = ":category/:id"/>
      </Router>
    </div>
  );
}

export default App;
