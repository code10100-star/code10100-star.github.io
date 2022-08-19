import React from 'react'
const Book = (props) => {
    console.log(props);
    //attribute,event handler
    //onClick ,onMouseOver
    const clickHandler=(e)=>{
      console.log(e.target);
      return alert("this is business!!");
    }
    const complexEx=(author)=>{
      return console.log(author);
    }
    return (
      <article className="book" onMouseOver={()=>{
        return console.log(props.title)
      }}>
        <img src={props.img} alt="" />
        <h1 onClick={()=>console.log(props.title)}>{props.title}</h1>
        <h4>{props.author}</h4>
        <button type="button" onClick={clickHandler}>Reference Example</button>
        <button type="button" onClick={()=>complexEx(props.author)}>more complex ex</button>
      </article>
    );
  };



export default Book
