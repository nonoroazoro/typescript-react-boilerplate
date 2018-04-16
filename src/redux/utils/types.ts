import { ActionCreatorsMapObject } from "redux";

/**
 * Represents the base props of `Redux`;
 */
export interface ReduxProps<ActionCreators extends ActionCreatorsMapObject>
{
    /**
     * The action creators of the component.
     */
    actions: ActionCreators;

    /**
     * The class name of the component.
     */
    className?: string;
}
