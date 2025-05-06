import { defineConfig } from '@rslib/core'

export default defineConfig({
    lib: [
        {
            format: 'umd',
            umdName: 'jsxDOM',
            syntax: 'es2021',
            dts: true,
            output: {
                target: 'web',
            },
        },
        {
            format: 'esm',
            syntax: 'es2021',
            bundle: false,
            dts: true,
        },
    ],
})
