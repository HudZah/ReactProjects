import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
	const [isLoading, setLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [user, setUser] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					setLoading(false);
					setIsError(true);
					throw new Error(response.statusText);
				}
			})
			.then((user) => {
				const { login } = user;
				setUser(login);
				setLoading(false);
			})
			.catch((error) => setIsError(true)); // doesnt catch 404 error, only network
	}, []);

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	if (isError) {
		return <h2>Error</h2>;
	}

	return (
		<div>
			<h1>{user}</h1>
		</div>
	);
};

export default MultipleReturns;
