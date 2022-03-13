import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// function Greeting() {
//   return <h4>Hello, world!</h4>;
// }

// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello, world!");
// }

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img src="https://m.media-amazon.com/images/I/61GW962NN3L._AC_UL640_FMwebp_QL65_.jpg" />
  );
};

const Title = () => {
  return <h4>This is a book</h4>;
};

const Author = () => {
  return <h5>Author Name</h5>;
};

ReactDom.render(<BookList />, document.getElementById("root"));
