import * as React from "react";
import { PureComponent } from "react";
import { hot } from "react-hot-loader";
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from "react-router-dom";

import Counter from "../../containers/Counter";
import About from "../About";
import AppHeader from "../AppHeader";

import * as styles from "./App.less";

// Add hook to auto re-render the root component, see https://github.com/gaearon/react-hot-loader#appcontainer-vs-hot
class App extends PureComponent
{
    render()
    {
        return (
            <div className={styles.app}>
                <AppHeader className={styles.appHeader} />
                <main className={styles.main}>
                    <Switch>
                        <Route exact path="/" component={Counter} />
                        <Route path="/about" component={About} />
                        <Redirect to="/" />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default hot(module)(withRouter<RouteComponentProps<any>>(App as any));
