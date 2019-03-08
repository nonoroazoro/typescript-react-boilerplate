import * as cs from "classnames";
import * as React from "react";
import { NavLink } from "react-router-dom";

import { BaseReactProps } from "../../types";

import * as styles from "./AppHeader.less";

/**
 * App header.
 */
export function AppHeader({ className }: BaseReactProps)
{
    return (
        <header className={cs(className)}>
            <nav className={styles.nav}>
                <NavLink exact to="/" className={styles.link} activeClassName={styles.active}>Home</NavLink>
                <NavLink exact to="/about" className={styles.link} activeClassName={styles.active} >About</NavLink>
            </nav>
        </header>
    );
}
