// @ts-ignore
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { actionCreators, CounterState } from "../../redux/counter";
import { RootState } from "../../redux/rootReducer";

// @ts-ignore
import Counter, { CounterProps } from "../../components/Counter";

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
