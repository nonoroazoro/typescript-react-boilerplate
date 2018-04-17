# typescript-react-boilerplate [![Dependency Status](https://david-dm.org/nonoroazoro/typescript-react-boilerplate.svg?style=flat-square)](https://david-dm.org/nonoroazoro/typescript-react-boilerplate) [![Build Status](https://travis-ci.org/nonoroazoro/typescript-react-boilerplate.svg?branch=master)](https://travis-ci.org/nonoroazoro/typescript-react-boilerplate)


## Based on

- typescript
- react
- react-router-dom
- react-router-redux (v5)
- react-hot-loader
- webpack (v4)
- css-modules


## Testing

- jest
- enzyme


## Something you should know

1. In `transpileOnly` mode of `ts-loader`, the `Typescript` compiler **will not** generate declaration files.

1. When using [CSS Modules](https://github.com/css-modules/css-modules), you have to make declaration files for e.g. `*.less` files, for example, [css-modules.d.ts](./src/typings/css-modules.d.ts).

1. When using [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom), you should use `withRouter()` as a function call instead of as a decorator (`@withRouter`), because `TypeScript` doesn't allow decorators to change the signature of the classes they are decorating.

1. In [jest.config.js](./scripts/jest/jest.config.js), the primary challenge is how to configure the `rootDir` appropriately.
