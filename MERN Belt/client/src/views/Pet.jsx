import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from "@reach/router";

const Pet = props => {
  const [pet, setPet]=useState({})

  useEffect(() =>{
    axios.get('http://localhost:8000/api/pet/' + props.id)
      .then(res => setPet(res.data))
  }, [])

  const deletePet = (productId) => {
    axios.delete("http://localhost:8000/api/pet/" + productId)
      .then(res => {
        navigate("/pets");
      });
  };

  return (
    <div>
      <Link to={'/pets'} class="link">Back Home</Link>
      <h1>Pet Shelter</h1>
      <h3>Details about: {pet.petName}</h3>
      <button
        onClick={(e) => {
          deletePet(pet._id);
        }}class='delete'
      >
        Adopt {pet.petName}
      </button>
      <hr />
      <p>Pet type: {pet.petType}</p>
      <p>Description: {pet.petDescription}</p>
      <p>Skills: {pet.skillOne}{', '}{pet.skillTwo}{', '}{pet.skillThree}</p>
    </div>
  );
};

export default Pet;