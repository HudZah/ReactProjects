import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
	const [value, setValue] = useState(0);
	useEffect(() => {
		// by default runs after every re-render
		if (value >= 1) {
			document.title = `You clicked ${value} times`;
		}
	}, [value]);
	// when value changes, this function runs (dependency array)
	return (
		<>
			<h1>{value}</h1>
			<button className="btn" onClick={() => setValue(value + 1)}>
				Click me
			</button>
		</>
	);
};

export default UseEffectBasics;
