import React from "react";
import reactDom from "react-dom";

//CSS
import "./index.css";

import Book from './Book';
import {books} from './Books';
function BookList() {
  return (
    <section className="booklist">
      {books.map((book)=>{
        return <Book key={book.id}{...book}/>
      })}
    </section>
  );
}


reactDom.render(<BookList />, document.getElementById("root"));
