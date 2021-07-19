import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import { Link } from "@reach/router";

const NewPet = (props) => {
  const [petName, setPetName]=useState('');
  const [petType, setPetType]=useState('');
  const [petDescription, setPetDescription]=useState('');
  const [skillOne, setSkillOne]=useState('');
  const [skillTwo, setSkillTwo]=useState('');
  const [skillThree, setSkillThree]=useState('');

  const [errors, setErrors]=useState([]);

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const NewPet = {
      petName: petName,
      petType: petType,
      petDescription: petDescription,
      skillOne: skillOne,
      skillTwo: skillTwo,
      skillThree: skillThree
  };
    axios.post("http://localhost:8000/api/pet", 
    NewPet)
    .then((res) => {
      navigate("/pets");
    })
    .catch((err) => {
      const errorResponse = err.response.data.errors;
      const errorArr = [];
      for (const key of Object.keys(errorResponse)){
        errorArr.push(errorResponse[key].message)
      }
      setErrors(errorArr);
    });
  };

  return (
    <div>
      <Link to={'/pets'} class="link">Back Home</Link>
      <h1>Pet Shelter</h1>
      <h3>Know A pet needing a home?</h3>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}>
          {errors.map((err, index)=><p key={index}>{err}</p>)}
        <div>
          <label>Pet Name:</label>
          <input
            type="text"
            onChange={(event) => {
              setPetName(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Pet Type:</label>
          <input
            type="text"
            onChange={(event) => {
              setPetType(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Pet Description:</label>
          <input
            type="text"
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
            onChange={(event) => {
              setSkillOne(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Skill 2:</label>
          <input
            type="text"
            onChange={(event) => {
              setSkillTwo(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Skill 3:</label>
          <input
            type="text"
            onChange={(event) => {
              setSkillThree(event.target.value);
            }}
          />
        </div>
        <button>Add Pet</button>
      </form>
    </div>
  );
};

export default NewPet;