import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import WrongDroid from './WrongDroid';
import Person from './Person';
import Vehicles from './Vehicles';
import Films from './Film';
import StarShip from './StarShip';
import Species from './Species';
import Planets from './Planet';

const Display = props => {
  const {category, id} = props;
  const[error, setError] = useState(false);
  const [data, setData] = useState({})
  useEffect(() =>{
    console.log('it works');
    axios.get(`https://swapi.dev/api/${category}/${id}`)
      .then(response =>{
        setData(response.data);
        setError(false);
      })
      .catch(err =>setError(true));
  }, [category, id])

  return (
    <div>
      {
        error ? 
        <WrongDroid />
        : category.toLowerCase() === "people" ?
        <Person person={data}/>
        :category.toLowerCase() === "vehicles" ?
        <Vehicles vehicles={data}/>
        :category.toLowerCase() === "films" ?
        <Films films={data}/>
        :category.toLowerCase() === "starships" ?
        <StarShip starShip={data}/>
        :category.toLowerCase() === "species" ?
        <Species species={data}/>
        :category.toLowerCase() === "planets" ?
        <Planets planets={data}/>
        :''
      }
    </div>
  );
};

export default Display;