import { createAction } from "redux-actions";

import { actionCreators, reducer } from "../index";

const INIT_ACTION = createAction<number>("@@counter/init")(0);
const initialState = reducer(undefined as any, INIT_ACTION);

describe("counter logic", () =>
{
    test("initial state", () =>
    {
        expect(initialState).toMatchSnapshot();
    });

    test("reducer: increased", () =>
    {
        const action = actionCreators.increase(1);
        const state = reducer(initialState, action);
        expect(state.value).toEqual(1);
    });
});
