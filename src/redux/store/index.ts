import { Store } from "redux";

import { RootState } from "../rootReducer";
import configureStoreDev from "./configureStore.dev";
import configureStoreProd from "./configureStore.prod";

let configureStore: (preloadedState?: RootState) => Store<RootState>;
if (process.env.NODE_ENV === "production")
{
    configureStore = configureStoreProd;
}
else
{
    configureStore = configureStoreDev;
}

export default configureStore;
