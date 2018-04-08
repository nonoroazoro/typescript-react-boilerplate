import { applyMiddleware, createStore, Store } from "redux";
import * as reduxPromiseMiddleware from "redux-promise";

import rootReducer, { RootState } from "../rootReducer";

/**
 *  Configure store for `production` environment.
 */
export default function configureStore(preloadedState: RootState): Store<RootState>
{
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(reduxPromiseMiddleware)
    );
}
