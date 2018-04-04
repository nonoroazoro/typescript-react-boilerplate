import * as React from "react";
import { PureComponent } from "react";

import Counter from "../Counter";

import * as styles from "./App.less";

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
