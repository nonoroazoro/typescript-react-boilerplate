import * as React from "react";
import { Props, PureComponent } from "react";

import styles from "./App.less";

export interface IProps extends Props<App>
{
    /**
     * Message.
     */
    message: string;

    /**
     * Sender.
     */
    sender: string;
}

export interface IState
{
    /**
     * Value.
     */
    value: number;
}

class App extends PureComponent<IProps, IState>
{
    state = {
        value: 0
    };

    handleClick = () =>
    {
        this.setState((state) =>
        {
            return { value: state.value + 1 };
        });
    }

    render()
    {
        const { message, sender } = this.props;
        const { value } = this.state;
        return (
            <div className={styles.app}>
                <p>{`Message: ${message}`}</p>
                <p>{`From: ${sender}`}</p>
                <p>{`Clicked: ${value}`}</p>
                <button type="button" onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }
}

// Add react-hot-loader to preserve state (to support React v16.3.0).
// See https://github.com/gaearon/react-hot-loader/issues/923
require("react-hot-loader").default.register(App, "App", module.id);

export default App;
