/**
 * JSON value.
 */
export type JSONValue = JSONArray | JSONObject | boolean | number | string | null;

/**
 * JSON object.
 */
export type JSONObject = {
    [key in string]?: JSONValue
};

/**
 * JSON array.
 */
export interface JSONArray extends Array<JSONValue> { }
