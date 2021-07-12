import React from 'react';

const Film = props => {
  const {title, director, episode_id, opening_crawl} = props.films;
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        <li><b>Director:</b>{director}</li>
        <li><b>Episode:</b>{episode_id}</li>
        <li><p>{opening_crawl}</p></li>
      </ul>
    </div>
  );
};

export default Film;