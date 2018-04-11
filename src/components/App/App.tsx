import * as React from "react";
import { PureComponent } from "react";
import { hot } from "react-hot-loader";

import Counter from "../Counter";

import * as styles from "./App.less";

// Add hook to auto re-render the root component, see https://github.com/gaearon/react-hot-loader#appcontainer-vs-hot
@hot(module)
export default class App extends PureComponent
{
    render()
    {
        return (
            <div className={styles.app}>
                <Counter />
            </div>
        );
    }
}
