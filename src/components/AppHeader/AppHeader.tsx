import { NavLink } from "react-router-dom";
import * as cs from "classnames";

import type { BaseReactProps } from "../../types";

import * as styles from "./AppHeader.module.less";

export const AppHeader = (props: BaseReactProps) =>
{
    const { className } = props;
    return (
        <header className={cs(className, styles.container)}>
            <nav className={styles.nav}>
                <NavLink
                    end
                    to="/"
                    className={({ isActive }) => cs(styles.link, { [styles.active]: isActive })}
                >
                    Home
                </NavLink>
                <NavLink
                    end
                    to="/about"
                    className={({ isActive }) => cs(styles.link, { [styles.active]: isActive })}
                >
                    About
                </NavLink>
            </nav>
        </header>
    );
};
