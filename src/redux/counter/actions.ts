// @ts-ignore, see https://github.com/Microsoft/TypeScript/issues/5711#issuecomment-229497938
import { Action, createAction } from "redux-actions";

import { Test } from "../../api";
import { createActionTypes } from "../actionHelper";

/**
 * Enum action types of `counter`.
 */
enum EnumTypes
{
    decrease,
    decreaseAsync,
    increase,
    increaseAsync
}

/**
 * Action types of `counter`.
 */
const actionTypes = createActionTypes("counter", EnumTypes);

/**
 * Action creators of `counter`.
 */
const actionCreators = {
    /**
     * Synchronous increase.
     */
    increase: createAction<number>(actionTypes.increase),

    /**
     * Synchronous decrease.
     */
    decrease: createAction<number>(actionTypes.decrease),

    /**
     * Asynchronous increase.
     */
    increaseAsync: createAction(actionTypes.increaseAsync, (amount: number) => Test.doSomeAsyncJob(amount)),

    /**
     * Asynchronous decrease.
     */
    decreaseAsync: createAction(actionTypes.decreaseAsync, (amount: number) => Test.doSomeAsyncJob(amount))
};

/**
 * Represents the type of action creators.
 */
export type CounterActionCreators = typeof actionCreators;

export default actionCreators;
