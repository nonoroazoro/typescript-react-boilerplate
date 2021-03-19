import type { ReactNode } from "react";

/**
 * Represents the base props of a `React` component;
 */
export interface BaseReactProps
{
    /**
     * The class name of the component.
     */
    className?: string;

    children?: ReactNode;
}
