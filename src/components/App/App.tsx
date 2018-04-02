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
    value: string;
}

export default class App extends PureComponent<IProps, IState>
{
    render()
    {
        const { message, sender } = this.props;
        return (
            <div className={styles.app}>
                <p>{`Message: ${message}`}</p>
                <p>{`From ${sender}`}</p>
            </div>
        );
    }
}
