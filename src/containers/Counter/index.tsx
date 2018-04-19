// @ts-ignore
import * as React from "react";
import { connect } from "react-redux";
import { Action, bindActionCreators, Dispatch } from "redux";

import Counter, { CounterProps } from "../../components/Counter";
import { actionCreators } from "../../redux/counter";
import { RootState } from "../../redux/rootReducer";

/**
 * The `Container` `Counter` component.
 */
export default connect(
    (state: RootState): Partial<CounterProps> =>
    {
        return { ...state.counter };
    },
    (dispatch: Dispatch<Action>): Partial<CounterProps> =>
    {
        return { actions: bindActionCreators(actionCreators, dispatch) };
    }
)(Counter);
