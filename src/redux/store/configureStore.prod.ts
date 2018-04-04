/**
 *  Configure store.
 */

import { applyMiddleware, createStore, Store } from "redux";
import * as reduxPromiseMiddleware from "redux-promise";

import rootReducer, { IRootState } from "../rootReducer";

export default function configureStore(preloadedState: IRootState): Store<IRootState>
{
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(reduxPromiseMiddleware)
    );
}
