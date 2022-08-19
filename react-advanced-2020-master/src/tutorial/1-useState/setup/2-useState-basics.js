import React, { useState } from "react";

const UseStateBasics = () => {
 
  let [text,setText]=useState('Random title')
  const handleClick=()=>{
    if(text==='Random title')
    setText('hello world');
    else
    setText('Random title');
  }

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={handleClick}>Change Title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
