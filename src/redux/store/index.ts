import { Store } from "redux";

import { IRootState } from "../rootReducer";
import configureStoreDev from "./configureStore.dev";
import configureStoreProd from "./configureStore.prod";

let configureStore: (preloadedState: IRootState) => Store<IRootState>;
if (process.env.NODE_ENV === "production")
{
    configureStore = configureStoreProd;
}
else
{
    configureStore = configureStoreDev;
}

export default configureStore;
