import * as React from "react";
import { hot } from "react-hot-loader/root";
import { Redirect, Route, Switch } from "react-router-dom";

import { AppHeader } from "./components/AppHeader";
import { AboutPage } from "./pages/AboutPage";
import { CounterPage } from "./pages/CounterPage";

import * as styles from "./App.less";

export const App = hot(() =>
{
    return (
        <div className={styles.container} >
            <AppHeader />
            <main className={styles.main}>
                <Switch>
                    <Route exact path="/" component={CounterPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Redirect to="/" />
                </Switch>
            </main>
        </div >
    );
});
