import { Action, createAction } from "redux-actions";

import { Test } from "../../api";
import { createActionTypes } from "../actionHelpers";

/**
 * Enum action types of the `counter` component.
 */
enum BaseTypes
{
    decrease,
    decreaseAsync,
    increase,
    increaseAsync
}

/**
 * Action types of the `counter` component.
 */
const actionTypes = createActionTypes("counter", BaseTypes);

/**
 * Action creators of the `counter` component.
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
 * Represents the type of action creators.
 */
export type CounterActionCreators = typeof actionCreators;

export default actionCreators;
