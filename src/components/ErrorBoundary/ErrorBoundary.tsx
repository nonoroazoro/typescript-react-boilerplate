import * as React from "react";

import { BaseReactProps } from "../../types";
import { EnhancedError } from "../../utils";
import { ErrorBoundaryContext } from "./ErrorBoundaryContext";

export interface ErrorBoundaryState
{
    hasError: boolean;
    toast: boolean;
    error?: EnhancedError;
}

export class ErrorBoundary extends React.PureComponent<BaseReactProps, ErrorBoundaryState>
{
    constructor(props: BaseReactProps)
    {
        super(props);
        this.state = { hasError: false, toast: true };
    }

    static getDerivedStateFromError(error: any)
    {
        return { hasError: true, toast: true, error };
    }

    _throwError = (error: EnhancedError | undefined, toast = true) =>
    {
        this.setState({ hasError: true, toast, error });
    };

    render()
    {
        const { error, hasError, toast } = this.state;
        if (hasError && error != null)
        {
            if (error.code === "USER_NOT_LOGIN")
            {
                location.href = "https://github.com/nonoroazoro/typescript-react-boilerplate";
            }
            else
            {
                if (toast)
                {
                    // Toast the error.
                    // message.error(error.message);
                }

                // Show error message.
                return <div>{error.message}</div>;
            }
        }
        return (
            <ErrorBoundaryContext.Provider value={{ throwError: this._throwError }}>
                {this.props.children}
            </ErrorBoundaryContext.Provider>
        );
    }
}
