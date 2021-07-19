import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PetList from '../components/PetList';

const Pets = props => {
  const [pet, setPet] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() =>{
    axios.get('http://localhost:8000/api/pet').then((res) => {
      setPet(res.data)
      setLoaded(true);
    });
  }, []);

  return (
    <div>
      {loaded && <PetList pet={pet}/> }
    </div>
  );
};

export default Pets;