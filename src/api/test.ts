/**
 * Fetch and process data.
 */
export async function doSomeAsyncJob(param: number): Promise<number>
{
    const result = await fetchData(param);
    if (result.success)
    {
        return result.data;
    }
    throw new Error(result.message);
}

/**
 * Simulate a web api.
 */
function fetchData(param: number): Promise<{
    data: number,
    success: boolean,
    message?: string
}>
{
    return new Promise((resolve) =>
    {
        setTimeout(() => resolve({
            data: param,
            success: true
        }), Math.random() * 500);
    });
}
