import React from 'react';
import { Link } from "@reach/router";

const PetList = (props) => {
  console.log(props.pet)
  return (
    <div>
      <Link to={'/pet/new'} class="link">Add a pet to the shelter</Link>
      <h1>Pet Shelter</h1>
      <h3>These pets are looking for a good home!!</h3>
      {props.pet.map((pet, index) => {
        return (
        <div>
          <table class='center'>
            <tr>
              <th>Name: </th>
              <th>Type: </th>
              <th>Actions: </th>
            </tr>
            <tr>
              <td key={index}>{pet.petName}</td>
              <td key={index}>{pet.petType}</td>
              <td><Link to={"/pet/" + pet._id }>Details</Link>{' '}<Link to={"/pet/" + pet._id +"/edit"}>Edit</Link></td>
            </tr>
          </table>
        </div>
        );
      })}
    </div>
  );
};

export default PetList;