const API = {
    queryValue: "demoApi"
};

/**
 * Queries some data.
 *
 * @throws {EnhancedError}
 */
export async function queryValue()
{
    // const result = await get<number>(API.queryValue);
    return Math.floor(Math.random() * 100);
}
