import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const NewAuthors = (props) => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const NewAuthor = {
      name: name,
  };
    axios.post("http://localhost:8000/api/author", 
    NewAuthor)
    .then((res) => {
      navigate("/authors");
    })
    .catch((err) => {
      console.log(err);
    });
  };
  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewAuthors;
