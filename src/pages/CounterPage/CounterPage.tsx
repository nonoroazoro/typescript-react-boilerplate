import * as cs from "classnames";
import * as React from "react";

import { BaseReactProps } from "../../types";

import * as styles from "./CounterPage.less";

export interface CounterPageProps extends BaseReactProps
{
    value: number;
}

export const CounterPage: React.FC<CounterPageProps> = (props) =>
{
    const { className, value: initialValue } = props;
    const [value, setValue] = React.useState(initialValue);
    return (
        <div className={cs(className, styles.container)}>
            <span className={styles.valueText}>{value}</span>
            <button className={styles.btn} onClick={_handleClick(1)}>+1</button>
            <button className={styles.btn} onClick={_handleClick(-1)}>-1</button>
            <button className={styles.btn} onClick={_handleClick(2)}>+2</button>
            <button className={styles.btn} onClick={_handleClick(-3)}>-3</button>
        </div>
    );

    function _handleClick(increment: number)
    {
        return () => setValue((prev) => prev + increment);
    }
};

CounterPage.defaultProps = {
    value: 0
};
