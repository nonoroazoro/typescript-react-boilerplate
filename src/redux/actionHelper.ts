import { ActionCreatorsMapObject } from "redux";
import { Action } from "redux-actions";

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

/**
 * Handle action error.
 */
export function handleActionError<State>(state: State, { error, payload }: Action<any>)
{
    if (error && payload)
    {
        console.error(payload.message);
    }
    return state;
}

/**
 * Represents the `Redux Action Types`. It's a mapped type of `EnumActionTypes`.
 */
export type ActionTypes<EnumActionTypes> = {
    [key in keyof EnumActionTypes]: string;
};

/**
 * Creates `Redux` action types from `enum` action types.
 * Here the `action`'s `type = @@prefix/actionName`, for example: `@@counter/increase`.
 *
 * @param {string} prefix The `name of reducer`, corresponding to different reducer functions, for example: `counter`.
 * @param {EnumActionTypes} enumActionTypes The `enum` action types of component.
 */
export function createActionTypes<EnumActionTypes>(prefix: string, enumActionTypes: EnumActionTypes): ActionTypes<EnumActionTypes>
{
    // Using `Proxy` to fix the value of `enum` action types.
    return new Proxy(enumActionTypes as any, {
        get(target, property)
        {
            // Using `Enum[Enum[key]]` to get the name of enum;
            return `@@${prefix}/${target[target[property]]}`;
        }
    });
}
