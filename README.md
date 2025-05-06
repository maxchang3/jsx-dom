# @maxchang/jsx-dom

[![npm](https://img.shields.io/npm/v/@maxchang/jsx-dom.svg?style=flat-square&color=444)](https://www.npmjs.com/package/@maxchang/jsx-dom)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/maxchang3/jsx-dom/ci.yml?style=flat-square&label=CI)](https://github.com/maxchang3/jsx-dom/actions)
[![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat-square&logo=biome)](https://biomejs.dev)

A browser and userscript-friendly repackaging of [alex-kinokon/jsx-dom](https://github.com/alex-kinokon/jsx-dom).


## What is `jsx-dom`?

A lightweight wrapper around `document.createElement` that lets you create DOM elements using JSX syntax, eliminating tedious imperative code. Particularly valuable for userscripts that need to dynamically generate DOM elements.

## Features

- **UMD Support**: Allows loading directly from a CDN in userscripts via @require.
- **ESM Retained**: Keeps the ESM build for benefits like HMR and optional bundling.
  - Improves DX, especially for projects using [vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey).

## Installation

```sh
pnpm add @maxchang/jsx-dom
```

```sh
yarn add @maxchang/jsx-dom
```

```sh
npm install @maxchang/jsx-dom
```

## Usage 

See [userscript-tsx-starter](https://github.com/maxchang3/userscript-tsx-starter) for a complete example of using `vite-plugin-monkey` with `@maxchang/jsx-dom`.

Reference [jsx-dom](https://github.com/alex-kinokon/jsx-dom#usage).

```jsonc
// tsconfig.json
{
  "jsx": "preserve",
  "jsxImportSource": "@maxchang/jsx-dom",
}
```

```js
// esbuild
{
  jsxInject: `import React from "@maxchang/jsx-dom"`,
  jsx: 'transform',
}
```

```js
// vite.config.js
{
    plugins: [
        monkey({
          //...
            build: {
                externalGlobals: {
                    '@maxchang/jsx-dom': cdn.jsdelivrFastly(`jsxDOM.default`, `dist/index.js`),
                },
            },
        }),
    ],
}
```

## Why Not ...?

- alex-kinokon's [jsx-dom](https://github.com/alex-kinokon/jsx-dom)
  - No UMD support, only ESM. Cannot be used in userscripts via `@require` a CDN.
- violentmonkey's [vm-dom](https://github.com/violentmonkey/vm-dom)
  - Based on `@gera2ld/jsx-dom`, which is not actively maintained.
  - Do not have type definitions for `jsx-runtime`.

## License

This project is licensed under the BSD 3-Clause License, the same as [jsx-dom](https://github.com/alex-kinokon/jsx-dom).

See [LICENSE](./LICENSE) for details.
