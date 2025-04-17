require("@babel/register")({
	presets: ["@babel/preset-env", "@babel/preset-react"],
});

const path = require("path");
const express = require("express");
const React = require("react");
const { renderToString } = require("react-dom/server");
const App = require("./App").default;
const { renderHtml } = require("./views/template");
const { fetchUser } = require("../shared/mockApi");

const app = express();

app.use(express.static(path.resolve(__dirname, "../public")));

app.get("/", (req, res) => {
	// TODO: Fetch user
	const user = fetchUser();
	// TODO: Render <App user={user} /> to string
	const reactHtml = renderToString(<App user={user} />);
	// TODO: Inject the result into renderHtml
	const html = renderHtml(reactHtml, user);
	// TODO: Send the final HTML response
	res.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`🚀 SSR app running at http://localhost:${PORT}`);
});
