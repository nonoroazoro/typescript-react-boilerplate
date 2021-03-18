import * as cs from "classnames";
import * as React from "react";

import { BaseReactProps } from "../../types";
import { ErrorBoundaryContext } from "../../components/ErrorBoundary";
import { ExampleModal } from "../../components/ExampleModal";
import { queryValue } from "../../api";

import * as styles from "./CounterPage.less";

export interface CounterPageProps extends BaseReactProps
{
    value?: number;
}

export const CounterPage = (props: CounterPageProps) =>
{
    const { className, value: initialValue = 0 } = props;
    const { throwError } = React.useContext(ErrorBoundaryContext);

    const [value, setValue] = React.useState(initialValue);
    const [showModal, setShowModal] = React.useState(false);

    React.useEffect(() =>
    {
        queryValue().then(setValue).catch(throwError);
    }, [throwError]);

    return (
        <div className={cs(className, styles.container)}>
            <div className={styles.innerContainer}>
                <span className={styles.value}>{value}</span>
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
