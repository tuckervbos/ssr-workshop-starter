// TODO: Implement hydration

import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";

hydrateRoot(
	document.getElementById("root"),
	<App user={window.__INITIAL_DATA__} />
);
