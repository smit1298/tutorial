import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// set up vars
const books = [{
  img: "https://m.media-amazon.com/images/I/811kCP93H-L._AC_UL480_FMwebp_QL65_.jpg",
  title: "Peril",
  author: "Bob Woodward, Robert Costa, et al."
},
{
  img: "https://m.media-amazon.com/images/I/91a-dL30+TS._AC_UL480_FMwebp_QL65_.jpg",
  title: "By Water Beneath the Walls: The Rise of the Navy SEALs",
  author: "Benjamin H. Milligan, Kaleo Griffith, et al."
}]
const names = ['john', '']
function BookList() {
  return (
    <section className="booklist">
      {books}
    </section>
  );
}
const Book = (props) => {
    const { img, title, author} = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author} </h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
