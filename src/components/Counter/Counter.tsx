import * as cs from "classnames";
import * as React from "react";

import { BaseReactProps } from "../../types";

import * as styles from "./Counter.less";

export interface CounterProps extends BaseReactProps
{
    value: number;
}

export interface CounterState
{
    value: number;
}

export class Counter extends React.PureComponent<CounterProps, CounterState>
{
    static defaultProps: CounterProps = {
        value: 0
    };

    state = {
        value: this.props.value
    };

    render()
    {
        const { className } = this.props;
        const { value } = this.state;
        return (
            <div className={cs(className, styles.container)}>
                <span className={styles.value}>{value}</span>
                <button
                    className={styles.btn}
                    onClick={() => this.setState({ value: this.state.value + 1 })}
                >
                    +1
                </button>
                <button
                    className={styles.btn}
                    onClick={() => this.setState({ value: this.state.value - 1 })}
                >
                    -1
                </button>
                <button
                    className={styles.btn}
                    onClick={() => this.setState({ value: this.state.value + 2 })}
                >
                    +2
                </button>
                <button
                    className={styles.btn}
                    onClick={() => this.setState({ value: this.state.value - 3 })}
                >
                    -3
                </button>
            </div>
        );
    }
}
