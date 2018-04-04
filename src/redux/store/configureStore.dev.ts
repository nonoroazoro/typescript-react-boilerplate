/**
 *  Configure store.
 */

import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import * as reduxPromiseMiddleware from "redux-promise";

import rootReducer, { IRootState } from "../rootReducer";

export default function configureStore(preloadedState: IRootState): Store<IRootState>
{
    const store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(
            applyMiddleware(
                reduxImmutableStateInvariant(),
                reduxPromiseMiddleware
            )
        )
    );
    applyHMR(store);
    return store;
}

function applyHMR(store: Store<IRootState>)
{
    // Enable HMR for redux reducers.
    if ((module as any).hot)
    {
        (module as any).hot.accept("../rootReducer", () => store.replaceReducer(rootReducer));
    }
}
