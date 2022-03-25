import React from "react";

const Book = (props) => {
	// onClick, onMouseOver
	const clickHandler = () => {
		alert("hello world");
	};

	const complexExample = (author) => {
		alert(`${author} is a great author!`);
	};
	return (
		<article className="book">
			<img src={props.img} alt="" />
			<h4 onClick={() => alert(props.title)}>{props.title}</h4>
			<h5>{props.author}</h5>
			<button type="button" onClick={clickHandler}>
				Example
			</button>
			<button type="button" onClick={() => complexExample(props.author)}>
				more complex
			</button>
		</article>
	);
};

export default Book;
