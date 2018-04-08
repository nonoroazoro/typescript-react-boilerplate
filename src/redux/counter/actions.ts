import { Action, createAction } from "redux-actions";

import { Test } from "../../api";
import { createActionTypes } from "../actionHelper";

/**
 * Enum action types of the `Counter` component.
 */
enum EnumTypes
{
    decrease,
    decreaseAsync,
    increase,
    increaseAsync
}

/**
 * Action types of the `Counter` component.
 */
const actionTypes = createActionTypes("counter", EnumTypes);

/**
 * Action creators of the `Counter` component.
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
