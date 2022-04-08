<h1 align="center">typescript-react-boilerplate</h1>
<p align="center">Just clone and rename to create your own React app</p>
<p align="center">
    <a href="https://github.com/nonoroazoro/typescript-react-boilerplate/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/nonoroazoro/typescript-react-boilerplate.svg" alt="GitHub License" />
    </a>
</p>

## Based on

- typescript
- react v18 (with hooks)
- react-router
- react-hot-loader
- css-modules
- webpack


## Testing

- jest
- @testing-library


## Linter

- [eslint](https://eslint.org/)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)


## Something you should know

1. In `transpileOnly` mode of `ts-loader`, the `Typescript` compiler **will not** generate declaration files, but you can generate them via `tsc`.

1. When using [CSS Modules](https://github.com/css-modules/css-modules):

    1. You should add a declaration file for e.g. `*.less` files, for example, [less.d.ts](./src/typings/less.d.ts).

    1. To make the Iconfont work properly with CSS Modules, you have to import the styles in the global scope:

        ```less
        :global
        {
            @import "~font-awesome/less/font-awesome.less";
        }
        ```

1. While using [react-router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom), you should use `withRouter()` as a function call instead of as a decorator (`@withRouter`), because `TypeScript` doesn't allow decorators to change the signature of the classes they are decorating.
