/**
 * JSON value.
 */
type JSONValue = JSONArray | JSONObject | boolean | number | string | null;

/**
 * JSON object.
 */
type JSONObject = {
    [key in string]?: JSONValue
};

/**
 * JSON array.
 */
interface JSONArray extends Array<JSONValue> { }
