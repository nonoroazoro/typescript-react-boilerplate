import { createAction } from "redux-actions";
import * as configureStore from "redux-mock-store";
import * as reduxPromiseMiddleware from "redux-promise";

import { actionCreators, CounterState, INITIAL_STATE, reducer } from "../index";

let initialState: CounterState;
const createMockStore = configureStore([reduxPromiseMiddleware]);

describe("Reducer: counter", () =>
{
    beforeAll(() =>
    {
        const action = createAction<number>("@@counter/init")(undefined as any);
        initialState = reducer(undefined as any, action);
    });

    afterEach(() =>
    {
        expect(initialState).toEqual(INITIAL_STATE);
    });

    it("increased by 1", () =>
    {
        const action = actionCreators.increase(1);
        const state = reducer(initialState, action);
        expect(state.value).toEqual(1);
    });

    it("decreased by 1", () =>
    {
        const action = actionCreators.decrease(1);
        const state = reducer(initialState, action);
        expect(state.value).toEqual(-1);
    });

    it("increased (async) by 1", async () =>
    {
        const store = createMockStore();
        const asyncAction = actionCreators.increaseAsync(1);
        const action = await store.dispatch(asyncAction);

        expect(action).not.toHaveProperty("error");

        const state = reducer(initialState, action);
        expect(state.value).toEqual(1);
    });

    it("decreased (async) by 1", async () =>
    {
        const store = createMockStore();
        const asyncAction = actionCreators.decreaseAsync(1);
        const action = await store.dispatch(asyncAction);

        expect(action).not.toHaveProperty("error");

        const state = reducer(initialState, action);
        expect(state.value).toEqual(-1);
    });
});
