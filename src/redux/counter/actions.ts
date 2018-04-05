import { Action, createAction } from "redux-actions";

import { Test } from "../../api";
import { createActionTypes } from "../actionHelpers";

/**
 * Enum action types of `counter` component.
 */
enum BaseTypes
{
    decrease,
    decreaseAsync,
    increase,
    increaseAsync
}

/**
 * Action types of `counter` component.
 */
const actionTypes = createActionTypes("counter", BaseTypes);

/**
 * Action creators of `counter` component.
 */
const actionCreators = {
    /**
     * Synchronous increase.
     */
    increase: createAction(actionTypes.increase, (amount: number) => amount),

    /**
     * Synchronous decrease.
     */
    decrease: createAction(actionTypes.decrease, (amount: number) => amount),

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
 * Represents the types action creators.
 */
export type CounterActionCreators = typeof actionCreators;

export default actionCreators;
