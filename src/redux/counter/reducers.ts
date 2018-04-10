import { Action, combineActions, handleActions } from "redux-actions";

import { handleActionError } from "../actionHelper";
import actions from "./actions";

/**
 * Initial state of `counter`.
 */
export const INITIAL_STATE: CounterState = { value: 0 };

/**
 * Represents the state of `counter`.
 */
export interface CounterState
{
    readonly value: number;
}

/**
 * Reducers of `counter`.
 */
export default handleActions(
    {
        [combineActions(actions.increase, actions.increaseAsync)]: (state: CounterState, action: Action<number>) =>
        {
            if (action.error)
            {
                return handleActionError(state, action);
            }
            else
            {
                return {
                    ...state,
                    value: state.value + action.payload!
                };
            }
        },
        [combineActions(actions.decrease, actions.decreaseAsync)]: (state: CounterState, action: Action<number>) =>
        {
            if (action.error)
            {
                return handleActionError(state, action);
            }
            else
            {
                return {
                    ...state,
                    value: state.value - action.payload!
                };
            }
        }
    },
    INITIAL_STATE
);
