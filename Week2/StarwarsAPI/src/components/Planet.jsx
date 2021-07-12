import React from 'react';

const Planet = props => {
  const {climate, diameter, name, population, terrain} =props.planets;
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <li><b>Population:</b>{population}</li>
        <li><b>Diameter:</b>{diameter}</li>
        <li><b>Climate:</b>{climate}</li>
        <li><b>Terrain:</b>{terrain}</li>
      </ul>
    </div>
  );
};

export default Planet;