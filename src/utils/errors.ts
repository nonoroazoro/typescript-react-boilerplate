import { EnhancedError } from "../types";

/**
 * Creates an `EnhancedError` object with the specified
 * message, error code, request, response and meta data.
 *
 * @param {string} message The error message.
 * @param {(number | string)} [code] The error code.
 * @param {any} [request] The request.
 * @param {any} [response] The response.
 * @param {any} [meta] The meta data.
 * @returns {Error} The created error.
 */
export function createError(
    message?: string,
    code?: number | string,
    request?: any,
    response?: any,
    meta?: any
): EnhancedError
{
    return enhanceError(new Error(message), code, request, response, meta);
}

/**
 * Enhances an existing `Error` or `EnhancedError` object with the specified
 * error code, request, response and meta data.
 *
 * @param {(Error | EnhancedError)} error The error to enhance.
 * @param {(number | string)} [code] The error code.
 * @param {any} [request] The request.
 * @param {any} [response] The response.
 * @param {any} [meta] The meta data.
 */
export function enhanceError(
    error: Error | EnhancedError,
    code?: number | string,
    request?: any,
    response?: any,
    meta?: any
): EnhancedError
{
    const e: EnhancedError = error;
    e.code = code;
    e.request = request;
    e.response = response;
    e.meta = meta;
    return e;
}
