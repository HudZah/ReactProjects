import React from "react";

const ErrorExample = () => {
	let title = "random title";

	const handleClick = () => {
		title = "new title";
		alert(title);
	};

	return (
		<React.Fragment>
			<h1>{title}</h1>
			<button type="button" className="btn" onClick={handleClick}>
				Click me
			</button>
		</React.Fragment>
	);
};

export default ErrorExample;
