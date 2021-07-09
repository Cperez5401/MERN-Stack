import React, {useState} from "react";
import axios from 'axios';

const Button = (props) => {
  const [state, setState] = useState(0);

  const clickHandler = (e) => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
        .then((response) => {
          console.log(response);
          setState({
            pokemon: response.data.results,
          });
          
        })
  }

  return (
    <div>
      <button onClick={ (e) => {
        clickHandler(e)
      }} >Fetch Pokemon</button>
      {state ? state.pokemon.map((item, index) => {
            return(<div key={index}>{item.name}</div>);
          })
        : null}
    </div>
  );
};
export default Button;
