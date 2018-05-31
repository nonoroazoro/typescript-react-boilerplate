import { ActionTypes } from "../types";

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
