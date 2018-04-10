import { combineReducers, Reducer } from "redux";

import { CounterState, reducer as counter } from "./counter";

/**
 * Represents the root state.
 */
export interface RootState
{
    /**
     * State of `counter`.
     */
    readonly counter: CounterState;
}

/**
 * Combine reducers.
 */
const rootReducer: Reducer<RootState> = combineReducers<RootState>({
    counter
});

export default rootReducer;
