import React from 'react';

const StarShip = props => {
  const {name, length, crew, cargo_capacity, hyperdrive_rating} = props.starShip;
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <li><b>Length:</b> {length}</li>
        <li><b>Crew size:</b>{crew}</li>
        <li><b>Cargo capacity:</b>{cargo_capacity}</li>
        <li><b>Hyperdrive Rating:</b>{hyperdrive_rating}</li>
      </ul>
    </div>
  );
};

export default StarShip;