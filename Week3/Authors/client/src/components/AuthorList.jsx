import React from 'react';
import { Link } from "@reach/router";

const AuthorList = (props) => {
  return (
    <div>
      {props.author.map((author, index) => {
        return (
        <div>
          <p key={index}>
                {author.name}{' '}<Link to={"/author/" + author._id +"/edit"}>Edit</Link></p>
        </div>
        );
      })}
    </div>
  );
};

export default AuthorList;