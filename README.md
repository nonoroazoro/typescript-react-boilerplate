# typescript-react-boilerplate [![Dependency Status](https://david-dm.org/nonoroazoro/typescript-react-boilerplate.svg?style=flat-square)](https://david-dm.org/nonoroazoro/typescript-react-boilerplate) [![Build Status](https://travis-ci.org/nonoroazoro/typescript-react-boilerplate.svg?branch=master)](https://travis-ci.org/nonoroazoro/typescript-react-boilerplate)

> Just clone and rename to create your own app.


## Based on

- typescript
- react (with hooks)
- react-router
- react-hot-loader
- css-modules
- webpack


## Testing

- jest
- enzyme


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

1. In [jest.config.js](./scripts/jest/jest.config.js), the primary challenge is how to configure the `rootDir` appropriately.

1. The [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) is still a very new thing, which means the related configurations may change in the future.
