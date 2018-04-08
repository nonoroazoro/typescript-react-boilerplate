import * as cs from "classnames";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { ReduxProps } from "../../redux/actionHelper";
import { actionCreators, CounterActionCreators, CounterState } from "../../redux/counter";
import { RootState } from "../../redux/rootReducer";

import * as styles from "./Counter.less";

/**
 * Represents the props of the `Counter` component.
 */
export interface CounterProps extends ReduxProps<CounterActionCreators>
{
    value: number;
}

const Counter = (props: CounterProps) =>
{
    const { className, actions: { increase, decrease, increaseAsync, decreaseAsync }, value } = props;
    return (
        <div className={cs(className, styles.container)}>
            <span>{value}</span>
            <button onClick={() => increase(1)}>+1</button>
            <button onClick={() => decrease(1)}>-1</button>
            <button onClick={() => increase(2)}>+2</button>
            <button onClick={() => decrease(3)}>-3</button>
            <button onClick={() => increaseAsync(1)}>Asynchronous Increment</button>
            <button onClick={() => decreaseAsync(1)}>Asynchronous Decrement</button>
        </div>
    );
};

export default connect(
    (state: RootState) =>
    {
        return { value: state.counter.value };
    },
    (dispatch: Dispatch<CounterState>) =>
    {
        return { actions: bindActionCreators(actionCreators, dispatch) };
    }
)(Counter);
