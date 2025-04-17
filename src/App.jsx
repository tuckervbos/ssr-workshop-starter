import React from "react";

const App = ({ user }) => {
	return (
		<div>
			<h1>Welcome, {user.name}</h1>
			<p>This is server-side rendered!</p>
		</div>
	);
};

export default App;
