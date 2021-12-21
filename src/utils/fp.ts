export type ArityFunction = (...args: any) => any;
export type UnaryFunction = (arg: any) => any;

export function compose(...fns: [...unary: UnaryFunction[], arity: ArityFunction])
{
    if (fns.length === 0)
    {
        throw new Error("compose requires at least one argument");
    }
    const fn = fns.pop() as ArityFunction;
    return (...args: Parameters<ArityFunction>) =>
    {
        return fns.reduceRight((v, f) => f(v), fn(...args));
    };
}

export function pipe(...fns: [arity: ArityFunction, ...unary: UnaryFunction[]])
{
    if (fns.length === 0)
    {
        throw new Error("pipe requires at least one argument");
    }
    const [f0, ...rest] = fns;
    return (...args: Parameters<ArityFunction>) =>
    {
        return rest.reduce((v, f) => f(v), f0(...args));
    };
}
