import * as React from "react";
import { hot } from "react-hot-loader/root";
import { Redirect, Route, Switch } from "react-router-dom";

import { About } from "../About";
import { AppHeader } from "../AppHeader";
import { Counter } from "../Counter";

import * as styles from "./App.less";

// tslint:disable-next-line: variable-name
export const App = hot(() =>
{
    return (
        <div className={styles.app} >
            <AppHeader className={styles.appHeader} />
            <main className={styles.main}>
                <Switch>
                    <Route exact path="/" component={Counter} />
                    <Route path="/about" component={About} />
                    <Redirect to="/" />
                </Switch>
            </main>
        </div >
    );
});
