import * as React from "react";

import { EnhancedError } from "../../utils";

export interface ErrorBoundaryContext
{
    /**
     * Throws an error to the `ErrorBoundary`.
     *
     * @param {EnhancedError} error The error occurred.
     * @param {[boolean]} toast Defaults to `true`. Indicates whether the error message should be toasted.
     */
    throwError: (error: EnhancedError, toast?: boolean) => void;
}

export const ErrorBoundaryContext = React.createContext({} as ErrorBoundaryContext);
