import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, createStore, Store } from "redux";
import * as reduxPromiseMiddleware from "redux-promise";

import history from "../history";
import rootReducer, { RootState } from "../rootReducer";

/**
 *  Configure store for `production` environment.
 */
export default function configureStore(preloadedState: RootState): Store<RootState>
{
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            reduxPromiseMiddleware,
            routerMiddleware(history)
        )
    );
}
