import { routerReducer as router, RouterState } from "react-router-redux";
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

    /**
     * State of `react-router`.
     */
    readonly router: RouterState;
}

/**
 * Combine reducers.
 */
const rootReducer: Reducer<RootState> = combineReducers<RootState>({
    counter,
    router
});

export default rootReducer;
