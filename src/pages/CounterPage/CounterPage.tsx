import * as cs from "classnames";
import * as React from "react";

import { ExampleModal } from "../../components/ExampleModal";
import { BaseReactProps } from "../../types";

import * as styles from "./CounterPage.less";

export interface CounterPageProps extends BaseReactProps
{
    value: number;
}

export const CounterPage = (props: CounterPageProps) =>
{
    const { className, value: initialValue } = props;
    const [value, setValue] = React.useState(initialValue);
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div className={cs(className)}>
            <div className={styles.content}>
                <span className={styles.valueText}>{value}</span>
                <button className={styles.btn} onClick={_handleClick(1)}>+1</button>
                <button className={styles.btn} onClick={_handleClick(-1)}>-1</button>
                <button className={styles.btn} onClick={_handleClick(2)}>+2</button>
                <button className={styles.btn} onClick={_handleClick(-3)}>-3</button>
                <button className={styles.btn} onClick={_handleShowModal}>I need a dialog...</button>
            </div>
            <ExampleModal
                show={showModal}
                onOK={() => setShowModal(false)}
                onCancel={() => setShowModal(false)}
            />
        </div>
    );

    function _handleClick(increment: number)
    {
        return () => setValue((prev) => prev + increment);
    }

    function _handleShowModal()
    {
        setShowModal(true);
    }
};

CounterPage.defaultProps = {
    value: 0
};
