import React from 'react';

const Word = props => {
  if (isNaN(props.word) === true) {
    return(
    <p >The word is: {props.word}</p>
  )
  }
}

export default Word;