import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import * as reduxPromiseMiddleware from "redux-promise";

import history from "../history";
import rootReducer, { RootState } from "../rootReducer";

/**
 *  Configure store for `development` environment.
 */
export default function configureStore(preloadedState: RootState): Store<RootState>
{
    const store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(
            applyMiddleware(
                reduxImmutableStateInvariant(),
                reduxPromiseMiddleware,
                routerMiddleware(history)
            )
        )
    );
    applyHMR(store);
    return store;
}

function applyHMR(store: Store<RootState>)
{
    // TODO: Enable HMR for redux reducers (not work).
    if ((module as any).hot)
    {
        (module as any).hot.accept("../rootReducer", () => store.replaceReducer(rootReducer));
    }
}
