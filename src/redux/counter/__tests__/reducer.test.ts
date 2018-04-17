import { createAction } from "redux-actions";
import * as configureStore from "redux-mock-store";
import * as reduxPromiseMiddleware from "redux-promise";

import { actionCreators, CounterState, INITIAL_STATE, reducer } from "../index";

let initialState: CounterState;
const createMockStore = configureStore([reduxPromiseMiddleware]);

describe("counter's reducer", () =>
{
    beforeAll(() =>
    {
        const action = createAction<number>("@@counter/INIT")(undefined as any);
        initialState = reducer(undefined as any, action);
    });

    afterEach(() =>
    {
        expect(initialState).toEqual(INITIAL_STATE);
    });

    it("increased", () =>
    {
        const amount = Math.floor(Math.random() * 10 + 1);
        const action = actionCreators.increase(amount);
        const state = reducer(initialState, action);
        expect(state.value).toEqual(amount);
    });

    it("decreased", () =>
    {
        const amount = Math.floor(Math.random() * 10 + 1);
        const action = actionCreators.decrease(amount);
        const state = reducer(initialState, action);
        expect(state.value).toEqual(-amount);
    });

    it("increased (async)", async () =>
    {
        const amount = Math.floor(Math.random() * 10 + 1);
        const store = createMockStore();
        const asyncAction = actionCreators.increaseAsync(amount);
        const action = await store.dispatch(asyncAction);

        expect(action).not.toHaveProperty("error");

        const state = reducer(initialState, action);
        expect(state.value).toEqual(amount);
    });

    it("decreased (async)", async () =>
    {
        const amount = Math.floor(Math.random() * 10 + 1);
        const store = createMockStore();
        const asyncAction = actionCreators.decreaseAsync(amount);
        const action = await store.dispatch(asyncAction);

        expect(action).not.toHaveProperty("error");

        const state = reducer(initialState, action);
        expect(state.value).toEqual(-amount);
    });
});
