import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
	const [question, setQuestion] = useState();

	return (
		<main>
			<div className="container">
				<h3>questions and answers</h3>
				<section className="info">
					{data.map((question) => {
						return (
							<SingleQuestion key={question.id} {...question} />
						);
					})}
				</section>
			</div>
		</main>
	);
}

export default App;
