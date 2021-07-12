import React from 'react';

const Vehicles = props => {
  const {cargo_capacity, consumables, name, passengers, crew} = props.vehicles;
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <li><b>Cargo Capacity:</b>{cargo_capacity}</li>
        <li><b>Consumables:</b>{consumables}</li>
        <li><b>Passengers:</b>{passengers}</li>
        <li><b>Crew:</b>{crew}</li>
      </ul>
    </div>
  );
};

export default Vehicles;