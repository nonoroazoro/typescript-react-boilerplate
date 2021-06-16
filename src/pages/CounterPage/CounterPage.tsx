import { useContext, useEffect, useState } from "react";
import cs from "classnames";

import { ErrorBoundaryContext } from "../../components/ErrorBoundary";
import { ExampleModal } from "../../components/ExampleModal";
import { queryValue } from "../../api";
import type { BaseReactProps } from "../../types";

import * as styles from "./CounterPage.module.less";

export interface CounterPageProps extends BaseReactProps
{
    value?: number;
}

export const CounterPage = (props: CounterPageProps) =>
{
    const { className, value: initialValue = 0 } = props;
    const { throwError } = useContext(ErrorBoundaryContext);

    const [value, setValue] = useState(initialValue);
    const [showModal, setShowModal] = useState(false);

    useEffect(() =>
    {
        queryValue().then(setValue).catch(throwError);
    }, [throwError]);

    return (
        <div className={cs(className, styles.container)}>
            <div className={styles.innerContainer}>
                <span className={styles.value} data-testid="counter-value">{value}</span>
                <button className={styles.btn} type="button" onClick={_handleClick(1)}>+1</button>
                <button className={styles.btn} type="button" onClick={_handleClick(-1)}>-1</button>
                <button className={styles.btn} type="button" onClick={_handleClick(2)}>+2</button>
                <button className={styles.btn} type="button" onClick={_handleClick(-3)}>-3</button>
                <button className={styles.btn} type="button" onClick={_handleShowModal}>I need a dialog...</button>
            </div>
            <ExampleModal
                show={showModal}
                onOK={_handleHideModal}
                onCancel={_handleHideModal}
            />
        </div>
    );

    function _handleClick(increment: number)
    {
        return () => { setValue((prev) => prev + increment); };
    }

    function _handleShowModal()
    {
        setShowModal(true);
    }

    function _handleHideModal()
    {
        setShowModal(false);
    }
};
