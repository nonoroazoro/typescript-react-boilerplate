import { shallow, ShallowWrapper } from "enzyme";
import * as React from "react";

import { CounterPage, CounterPageProps } from "../../src/pages/CounterPage";

describe("Counter Component", () =>
{
    let props: CounterPageProps;
    let wrapper: ShallowWrapper<CounterPageProps>;

    beforeAll(() =>
    {
        props = {
            className: "counter-test",
            value: 0
        };
        wrapper = shallow(<CounterPage {...props} />);
    });

    it("render component", () =>
    {
        expect(wrapper).toMatchSnapshot();
    });

    it("render init value", () =>
    {
        expect(wrapper.find(".value").text()).toBe(String(props.value));
    });

    it("render class name", () =>
    {
        expect(wrapper.find(`.${props.className}`)).not.toBeNull();
    });
});
