# @maxchang/jsx-dom

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

## Why Not ...?

- alex-kinokon's [jsx-dom](https://github.com/alex-kinokon/jsx-dom)
  - No UMD support, only ESM. Cannot be used in userscripts via `@require` a CDN.
- violentmonkey's [vm-dom](https://github.com/violentmonkey/vm-dom)
  - Based on `@gera2ld/jsx-dom`, which is not actively maintained.
  - Do not have type definitions for `jsx-runtime`.

## License

This project is licensed under the BSD 3-Clause License, the same as [jsx-dom](https://github.com/alex-kinokon/jsx-dom).

See [LICENSE](./LICENSE) for details.
