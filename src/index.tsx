import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import App from "./components/App";

// import "./index.less";

function render()
{
    ReactDOM.render(
        <AppContainer>
            <App name="Jack" />
        </AppContainer>,
        document.getElementById("root")
    );
}

render();

// HMR to preserve React's state.
if ((module as any).hot)
{
    (module as any).hot.accept("./components/App", render);
}
