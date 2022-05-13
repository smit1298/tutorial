import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {books} from "./books"

// set up vars


function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}



ReactDOM.render(<BookList />, document.getElementById("root"));
