import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AuthorList from '../components/AuthorList'

const Authors = (props) => {
  const [author, setAuthor] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() =>{
    axios.get('http://localhost:8000/api/author').then((res) => {
      setAuthor(res.data)
      setLoaded(true);
    });
  }, []);

  return (
    <div>
      {loaded && <AuthorList author={author}/> }
    </div>
  );
};

export default Authors;