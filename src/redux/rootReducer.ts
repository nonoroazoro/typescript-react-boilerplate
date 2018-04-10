import { combineReducers, Reducer } from "redux";

import { CounterState, reducers as counter } from "./counter";

/**
 * Represents the root state.
 */
export interface RootState
{
    /**
     * State of `counter`.
     */
    counter: CounterState;
}

/**
 * Combine reducers.
 */
const rootReducer: Reducer<RootState> = combineReducers<RootState>({
    counter
});

export default rootReducer;
