import React from 'react';

const Person = props => {
  const { name, height, mass, hair_color, skin_color } = props.person;
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <li><b>Height:</b> {height}</li>
        <li><b>Mass:</b> {mass}</li>
        <li><b>Hair Color:</b> {hair_color}</li>
        <li><b>Skin Color:</b> {skin_color}</li>
      </ul>
    </div>
  );
};

export default Person