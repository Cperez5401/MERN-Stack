import React from 'react';

const Home = props =>{
  const {searchTerms, changeHandler, submitHandler} = props;
  return( 

  <form onSubmit={submitHandler}>
    <div>
      <label>Search for:</label>
      <select name = "category" onChange={changeHandler} value = { searchTerms.category } >
        <option value="planets">Planets</option>
        <option value="starships">Star Ships</option>
        <option value="vehicles">Vehicles</option>
        <option value="people">People</option>
        <option value="films">Films</option>
        <option value="species">Species</option>
      </select>
    </div>
    <div>
      <label>ID:</label>
      <input type = "number" name = "id" onChange={changeHandler} value = { searchTerms.id }/>
      <input type = "submit" value = "Search"/>
    </div>
  </form>
  )
}

export default Home;