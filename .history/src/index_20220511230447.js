import React from "react";
import ReactDOM from "react-dom";

function BookList() {
  return (
    <section>
      <Book />

    </section>
  );
}

const Book = () => {
  return <article><Image /></article>;
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/811kCP93H-L._AC_UL480_FMwebp_QL65_.jpg"
    alt=""
    srcset=""
  />
);

const Author = () =
ReactDOM.render(<BookList />, document.getElementById("root"));
