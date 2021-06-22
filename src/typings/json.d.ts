/**
 * JSON object.
 */
type JSONObject = {
    [key in string]?: JsonArray | JsonObject | JSONScalar
};

/**
 * JSON array.
 */
type JSONArray = Array<JsonArray | JsonObject | JSONScalar>;

/**
 * JSON scalar.
 */
type JSONScalar = boolean | number | string | null;
