import { fireEvent, render, waitFor } from "@testing-library/react";

import { CounterPage } from "../../src/pages/CounterPage";

describe("CounterPage", () =>
{
    const props = { className: "counter-page-test", value: 1 };

    it("should render the page", () =>
    {
        const { container } = render(<CounterPage {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it("should render initial value", () =>
    {
        const { getByTestId } = render(<CounterPage {...props} />);
        expect(getByTestId("counter-value").textContent).toBe(String(props.value));
    });

    it("should change value after the increase button is clicked", async () =>
    {
        const { getByTestId, getByText } = render(<CounterPage {...props} />);
        fireEvent.click(getByText("+1"));
        await waitFor(() =>
        {
            expect(getByTestId("counter-value").textContent).toEqual(String(props.value + 1));
        });
    });
});
