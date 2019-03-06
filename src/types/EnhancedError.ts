/**
 * Represents an enhanced `Error`.
 */
export interface EnhancedError extends Error
{
    /**
     * The error code, if available.
     */
    code?: number;

    /**
     * The request, if available.
     */
    request?: any;

    /**
     * The response, if available.
     */
    response?: any;

    /**
     * The meta data, if available.
     */
    meta?: any;
}
