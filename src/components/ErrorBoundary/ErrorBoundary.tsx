import * as React from "react";

import { BaseReactProps } from "../../types";
import { EnhancedError } from "../../utils";
import { ErrorBoundaryContext } from "./ErrorBoundaryContext";

export class ErrorBoundary extends React.PureComponent<BaseReactProps>
{
    _throwError = (error: EnhancedError | undefined, toast = true) =>
    {
        if (error)
        {
            if (error.code === "USER_NOT_LOGIN")
            {
                // Example: Redirect to the login page.
                location.href = "https://github.com/nonoroazoro/typescript-react-boilerplate";
            }
            else if (toast)
            {
                // Toast your error.
                // message.fail(error.message);
            }
        }
    };

    componentDidCatch(error: EnhancedError)
    {
        this._throwError(error);
    }

    render()
    {
        return (
            <ErrorBoundaryContext.Provider value={{ throwError: this._throwError }}>
                {this.props.children}
            </ErrorBoundaryContext.Provider>
        );
    }
}
