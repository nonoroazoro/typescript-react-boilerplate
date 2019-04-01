import { createBrowserHistory } from "history";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router-dom";

import { App } from "./App";

const history = createBrowserHistory();

ReactDOM.render(
    (
        <Router history={history}>
            <App />
        </Router>
    ),
    document.getElementById("root")
);
