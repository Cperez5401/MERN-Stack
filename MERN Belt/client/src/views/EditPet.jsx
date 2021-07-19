import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const EditPet = props => {
  const {id} = props;
  const [petName, setPetName]=useState('');
  const [petType, setPetType]=useState('');
  const [petDescription, setPetDescription]=useState('');
  const [skillOne, setSkillOne]=useState('');
  const [skillTwo, setSkillTwo]=useState('');
  const [skillThree, setSkillThree]=useState('');

  useEffect(() =>{
    axios.get('http://localhost:8000/api/pet/' + id)
      .then(res =>{
        setPetName(res.data.petName);
        setPetType(res.data.petType);
        setPetDescription(res.data.petDescription);
        setSkillOne(res.data.skillOne);
        setSkillTwo(res.data.skillTwo);
        setSkillThree(res.data.skillThree);
      })
  }, [id])

const updatePet = e =>{
  e.preventDefault();
    axios.put('http://localhost:8000/api/pet/' + id, {
      petName,
      petType,
      petDescription,
      skillOne,
      skillTwo,
      skillThree
    })
    .then(res => console.log(res));
}

  return (
    <div>
      <Link to={'/pets'} class="link">Back Home</Link>
      <h1>Pet Shelter</h1>
      <h3>Know A pet needing a home?</h3>
      <form onSubmit={updatePet}>
        <div>
          <label>Pet Name:</label>
          <input
            type="text"
            value={petName}
            onChange={(event) => {
              setPetName(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Pet Type:</label>
          <input
            type="text"
            value={petType}
            onChange={(event) => {
              setPetType(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Pet Description:</label>
          <input
            type="text"
            value={petDescription}
            onChange={(event) => {
              setPetDescription(event.target.value);
            }}
          />
        </div>
        <div>
          <h3>Skills (optional)</h3>
          <label>Skill 1:</label>
          <input
            type="text"
            value={skillOne}
            onChange={(event) => {
              setSkillOne(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Skill 2:</label>
          <input
            type="text"
            value={skillTwo}
            onChange={(event) => {
              setSkillTwo(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Skill 3:</label>
          <input
            type="text"
            value={skillThree}
            onChange={(event) => {
              setSkillThree(event.target.value);
            }}
          />
        </div>
        <button>Edit Pet</button>
      </form>
    </div>
  );
};

export default EditPet;