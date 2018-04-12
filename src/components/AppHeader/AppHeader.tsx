import * as cs from "classnames";
import * as React from "react";
import { NavLink } from "react-router-dom";

import * as styles from "./AppHeader.less";

export interface AppHeaderProps
{
    className?: string;
}

/**
 * App header.
 */
export default ({ className }: AppHeaderProps) =>
{
    return (
        <header className={cs(className, styles.appHeader)}>
            <nav className={styles.nav}>
                <NavLink exact to="/" className={styles.link} activeClassName={styles.active}>Home</NavLink>
                <NavLink exact to="/about" className={styles.link} activeClassName={styles.active} >About</NavLink>
            </nav>
        </header>
    );
};
