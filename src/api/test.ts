/**
 * Fetch and process data.
 */
export async function doSomeAsyncJob(param: number): Promise<number>
{
    const result = await _fetchData(param);
    if (result.success)
    {
        return result.data;
    }
    throw new Error(result.error);
}

/**
 * Fetch data with an asynchronous api.
 */
function _fetchData(param: number): Promise<{
    data: number,
    error?: string,
    success: boolean
}>
{
    return new Promise((resolve) =>
    {
        setTimeout(() => resolve({
            data: param,
            success: true
        }), 1000);
    });
}
