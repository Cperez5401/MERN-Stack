import React from 'react';

const WordColor = props => {
  if (isNaN(props.word) === true) {
    return(
  <div style={{backgroundColor:props.txtBack, height:'50px', margin:'10px'}}>
    <p style={{color:props.txtColor}}>The word is: {props.word}</p>
  </div>
  )
  }
}

export default WordColor;