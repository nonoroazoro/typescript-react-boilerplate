import { combineReducers, Reducer } from "redux";

import { ICounterState, reducers as counter } from "./counter";

/**
 * Represents the state of the root component.
 */
export interface IRootState
{
    counter: ICounterState;
}

/**
 * Combine reducers.
 */
const reducer: Reducer<IRootState> = combineReducers<IRootState>({
    counter
});

export default reducer;
