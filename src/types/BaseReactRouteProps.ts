import { RouteComponentProps } from "react-router-dom";

import { BaseReactProps } from "./BaseReactProps";

/**
 * Represents the base props of a `React` route component;
 */
export interface BaseReactRouteProps extends BaseReactProps, RouteComponentProps
{
}
