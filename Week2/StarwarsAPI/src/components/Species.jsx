import React from 'react';

const Species = props => {
  const {average_height, average_lifespan, classification, name, hair_colors} = props.species;
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <li><b>Average Height:</b>{average_height}</li>
        <li><b>Average Lifespan:</b>{average_lifespan}</li>
        <li><b>Classification:</b>{classification}</li>
        <li><b>Hair Colors:</b>{hair_colors}</li>
      </ul>
    </div>
  );
};

export default Species;