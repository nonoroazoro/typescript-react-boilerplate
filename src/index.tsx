import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import App from "./components/App";

import "./index.less";

function render()
{
    // Add react-hot-loader to preserve state (to support React v16.3.0).
    // See https://github.com/gaearon/react-hot-loader/issues/923
    require("react-hot-loader").default.register(App, "App", module.id);

    ReactDOM.render(
        <AppContainer>
            <App message="Hello World" sender="Jack" />
        </AppContainer>,
        document.getElementById("root")
    );
}

render();

// Add hook to auto re-render the root component.
// See https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md
declare const module: any;
if (module.hot)
{
    module.hot.accept("./components/App", render);
}
