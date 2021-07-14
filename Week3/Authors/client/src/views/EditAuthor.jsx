import React, {useState, useEffect} from 'react';
import axios from 'axios';


const EditAuthor = props => {
  const {id} = props;
  const [name, setName] = useState('');

  useEffect(() =>{
    axios.get('http://localhost:8000/api/product/' + id)
      .then(res =>{
        setName(res.data.name);
      })
  }, [])

  const updateAuthor = e => {
    e.preventDefault();
    axios.put('http://localhost:8000/api/author/' + id, {
      name
    })
    .then(res => console.log(res));
  }

  return (
    <div>
      <div>
      <h1>Update an Author</h1>
      <form onSubmit={updateAuthor}>
        <p>
          <label>Author name</label><br />
          <input type="text" 
          name='name' 
          value={name} 
          onChange={(e) => {setName(e.target.value)}}/>
        </p>
        <input type='submit'/>
      </form>
    </div>
    </div>
  );
};

export default EditAuthor;