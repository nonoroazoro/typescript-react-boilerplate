import * as React from "react";

export function useInterval(
    onInterval: () => void,
    interval: number,
    pause: boolean = false
)
{
    const ref = React.useRef(onInterval);

    // Updates when the callback is changed.
    React.useEffect(() =>
    {
        ref.current = onInterval;
    }, [onInterval]);

    React.useEffect(() =>
    {
        if (!pause)
        {
            // Starts a new timer when the interval or pause is changed.
            const timer = setInterval(() => ref.current(), interval);
            return () => clearInterval(timer);
        }
        return;
    }, [interval, pause]);
}

export function useTimeout(
    onTimeout: () => void,
    timeout: number,
    pause: boolean = false
)
{
    const ref = React.useRef({ onTimeout, actualTimeout: timeout, startTime: Date.now() });

    // Updates when the timeout is changed.
    React.useEffect(() =>
    {
        ref.current.actualTimeout = timeout;
    }, [timeout]);

    // Updates when the callback is changed.
    React.useEffect(() =>
    {
        ref.current.onTimeout = onTimeout;
    }, [onTimeout]);

    React.useEffect(() =>
    {
        if (pause)
        {
            // Calculates the actual timeout.
            ref.current.actualTimeout -= (Date.now() - ref.current.startTime);
            return;
        }
        else
        {
            // Records the start time.
            ref.current.startTime = Date.now();

            // Starts a new timer when the timeout or pause is changed.
            const timer = setTimeout(() => ref.current.onTimeout(), ref.current.actualTimeout);
            return () => clearTimeout(timer);
        }
    }, [timeout, pause]);
}

/**
 * Advanced timer which supports both `interval` and `timeout`.
 */
export function useTimer(
    onInterval: () => void,
    interval: number,
    onTimeout: () => void,
    timeout: number,
    pause: boolean = false
)
{
    const ref = React.useRef({ onInterval, onTimeout, timeRemaining: timeout });

    // Updates when the timeout is changed.
    React.useEffect(() =>
    {
        ref.current.timeRemaining = timeout;
    }, [timeout]);

    // Updates when the callbacks are changed.
    React.useEffect(() =>
    {
        ref.current.onInterval = onInterval;
    }, [onInterval]);
    React.useEffect(() =>
    {
        ref.current.onTimeout = onTimeout;
    }, [onTimeout]);

    React.useEffect(() =>
    {
        if (!pause)
        {
            if (ref.current.timeRemaining <= 0)
            {
                ref.current.onTimeout();
                return;
            }
            else
            {
                // Starts a new timer when the interval or pause is changed.
                const timer = setInterval(() =>
                {
                    ref.current.timeRemaining -= interval;
                    if (ref.current.timeRemaining <= 0)
                    {
                        clearInterval(timer);
                        ref.current.onTimeout();
                    }
                    else
                    {
                        ref.current.onInterval();
                    }
                }, interval);
                return () => clearInterval(timer);
            }
        }
        return;
    }, [interval, pause]);
}
