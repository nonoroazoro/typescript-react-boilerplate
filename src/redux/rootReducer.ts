import { combineReducers, Reducer } from "redux";

import { CounterState, reducers as counter } from "./counter";

/**
 * Represents the state of the root component.
 */
export interface RootState
{
    /**
     * State of the `Counter` component.
     */
    counter: CounterState;
}

/**
 * Combine reducers.
 */
const reducer: Reducer<RootState> = combineReducers<RootState>({
    counter
});

export default reducer;
