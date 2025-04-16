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
    // TODO: Render <App user={user} /> to string
    // TODO: Inject the result into renderHtml
    // TODO: Send the final HTML response

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 SSR app running at http://localhost:${PORT}`);
});