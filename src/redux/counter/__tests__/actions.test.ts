import * as configureStore from "redux-mock-store";
import * as reduxPromiseMiddleware from "redux-promise";

import { actionCreators, actionTypes } from "../index";

let store: any;
const createMockStore = configureStore([reduxPromiseMiddleware]);

describe("Actions: counter", () =>
{
    beforeAll(() =>
    {
        store = createMockStore();
    });

    beforeEach(() =>
    {
        store.clearActions();
    });

    it("dispatch increase action", () =>
    {
        const amount = 1;
        const expectedActions = [{
            type: actionTypes.INCREASE,
            payload: amount
        }];

        const action = actionCreators.increase(amount);
        store.dispatch(action);
        expect(store.getActions()).toEqual(expectedActions);
    });

    it("dispatch decrease action", () =>
    {
        const amount = 1;
        const expectedActions = [{
            type: actionTypes.DECREASE,
            payload: amount
        }];

        const action = actionCreators.decrease(amount);
        store.dispatch(action);
        expect(store.getActions()).toEqual(expectedActions);
    });

    it("dispatch increaseAsync action", async () =>
    {
        const amount = 1;
        const expectedActions = [{
            type: actionTypes.INCREASE_ASYNC,
            payload: amount
        }];

        const action = actionCreators.increaseAsync(amount);
        await store.dispatch(action);
        expect(store.getActions()).toEqual(expectedActions);
    });

    it("dispatch decreaseAsync action", async () =>
    {
        const amount = 1;
        const expectedActions = [{
            type: actionTypes.DECREASE_ASYNC,
            payload: amount
        }];

        const action = actionCreators.decreaseAsync(amount);
        await store.dispatch(action);
        expect(store.getActions()).toEqual(expectedActions);
    });
});
