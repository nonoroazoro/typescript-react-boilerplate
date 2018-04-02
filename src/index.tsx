import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App";

import "./index.less";

ReactDOM.render(
    <App message="Hello World" sender="Jack" />,
    document.getElementById("root")
);
