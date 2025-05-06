# @maxchang/jsx-dom

A browser and userscript-friendly repackaging of [alex-kinokon/jsx-dom](https://github.com/alex-kinokon/jsx-dom).

```sh
pnpm add @maxchang/jsx-dom
```

```sh
yarn add @maxchang/jsx-dom
```

```sh
npm install @maxchang/jsx-dom
```

## What is `jsx-dom`?

A lightweight wrapper around `document.createElement` that lets you create DOM elements using JSX syntax, eliminating tedious imperative code. Particularly valuable for userscripts that need to dynamically generate DOM elements.

## Why This Exists

* **UMD Support**: Load directly from CDN in userscripts via `@require` without bundling
* **ESM Retained**: Keeps ESM for development benefits like HMR and type inference through jsx-runtime.
* **Flexible Integration**: Choose CDN-based use or bundle it as needed.

This dual-format distribution enhances DX across both development and deployment workflows, especially for projects using [vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey).

## Why Not ...?

- alex-kinokon's [jsx-dom](https://github.com/alex-kinokon/jsx-dom)
  - No UMD support, only ESM. Cannot be used in userscripts via `@require` a CDN.
- violentmonkey's [vm-dom](https://github.com/violentmonkey/vm-dom)
  - Based on `@gera2ld/jsx-dom`, which is not actively maintained.
  - Do not have type definitions for `jsx-runtime`.
