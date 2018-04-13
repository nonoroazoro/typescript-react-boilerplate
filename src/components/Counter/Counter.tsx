import * as cs from "classnames";
import * as React from "react";

import { ReduxProps } from "../../redux/actionHelper";
import { CounterActionCreators, CounterState } from "../../redux/counter";

import * as styles from "./Counter.less";

/**
 * Represents the props of the `Counter` component.
 */
export interface CounterProps extends ReduxProps<CounterActionCreators>, CounterState
{
}

/**
 * The `Presentational` `Counter` component.
 */
export default (props: CounterProps) =>
{
    const { className, actions: { increase, decrease, increaseAsync, decreaseAsync }, value } = props;
    return (
        <div className={cs(className, styles.container)}>
            <span className={styles.value}>{value}</span>
            <button className={styles.btn} onClick={() => increase(1)}>+1</button>
            <button className={styles.btn} onClick={() => decrease(1)}>-1</button>
            <button className={styles.btn} onClick={() => increase(2)}>+2</button>
            <button className={styles.btn} onClick={() => decrease(3)}>-3</button>
            <button className={styles.btn} onClick={() => increaseAsync(1)}>Asynchronous Increment</button>
            <button className={styles.btn} onClick={() => decreaseAsync(1)}>Asynchronous Decrement</button>
        </div>
    );
};
