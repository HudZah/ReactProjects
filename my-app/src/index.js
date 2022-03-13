import React from "react";
import ReactDom from "react-dom";

// function Greeting() {
//   return <h4>Hello, world!</h4>;
// }

// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello, world!");
// }

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => {
  return <h2>Hudhayfa</h2>;
};

const Message = () => {
  return <p>This is a paragraph</p>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
