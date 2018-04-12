import * as cs from "classnames";
import * as React from "react";
import { SFC } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { ReduxProps } from "../../redux/actionHelper";
import { actionCreators, CounterActionCreators, CounterState } from "../../redux/counter";
import { RootState } from "../../redux/rootReducer";

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
export const Counter: SFC<CounterProps> = (props) =>
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

/**
 * The `Container` `Counter` component.
 */
export default connect(
    (state: RootState) =>
    {
        return { ...state.counter };
    },
    (dispatch: Dispatch<CounterState>) =>
    {
        return { actions: bindActionCreators(actionCreators, dispatch) };
    }
)(Counter);
