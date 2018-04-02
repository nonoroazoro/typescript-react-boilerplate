import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import App from "./components/App";

import "./index.less";

function render()
{
    ReactDOM.render(
        <AppContainer>
            <App message="Hello World" sender="Jack" />
        </AppContainer>,
        document.getElementById("root")
    );
}

render();

// HMR to preserve React's state, see https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md
declare const module: any;
if (module.hot)
{
    module.hot.accept("./components/App", render);
}
