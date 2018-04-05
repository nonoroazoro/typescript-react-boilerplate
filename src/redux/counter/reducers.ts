import { Action, combineActions, handleActions } from "redux-actions";

import { handleActionError } from "../actionHelpers";
import actions from "./actions";

/**
 * Initial state of the `counter` component.
 */
export const INITIAL_STATE: ICounterState = { value: 0 };

/**
 * Represents the state of the `counter` component.
 */
export interface ICounterState
{
    readonly value: number;
}

/**
 * Reducers of `counter` component.
 */
export default handleActions(
    {
        [combineActions(actions.increase, actions.increaseAsync)]: (state: ICounterState, action: Action<number>) =>
        {
            if (action.error)
            {
                return handleActionError(state, action);
            }
            else
            {
                return {
                    ...state,
                    value: state.value + (action.payload || 1)
                };
            }
        },
        [combineActions(actions.decrease, actions.decreaseAsync)]: (state: ICounterState, action: Action<number>) =>
        {
            if (action.error)
            {
                return handleActionError(state, action);
            }
            else
            {
                return {
                    ...state,
                    value: state.value - (action.payload || 1)
                };
            }
        }
    },
    INITIAL_STATE
);
