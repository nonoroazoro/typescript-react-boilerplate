// @ts-ignore, see https://github.com/Microsoft/TypeScript/issues/5711#issuecomment-229497938
import { Action, createAction } from "redux-actions";

import { Test } from "../../api";
import { createActionTypes } from "../utils/actions";

/**
 * Enum action types of `counter`.
 */
enum EnumTypes
{
    DECREASE,
    DECREASE_ASYNC,
    INCREASE,
    INCREASE_ASYNC
}

/**
 * Action types of `counter`.
 */
export const actionTypes = createActionTypes("counter", EnumTypes);

/**
 * Action creators of `counter`.
 */
const actionCreators = {
    /**
     * Synchronous increase.
     */
    increase: createAction<number>(actionTypes.INCREASE),

    /**
     * Synchronous decrease.
     */
    decrease: createAction<number>(actionTypes.DECREASE),

    /**
     * Asynchronous increase.
     */
    increaseAsync: createAction(actionTypes.INCREASE_ASYNC, (amount: number) => Test.doSomeAsyncJob(amount)),

    /**
     * Asynchronous decrease.
     */
    decreaseAsync: createAction(actionTypes.DECREASE_ASYNC, (amount: number) => Test.doSomeAsyncJob(amount))
};

/**
 * Represents the type of action creators.
 */
export type CounterActionCreators = typeof actionCreators;

export default actionCreators;
