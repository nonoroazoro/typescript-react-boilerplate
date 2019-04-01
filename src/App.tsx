import * as React from "react";
import { hot } from "react-hot-loader/root";
import { Redirect, Route, Switch } from "react-router-dom";

import { About } from "./components/About";
import { AppHeader } from "./components/AppHeader";
import { Counter } from "./components/Counter";

import * as styles from "./App.less";

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
