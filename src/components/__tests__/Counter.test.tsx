import { shallow, ShallowWrapper } from "enzyme";
import * as React from "react";

import { Counter, CounterProps } from "../Counter";

describe("Counter (Presentational)", () =>
{
    let props: CounterProps;
    let wrapper: ShallowWrapper<CounterProps>;

    beforeAll(() =>
    {
        props = {
            actions: {
                decrease: jest.fn(),
                decreaseAsync: jest.fn(),
                increase: jest.fn(),
                increaseAsync: jest.fn()
            },
            className: "counter-test",
            value: 0
        };
        wrapper = shallow(<Counter {...props} />);
    });

    it("render", () =>
    {
        expect(wrapper).toMatchSnapshot();
    });

    it("init value", () =>
    {
        expect(wrapper.find(".value").text()).toEqual(String(props.value));
    });

    it("class name", () =>
    {
        expect(wrapper.find(`.${props.className}`)).not.toBeNull();
    });
});
