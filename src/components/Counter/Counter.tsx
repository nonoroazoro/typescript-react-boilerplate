import * as cs from "classnames";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Action } from "redux-actions";

import actions, { CounterActionCreators } from "../../redux/counter/actions";
import { IRootState } from "../../redux/rootReducer";

import * as styles from "./Counter.less";

/**
 * Represents the props of `Counter`.
 */
export interface IProps
{
    actions: CounterActionCreators;
    className?: string;
    value: number;
}

export const mapStateToProps = (state: IRootState) =>
{
    return { value: state.counter.value };
};

export const mapDispatchToProps = (dispatch: Dispatch<any>) =>
{
    return { actions: bindActionCreators(actions, dispatch) };
};

const Counter = (props: IProps) =>
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
