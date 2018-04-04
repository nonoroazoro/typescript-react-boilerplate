import { combineReducers, Reducer } from "redux";

import counter, { ICounterState } from "./counter/reducers";

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
