import * as React from "react";
import { PureComponent } from "react";

// import * as styles from "./App.less";

export interface IProps
{
    /**
     * Name.
     */
    name: string;

    /**
     * Age.
     */
    age?: number;
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
        const { name } = this.props;
        return (
            <div className="app">
                {`Hello ${name}!`}
            </div>
        );
    }
}
