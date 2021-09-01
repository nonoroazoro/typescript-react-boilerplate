import { createContext } from "react";
import type { EnhancedError } from "../../utils";

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

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ErrorBoundaryContext = createContext({} as ErrorBoundaryContext);
