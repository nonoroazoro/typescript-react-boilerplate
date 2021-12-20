export function compose(...fns: Array<(...args: any[]) => any>)
{
    if (fns.length === 0)
    {
        throw new Error("compose requires at least one argument");
    }
    return pipe(...[...fns].reverse());
}

export function pipe(...fns: Array<(...args: any[]) => any>)
{
    if (fns.length === 0)
    {
        throw new Error("pipe requires at least one argument");
    }
    const [f0, ...rest] = fns;
    return (...args: Parameters<typeof f0>) =>
    {
        return rest.reduce((v, f) => f(v), f0(...args));
    };
}
