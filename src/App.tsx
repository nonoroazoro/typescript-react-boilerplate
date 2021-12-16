import { hot } from "react-hot-loader/root";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { AppHeader } from "./components/AppHeader";
import { ErrorBoundary } from "./components/ErrorBoundary";

import * as styles from "./App.module.less";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const CounterPage = lazy(() => import("./pages/CounterPage"));

export const App = hot(() =>
{
    return (
        <div className={styles.container}>
            <AppHeader />
            <ErrorBoundary>
                <Suspense fallback={<div className={styles.loader}>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<CounterPage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </Suspense>
            </ErrorBoundary>
        </div>
    );
});
