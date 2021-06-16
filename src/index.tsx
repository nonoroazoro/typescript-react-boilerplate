import { createBrowserHistory } from "history";
import { render } from "react-dom";
import { Router } from "react-router-dom";

import { App } from "./App";

const history = createBrowserHistory();

render(
    (
        <Router history={history}>
            <App />
        </Router>
    ),
    document.getElementById("root")
);
