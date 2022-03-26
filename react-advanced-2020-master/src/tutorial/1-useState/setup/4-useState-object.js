import React, { useState } from "react";

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: "Peter",
		age: 20,
		message: "Hello",
	});

	const changeMessage = () => {
		setPerson({
			...person,
			message: "Bye",
		});
	};

	return (
		<>
			<h3>{person.name}</h3>
			<h3>{person.age}</h3>
			<h3>{person.message}</h3>
			<button className="btn" onClick={changeMessage}>
				Click
			</button>
		</>
	);
};

export default UseStateObject;
