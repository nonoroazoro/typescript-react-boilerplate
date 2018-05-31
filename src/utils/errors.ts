import { EnhancedError } from "../types";

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
export function createError(message?: string, code?: number, request?: any, response?: any, meta?: any): EnhancedError
{
    const error = new Error(message);
    return enhanceError(error, code, request, response, meta);
}

/**
 * Update an `Error` with the specified error code, request, response and meta data.
 *
 * @param {Error} error The error to update.
 * @param {number} [code] The error code.
 * @param {any} [request] The request.
 * @param {any} [response] The response.
 * @param {any} [meta] The meta data.
 */
export function enhanceError(error: Error, code?: number, request?: any, response?: any, meta?: any): EnhancedError
{
    const result: EnhancedError = error;
    result.code = code;
    result.request = request;
    result.response = response;
    result.meta = meta;
    return result;
}
