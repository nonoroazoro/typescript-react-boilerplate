import { ActionCreatorsMapObject } from "redux";

/**
 * Represents the base props of `React` component;
 */
export interface BaseReactProps
{
    /**
     * The class name of the component.
     */
    className?: string;
}

/**
 * Represents the base props of `Redux` component;
 */
export interface BaseReduxProps<ActionCreators extends ActionCreatorsMapObject> extends BaseReactProps
{
    /**
     * The action creators of the component.
     */
    actions: ActionCreators;
}
