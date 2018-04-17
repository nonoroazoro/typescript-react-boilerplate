import { Action, combineActions, handleActions } from "redux-actions";

import { actionTypes } from "./actions";

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
 * Reducer of `counter`, which is composed of different reducers.
 */
export default handleActions(
    {
        [combineActions(actionTypes.INCREASE, actionTypes.INCREASE_ASYNC)](state: CounterState, action: Action<number>)
        {
            if (action.error)
            {
                return handleError(state, action as Action<Error>);
            }
            else
            {
                return {
                    ...state,
                    value: state.value + action.payload!
                };
            }
        },
        [combineActions(actionTypes.DECREASE, actionTypes.DECREASE_ASYNC)](state: CounterState, action: Action<number>)
        {
            if (action.error)
            {
                return handleError(state, action as Action<Error>);
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

function handleError(state: CounterState, { error, payload }: Action<Error>)
{
    if (error && payload)
    {
        console.error(payload.message);
        return {
            ...state,
            error: payload
        };
    }
    return state;
}
